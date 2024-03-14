import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Create from "./Components/Create";
import GridView from "./Components/CridView"; // Corrected typo: CridView -> GridView
import ListView from "./Components/ListView";
import TableView from "./Components/TableView";
import Edit from "./Components/Edit";
import Header from "./Common/Header";

function CrudOperations() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/gridview" element={<GridView />} />
          <Route path="/listview" element={<ListView />} />
          <Route path="/tableview" element={<TableView />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default CrudOperations;
