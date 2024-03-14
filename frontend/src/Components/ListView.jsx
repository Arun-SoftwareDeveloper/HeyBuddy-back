// client/src/components/ListView.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import backendApi from "../backendAPi";
import "../Styles/ListView.css";
const ListView = () => {
  const [cruds, setCruds] = useState([]);

  useEffect(() => {
    const fetchCruds = async () => {
      try {
        const response = await axios.get(`${backendApi}/cruds`);
        setCruds(response.data);
      } catch (error) {
        console.error("Error fetching cruds: ", error.message);
      }
    };

    fetchCruds();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendApi}/cruds/${id}`);
      setCruds(cruds.filter((crud) => crud._id !== id));
      toast.success("Crud deleted!");
    } catch (error) {
      console.error("Error deleting Crud: ", error.message);
      toast.error("Error deleting Crud");
    }
  };

  return (
    <div className="container mt-5">
      <h2>List View</h2>
      <ul className="list-group">
        {cruds.map((crud) => (
          <li key={crud._id} className="list-group-item">
            <strong>{crud.name}</strong>
            <br />
            Mobile Number: {crud.mobileNumber}
            <br />
            Email: {crud.email}
            <br />
            Location: {crud.location}
            <br />
            Social Media Link: {crud.socialMediaLink}
            <br />
            <Link to={`/edit/${crud._id}`} className="btn btn-warning mr-2">
              Edit
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(crud._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default ListView;
