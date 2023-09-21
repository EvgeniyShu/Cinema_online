import React, { FC, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = React.createContext({} as AuthContextProps);
export const useAuthContext = () => useContext(AuthContext);

export interface AuthContextProps {
  userAuth: boolean;
  login: () => void;
  logout: () => void;
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
  };

  return (
    <AuthContext.Provider value={initialAuth}>{children}</AuthContext.Provider>
  );
};

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const authContextData = useAuthContext();
  return authContextData.userAuth ? children : <Navigate to="/" />;
};
