import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppDispatch } from "./components/redux/store/reduxStore";
import {
  BannerFilmData,
  topFilmData,
  premieresFilmData,
  filterData,
} from "./components/redux/reducers/reduxReducers";
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
  LoginPage,
  Person,
  Premium,
} from "./components/ui/components";
import "./components/ui/loginPage/loginPage.css";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(BannerFilmData());
    dispatch(premieresFilmData());
    setTimeout(() => {
      dispatch(topFilmData());
    }, 1000);
    setTimeout(() => {
      dispatch(filterData());
    }, 2000);
  }, []);

  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HelloPage />} />
              <Route path="film/:id" element={<CurrentFilm />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="find/:search" element={<Find />} />
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
        </Router>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
