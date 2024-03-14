import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import backendApi from "../backendAPi";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [socialMediaLink, setSocialMediaLink] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendApi}/cruds/${id}`);
        const { name, mobileNumber, email, location, socialMediaLink } =
          response.data;
        setName(name);
        setMobileNumber(mobileNumber);
        setEmail(email);
        setLocation(location);
        setSocialMediaLink(socialMediaLink);
      } catch (error) {
        console.error("Error fetching user data: ", error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`${backendApi}/cruds/update/${id}`, {
        name,
        mobileNumber,
        email,
        location,
        socialMediaLink,
      });

      toast.success("Crud updated!");
      navigate("/gridview"); // Redirect to the grid view after successful update
    } catch (error) {
      console.error("Error updating crud:", error.response);
      toast.error("Error updating Crud");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Crud</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number:</label>
          <input
            type="text"
            className="form-control"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Location:</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Social Media Link:</label>
          <input
            type="text"
            className="form-control"
            value={socialMediaLink}
            onChange={(e) => setSocialMediaLink(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
      <ToastContainer />
      git
    </div>
  );
};

export default Edit;
