import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import API from "../api/userApi";

import Loader from "../components/Loader";

const UserDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await API.get(
          `/users/${id}/`
        );

        console.log(response.data);

        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) return <Loader />;

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h2>{user.name}</h2>

        <p>
          <strong>Email:</strong>{" "}
          {user.email}
        </p>

        <p>
          <strong>ID:</strong> {user.id}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;