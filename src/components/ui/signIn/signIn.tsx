import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/reduxStore";
import { setUser } from "../../redux/reducers/authReducer";
import { CustomButton } from "../../shared/customButton/customButton";
import {
  AuthContextProps,
  useAuthContext,
} from "../../authContext/authContext";
import ThemeButton from "../../shared/changeTheme/themeButton";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import {
  ButtonWrapper,
  SectionSignIn,
  SignInForm,
  SignInInput,
  SignInLabel,
} from "./styledSignIn";
import {
  addNewUserToFirestore,
  auth,
  getCurrentUser,
  googleProvider,
} from "../../../firebase";
import { fetchFavoritesFromFirestore } from "../../redux/reducers/reduxReducers";
import { SearchButton } from "../header/customInput/styledCustomInput";

export const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const themeContextData: InitialContextProps = useThemeContext();
  const googleIcon = require("./img/google_icon.svg").default;
  const authContext: AuthContextProps = useAuthContext();

  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorSign, setErrorSign] = useState<boolean>(false);

  useEffect(() => {
    checkValidForm();
    onAuthStateChanged(auth, async (data) => {
      if (data) {
        const currentUser = await getCurrentUser(data.email);
        const userId = currentUser ? currentUser[0].id : "";
        dispatch(
          setUser({
            email: data.email,
            password: data.providerId,
            token: data.refreshToken,
            id: userId,
          })
        );
        dispatch(
          fetchFavoritesFromFirestore(
            currentUser ? currentUser[0].favorite : ""
          )
        );
        authContext.notVisible();
      } else {
        authContext.visible();
      }
    });
  }, [emailError, passwordError, email, password]);

  const handleLogin = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        const currentUser = await getCurrentUser(email);
        const userId = currentUser ? currentUser[0].id : "";

        dispatch(
          setUser({
            email: user.email,
            password: user.providerId,
            token: user.refreshToken,
            id: userId,
          })
        );

        setTimeout(() => {
          authContext.notVisible();
        }, 1000);
      })
      .catch((error) => {
        setErrorSign(true);
      });
  };

  const signInWithGoogle = async (
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      console.log(auth.currentUser);
      const currentUser = auth.currentUser;
      addNewUserToFirestore(
        currentUser ? currentUser.displayName : "google",
        "Google account",
        currentUser ? currentUser?.email : ""
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "password":
        setPassword(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    switch (event.target.id) {
      case "password":
        password.length >= 8 ? setPasswordError(false) : setPasswordError(true);
        setErrorSign(false);
        break;

      case "email":
        email.includes("@") ? setEmailError(false) : setEmailError(true);
        setErrorSign(false);
        break;
    }
  };

  const showHidePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const checkValidForm = () => {
    if (!emailError && email && !passwordError && password) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <SectionSignIn
      themestyles={themeContextData.themeStyle}
      currenttheme={themeContextData.theme}
    >
      <SignInForm themestyles={themeContextData.themeStyle}>
        <ButtonWrapper>
          <SearchButton
            theme={themeContextData.themeStyle}
            onClick={signInWithGoogle}
            title="google account"
          >
            <img src={googleIcon} alt="googleIcon" style={{ width: 43 }} />
          </SearchButton>
          <ThemeButton />
        </ButtonWrapper>
        <h2>Войти в аккаунт</h2>
        <SignInLabel themestyles={themeContextData.themeStyle}>
          {!emailError ? (
            <p style={{ margin: 10 }}>Почта</p>
          ) : (
            <p style={{ color: "red" }}>неправильно введена почта</p>
          )}

          <SignInInput
            themestyles={themeContextData.themeStyle}
            id="email"
            type="text"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="current-email"
          />
        </SignInLabel>
        <SignInLabel themestyles={themeContextData.themeStyle}>
          {!passwordError ? (
            <div
              onClick={showHidePassword}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <p style={{ margin: 10 }}>Пароль</p>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </div>
          ) : (
            <p style={{ color: "red" }}>неправильный пароль</p>
          )}
          <SignInInput
            themestyles={themeContextData.themeStyle}
            id="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
          />
        </SignInLabel>
        {errorSign ? <p>Неправильная почта или пароль</p> : <></>}
        <CustomButton
          themestyles={themeContextData.themeStyle}
          onClick={handleLogin}
          disabled={isValid}
        >
          Войти
        </CustomButton>

        <NavLink
          to="/signup"
          onClick={() => authContext.notVisible()}
          style={{
            color:
              themeContextData.theme === "light"
                ? themeContextData.themeStyle.body
                : themeContextData.themeStyle.text,
          }}
        >
          Создать аккаунт
        </NavLink>
      </SignInForm>
    </SectionSignIn>
  );
};
