// client/src/components/Home.js
import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card animated-card">
            <div className="card-body">
              <h2
                className="card-title animated-title mb-4"
                style={{ color: "dodgerblue" }}
              >
                Welcome to the CRUD Application
              </h2>
              <p>
                This is a simple CRUD (Create, Read, Update, Delete) application
                built using MERN stack (MongoDB, Express.js, React.js, Node.js).
              </p>
              <p>
                You can perform various operations on the data, such as adding
                new items, viewing the existing ones, updating the information,
                and deleting records.
              </p>
              <p>
                The project is designed to demonstrate the basic principles of
                building a full-stack web application with a focus on CRUD
                operations.
              </p>
              <h4 className="mt-4" style={{ color: "dodgerblue" }}>
                About the Project:
              </h4>
              <p>
                The project utilizes MongoDB Atlas as the database, Express.js
                for the backend, React.js for the frontend, and Node.js for
                server-side scripting.
              </p>
              <p>
                Feel free to explore the different features and functionalities
                provided by the application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
