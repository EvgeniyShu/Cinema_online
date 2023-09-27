import React, { FC, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = React.createContext({} as AuthContextProps);
export const useAuthContext = () => useContext(AuthContext);

export interface AuthContextProps {
  userAuth: boolean;
  login: () => void;
  logout: () => void;
  daysOfPremium: string;
  setDaysOfPremium: React.Dispatch<React.SetStateAction<string>>;
  values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  setValues: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      confirmPassword: string;
    }>
  >;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

interface PrivateRouteProps {
  children: JSX.Element;
}

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [isUserAuth, setIsUserAuth] = useState(false);
  const [daysOfPremium, setDaysOfPremium] = useState("");
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const logIn = () => {
    setIsUserAuth(true);
  };

  const logOut = () => {
    setIsUserAuth(false);
  };

  const initialAuth: AuthContextProps = {
    userAuth: isUserAuth,
    login: logIn,
    logout: logOut,
    daysOfPremium: daysOfPremium,
    setDaysOfPremium,
    values,
    setValues,
  };

  return (
    <AuthContext.Provider value={initialAuth}>{children}</AuthContext.Provider>
  );
};

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const authContextData = useAuthContext();
  return authContextData.userAuth ? children : <Navigate to="/login" />;
};
