import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import BudgetAppPage from "./pages/BugetAppPage/BudgetAppPage.tsx";

function App() {
  return (
    <Router>
      <div>
        <h1>Budget App</h1>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/budget" element={<BudgetAppPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
