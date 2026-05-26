import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import API from "../api/userApi";

import UserForm from "../components/UserForm";

import Loader from "../components/Loader";

const EditUser = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [user, setUser] =
    useState(null);

  const fetchUser = async () => {
    try {
      const response =
        await API.get(
          `/users/${id}/`
        );

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const updateUser = async (data) => {
    try {
      await API.patch(
        `/users/${id}`,
        data
      );

      alert("User updated successfully");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert("Failed to update user");
    }
  };

  if (!user) return <Loader />;

  return (
    <div className="container mt-5">
      <h1 className="page-title">
        Edit User
      </h1>

      <UserForm
        initialData={user}
        onSubmit={updateUser}
      />
    </div>
  );
};

export default EditUser;