import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import USRTablePage from "./components/USRTablePage";
import StatusPage from "./components/StatusPage";
import USRaddPage from "./components/USRaddPage";
import SimplifyPage from "./components/SimplifyPage";
import TextToLinesPage from "./components/TextToLinesPage";
import USRTable from "./components/USRTable";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleSignUp = (username, password) => {
    console.log("New User Signed Up");
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/signup"
          element={<SignUpPage onSignUp={handleSignUp} />}
        />
        <Route path="/USR" element={<USRTablePage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/USRadd" element={<USRaddPage />} />
        <Route path="/simplify" element={<SimplifyPage />} />
        <Route path="/text" element={<TextToLinesPage />} />
        <Route path="/usrTable" element={<USRTable />} />
      </Routes>
    </Router>
  );
};

export default App;
