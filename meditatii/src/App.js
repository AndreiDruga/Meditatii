import "./App.css";
import { BrowserRouter, Routes, Route } from "react";
import LoginPage from "./components/Login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
      , document.getElementById("root")
    </div>
  );
}

export default App;
