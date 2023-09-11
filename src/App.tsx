import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/ui/header/header";
import { HelloPage } from "./components/ui/helloPage/helloPage";
import { ThemeContextProvider } from "./components/themeContext/themes";
import { CurrrentFilm } from "./components/ui/currentFilm/currentFilm";
import { LoginPage } from "./components/ui/loginPage/loginPage";
import "./components/ui/loginPage/loginPage.css";
import { Empty } from "./components/ui/empty/empty";
import { Find } from "./components/ui/find/find";
import { About } from "./components/ui/about/about";

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HelloPage />} />
          <Route path="/film/:id" element={<CurrrentFilm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/find" element={<Find />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Empty />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
