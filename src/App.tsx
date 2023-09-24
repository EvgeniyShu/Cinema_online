import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppDispatch } from "./components/redux/store/reduxStore";
import {
  BannerFilmData,
  fetchTopFilmData,
  premieresFilmData,
} from "./components/redux/reducers/reduxReducers";
import Layout from "./components/layout";

import { HelloPage } from "./components/ui/helloPage/helloPage";
import { ThemeContextProvider } from "./components/themeContext/themes";
import { CurrrentFilm } from "./components/ui/currentFilm/currentFilm";
import { LoginPage } from "./components/ui/loginPage/loginPage";

import { Empty } from "./components/ui/empty/empty";
import { Find } from "./components/ui/find/find";
import { About } from "./components/ui/about/about";
import { AuthContextProvider } from "./components/authContext/authContext";

import { Premium } from "./components/ui/premium/premium";

import "./components/ui/loginPage/loginPage.css";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(BannerFilmData());
    dispatch(premieresFilmData());
    setTimeout(() => {
      dispatch(fetchTopFilmData());
    }, 1000);
  }, []);

  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HelloPage />} />
              <Route path="film/:id" element={<CurrrentFilm />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="find/:search" element={<Find />} />
              <Route path="about" element={<About />} />
              <Route path="premium" element={<Premium />} />
              <Route path="*" element={<Empty />} />
            </Route>
          </Routes>
        </Router>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
