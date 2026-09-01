import { Route, Routes } from "react-router-dom";
import { ThemeContext, theme } from "./contexts/ThemeContext";
import routes from "./routes";
import ScrollToTop from "./pages/ScrollToTop";


function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <ScrollToTop />
      <Routes>
        {routes.map((route) => <Route key={route.name} {...route} />)}
      </Routes>
    </ThemeContext.Provider >
  );
}

export default App;
