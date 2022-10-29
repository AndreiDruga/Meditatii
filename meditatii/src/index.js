import { render } from "react-dom";
import App from "./App";
import LoginPage from "./components/Login/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/login" element={<LoginPage/>}/>
  </Routes>
  </BrowserRouter>,
  rootElement
);
