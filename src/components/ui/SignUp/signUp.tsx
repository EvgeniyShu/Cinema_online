import { useState } from "react";

import { addNewUserToFirestore, auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import SignupSchema from "./validationSchema";
import { Formik, Form, Field } from "formik";
import {
  InitialContextProps,
  useThemeContext,
} from "../../themeContext/themes";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../authContext/authContext";
import { CustomButton } from "../../shared/customButton/customButton";

export const SignUp = () => {
  const bg = require("./img/background.webp");
  const logo = require("./img/logo.svg").default;
  const themeContextData: InitialContextProps = useThemeContext();
  const [errorEmail, setErrorEmail] = useState(false);
  const authData = useAuthContext();
  const navigate = useNavigate();

  return (
    <div
      className="validation"
      style={{
        background: `linear-gradient(to bottom, black 10%, transparent 235%), url('${bg}') 100% 100% no-repeat`,
        backgroundSize: "cover, cover",
      }}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          )
            .then((userCredential) => {
              const user = userCredential.user;
              setErrorEmail(false);
              addNewUserToFirestore(
                values.firstName,
                values.lastName,
                values.email
              );
              setTimeout(() => {
                setSubmitting(true);

                navigate(`/account`, {
                  replace: false,
                });
              }, 400);
            })
            .catch((error) => {
              setErrorEmail(true);
              alert("Данная почта уже используется");
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          isValid,
          dirty,
        }) => (
          <div
            style={{
              borderColor: themeContextData.themeStyle.text,
              color: themeContextData.themeStyle.text,
              fontSize: themeContextData.themeStyle.fontSize,
              background: themeContextData.themeStyle.background,
            }}
            className="wrapper"
          >
            <Form className="form" style={{}}>
              <img
                style={{
                  background: themeContextData.themeStyle.body,
                  borderRadius: 50,
                }}
                className="logo"
                src={logo}
                alt="logo"
              />
              <h1>Создать аккаунт</h1>
              <label htmlFor="firstName">Имя</label>
              <Field
                style={{
                  color: themeContextData.themeStyle.text,
                  borderBottom: `1px solid ${themeContextData.themeStyle.text}`,
                }}
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
              {errors.firstName && touched.firstName ? (
                <div className="error">{errors.firstName}</div>
              ) : null}
              <br />
              <label htmlFor="lastName">Фамилия</label>
              <Field
                style={{
                  color: themeContextData.themeStyle.text,
                  borderBottom: `1px solid ${themeContextData.themeStyle.text}`,
                }}
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
              {errors.lastName && touched.lastName ? (
                <div className="error">{errors.lastName}</div>
              ) : null}
              <br />
              <label htmlFor="email" style={{ color: errorEmail ? "red" : "" }}>
                Email
              </label>
              <Field
                style={{
                  color: themeContextData.themeStyle.text,
                  borderBottom: `1px solid ${themeContextData.themeStyle.text}`,
                }}
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
              <br />
              <label htmlFor="password">Пароль</label>
              <Field
                style={{
                  color: themeContextData.themeStyle.text,
                  borderBottom: `1px solid ${themeContextData.themeStyle.text}`,
                }}
                type="password"
                name="password"
                autoComplete="on"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}

              <br />
              <label htmlFor="confirmPassword">Подтвердите пароль</label>

              <Field
                style={{
                  color: themeContextData.themeStyle.text,
                  borderBottom: `1px solid ${themeContextData.themeStyle.text}`,
                }}
                type="password"
                name="confirmPassword"
                autoComplete="on"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="error">{errors.confirmPassword}</div>
              ) : null}

              <CustomButton
                themestyles={themeContextData.themeStyle}
                disabled={!isValid || !dirty}
                type="submit"
                style={{ margin: "50px auto" }}
              >
                Подтвердить данные
              </CustomButton>

              <p
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 20,
                  cursor: "pointer",
                }}
                onClick={() => {
                  authData.visible();
                  navigate("/");
                }}
              >
                есть аккаунт
              </p>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
