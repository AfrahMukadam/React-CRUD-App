import React from "react";

import { useNavigate } from "react-router-dom";

import API from "../api/userApi";

import UserForm from "../components/UserForm";

const CreateUser = () => {
  const navigate = useNavigate();

  const createUser = async (data) => {
    try {
      await API.post("/users", data);

      alert("User created successfully");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert("Failed to create user");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="page-title">
        Create User
      </h1>

      <UserForm onSubmit={createUser} />
    </div>
  );
};

export default CreateUser;