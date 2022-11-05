import { render } from "react-dom";
import Main from "./Main";
import LoginPage from "./pages/Login/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Main />}/>
    <Route path="/login" element={<LoginPage/>}/>
  </Routes>
  </BrowserRouter>,
  rootElement
);
