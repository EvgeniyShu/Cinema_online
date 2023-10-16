import React, { FC, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppDispatch, useAppSelector } from "../redux/store/reduxStore";

export const AuthContext = React.createContext({} as AuthContextProps);
export const useAuthContext = () => useContext(AuthContext);

export interface AuthContextProps {
  userAuth: boolean;
  id: string;
  signUpVisible: boolean;
  visible: () => void;
  notVisible: () => void;
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
  const [signUpVisible, setSignUpVisible] = useState(true);
  const { id } = useAppSelector((state) => state.auth.user);

  const visible = () => {
    setSignUpVisible(true);
  };

  const notVisible = () => {
    setSignUpVisible(false);
  };

  const initialAuth: AuthContextProps = {
    userAuth: !!id,
    id: id,
    signUpVisible: signUpVisible,
    visible: visible,
    notVisible: notVisible,
  };

  return (
    <AuthContext.Provider value={initialAuth}>{children}</AuthContext.Provider>
  );
};

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const authContextData = useAuthContext();
  return authContextData.userAuth ? children : <Navigate to="/login" />;
};
