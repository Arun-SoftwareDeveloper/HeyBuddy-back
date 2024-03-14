import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import backendApi from "../backendAPi";

const Create = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    location: "",
    socialMediaLink: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({
      name: "",
      mobileNumber: "",
      email: "",
      location: "",
      socialMediaLink: "",
    });

    // Basic validations
    if (!name || !mobileNumber || !email || !location || !socialMediaLink) {
      setErrors({ ...errors, name: "All fields are required" });
      return;
    }

    // Validate mobile number format (10 digits)
    const mobileNumberPattern = /^\d{10}$/;
    if (!mobileNumberPattern.test(mobileNumber)) {
      setErrors({ ...errors, mobileNumber: "Mobile number must be 10 digits" });
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrors({ ...errors, email: "Invalid email format" });
      return;
    }

    // Validate social media link format (starts with www)
    const socialMediaLinkPattern = /^(www\.|https:\/\/)/i;
    if (!socialMediaLinkPattern.test(socialMediaLink)) {
      setErrors({
        ...errors,
        socialMediaLink: "Social media link must start with 'www.'",
      });
      return;
    }

    try {
      await axios.post(`${backendApi}/cruds/add`, {
        name: name,
        mobileNumber: mobileNumber,
        email: email,
        location: location,
        socialMediaLink: socialMediaLink,
      });
      toast.success("Crud added successfully");

      // Handle success (you can redirect or show a success message if needed)
      console.log("Crud added successfully");
      navigate("/listview");
    } catch (error) {
      toast.error("Error creating Crud");
      console.error("Error creating Crud: ", error.message);
      // Handle server error if needed
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create Crud</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number:</label>
          <input
            type="text"
            className={`form-control ${
              errors.mobileNumber ? "is-invalid" : ""
            }`}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          {errors.mobileNumber && (
            <div className="invalid-feedback">{errors.mobileNumber}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="text"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Location:</label>
          <input
            type="text"
            className={`form-control ${errors.location ? "is-invalid" : ""}`}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {errors.location && (
            <div className="invalid-feedback">{errors.location}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Social Media Link:</label>
          <input
            type="text"
            className={`form-control ${
              errors.socialMediaLink ? "is-invalid" : ""
            }`}
            value={socialMediaLink}
            onChange={(e) => setSocialMediaLink(e.target.value)}
          />
          {errors.socialMediaLink && (
            <div className="invalid-feedback">{errors.socialMediaLink}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Create;
