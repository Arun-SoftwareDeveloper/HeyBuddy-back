import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./Common/Header";
import { ToastContainer } from "react-toastify";
import Register from "./Forms/Register";
import Login from "./Forms/Login";
import ForgotPassword from "./Forms/ForgotPassword";
import ResetPassword from "./Forms/ResetPassword";
import Home from "./Components/Home";
import Create from "./Components/Create";
import GridView from "./Components/CridView";
import ListView from "./Components/ListView";
import Edit from "./Components/Edit";
import TableView from "./Components/TableView";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const handleLogin = (userToken) => {
    setToken(userToken);
    setIsLoggedIn(true); // Update isLoggedIn state to true after successful login
  };

  return (
    <Router>
      <div>
        {isLoggedIn && <Header />}
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route
            path="/login"
            element={
              token ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
            }
          />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route
            exact
            path="/resetPassword/:token"
            element={<ResetPassword />}
          />
          {isLoggedIn && (
            <>
              <Route exact path="/home" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/gridview" element={<GridView />} />
              <Route path="/listview" element={<ListView />} />
              <Route path="/tableview" element={<TableView />} />
              <Route path="/edit/:id" element={<Edit />} />
            </>
          )}
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
};

export default App;
