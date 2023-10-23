import { signOut } from "firebase/auth";
import {
  AuthContextProps,
  useAuthContext,
} from "../../../authContext/authContext";
import {
  InitialContextProps,
  useThemeContext,
} from "../../../themeContext/themes";
import { auth } from "../../../../firebase";
import { removeUser } from "../../../redux/reducers/authReducer";
import { AnimatePresence, motion } from "framer-motion";
import { HeaderMenu } from "./styledMenu";
import { NavLink } from "react-router-dom";
import { CustomButton } from "../../../shared/customButton/customButton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store/reduxStore";
import { Dispatch, SetStateAction } from "react";

interface LinkProps {
  title: string;
  href: string;
}

interface MenuProps {
  changeMenu: Dispatch<SetStateAction<boolean>>;
}

export const Menu = ({ changeMenu }: MenuProps) => {
  const authContext: AuthContextProps = useAuthContext();
  const themeContextData: InitialContextProps = useThemeContext();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = async () => {
    await signOut(auth);
    authContext.visible();
    dispatch(removeUser());
    setTimeout(changeMenu, 1000);
  };

  const animate = {
    hidden: {
      x: "100%",

      opacity: 0.5,
      transition: { duration: 0.5 },
    },
    visible: {
      x: 0,

      opacity: 1,
      transition: { duration: 1.5 },
    },
    exit: { y: "100%", opacity: 0.5, transition: { duration: 1.5 } },
  };

  const navLinksAuth: LinkProps[] = [
    { title: "Главная", href: "/" },
    { title: "Премиум", href: "/premium" },
    { title: "Личный кабинет", href: "/account" },
    { title: "О нас", href: "/about" },
  ];

  const navLinks: LinkProps[] = [
    { title: "Создать аккаунт", href: "/signup" },
    { title: "О нас", href: "/about" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        style={{ position: "absolute", top: 80, left: 0, zIndex: 9 }}
        variants={animate}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        {authContext.userAuth ? (
          <HeaderMenu theme={themeContextData.themeStyle}>
            {navLinksAuth.map((item, index) => (
              <NavLink
                key={index}
                onClick={() => setTimeout(changeMenu, 1000)}
                style={({ isActive }) => ({
                  backgroundColor: isActive
                    ? themeContextData.themeStyle.body
                    : themeContextData.themeStyle.background,
                  borderBottom: isActive
                    ? `3px solid ${themeContextData.themeStyle.text}`
                    : "",
                  textDecoration: "none",
                  color: themeContextData.themeStyle.text,
                  padding: 10,
                  borderRadius: 3,
                })}
                to={item.href}
              >
                {item.title}
              </NavLink>
            ))}
            <div style={{ width: 86 }}>
              <CustomButton
                onClick={handleLogOut}
                themestyles={themeContextData.themeStyle}
              >
                Выйти
              </CustomButton>
            </div>
          </HeaderMenu>
        ) : (
          <HeaderMenu theme={themeContextData.themeStyle}>
            {navLinks.map((item) => (
              <NavLink
                key={"noauth" + item.title}
                onClick={() => setTimeout(changeMenu, 1000)}
                style={({ isActive }) => ({
                  backgroundColor: isActive
                    ? themeContextData.themeStyle.body
                    : themeContextData.themeStyle.background,
                  borderBottom: isActive
                    ? `3px solid ${themeContextData.themeStyle.text}`
                    : "",
                  textDecoration: "none",
                  color: themeContextData.themeStyle.text,
                  padding: 10,
                  borderRadius: 3,
                })}
                to={item.href}
              >
                {item.title}
              </NavLink>
            ))}
          </HeaderMenu>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
