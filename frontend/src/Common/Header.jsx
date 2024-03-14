import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const navbarContainerStyle = {
    backgroundColor: "#007bff",
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "15px",
  };

  const navbarItemStyle = {
    textDecoration: "none",
    color: "#fff",
    fontSize: "18px",
    marginRight: "20px",
    transition: "color 0.3s ease-in-out",
  };

  const navbarItemHoverStyle = {
    color: "#ffc107",
  };

  return (
    <div style={navbarContainerStyle} className="mt-4">
      <div style={navbarStyle}>
        <Link to="/home" style={navbarItemStyle}>
          Home
        </Link>
        <Link to="/create" style={navbarItemStyle}>
          Create
        </Link>
        <Link to="/gridview" style={navbarItemStyle}>
          GridView
        </Link>
        <Link to="/listview" style={navbarItemStyle}>
          ListView
        </Link>
        <Link to="/tableview" style={navbarItemStyle}>
          TableView
        </Link>
      </div>
    </div>
  );
}

export default Header;
