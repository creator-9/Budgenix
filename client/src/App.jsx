import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Dashboard } from "./pages/dashboard";
import { Routes, Route, Router } from "react-router-dom";

import LoginPage from "./pages/loginPage";
import Welcomepage from "./pages/Welcomepage";
import FeaturesPage from "./pages/featurepage";
import SignupPage from "./pages/signupPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Welcomepage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
