import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AppDispatch } from "./components/redux/store/reduxStore";
import {
  BannerFilmData,
  topFilmData,
  premieresFilmData,
} from "./components/redux/reducers/reduxReducers";
import { filterData } from "./components/redux/reducers/findReducer";
import Layout from "./components/layout";
import {
  AuthContextProvider,
  PrivateRoute,
} from "./components/authContext/authContext";
import { ThemeContextProvider } from "./components/themeContext/themes";
import {
  About,
  Account,
  CurrentFilm,
  Empty,
  Find,
  HelloPage,
  SignUp,
  Person,
  Premium,
  FindPage,
  PremiumSlider,
} from "./components/ui/components";
import "./components/ui/SignUp/signUp.css";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect(() => {
    dispatch(BannerFilmData());
    dispatch(premieresFilmData());
    dispatch(topFilmData());
    dispatch(filterData());
  }, [dispatch]);

  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HelloPage />} />
              <Route path="film/:id" element={<CurrentFilm />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="find/:search" element={<Find />} />
              <Route path="find" element={<FindPage />} />
              <Route path="about" element={<About />} />
              <Route path="person/:id" element={<Person />} />
              <Route
                path="premium"
                element={
                  <PrivateRoute>
                    <Premium />
                  </PrivateRoute>
                }
              ></Route>
              <Route path="premium/:search" element={<PremiumSlider />}></Route>
              <Route
                path="account"
                element={
                  <PrivateRoute>
                    <Account />
                  </PrivateRoute>
                }
              ></Route>
              <Route path="*" element={<Empty />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}
