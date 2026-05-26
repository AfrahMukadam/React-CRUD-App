import React, {
  useEffect,
  useState,
} from "react";

import API from "../api/userApi";

import Loader from "../components/Loader";
import UserCard from "../components/UserCard";

const Home = () => {
  const [users, setUsers] = useState([]);

  const [filteredUsers, setFilteredUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [error, setError] =
    useState("");

  const fetchUsers = async () => {
    try {
      const response =
        await API.get("/users/");

      const usersData =
        response.data.users ||
        response.data;

      setUsers(usersData);

      setFilteredUsers(usersData);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setError(
        "Failed to fetch users"
      );

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this user?"
  );

  if (!confirmDelete) {
    return;
  }

  try {
    await API.delete(`/users/${id}/`);

    alert("User deleted successfully");

    fetchUsers();
  } catch (error) {
    console.log(error);

    alert("Failed to delete user");
  }
};

  const handleSearch = (value) => {
    setSearch(value);

    const filtered = users.filter(
      (user) =>
        user.name
          .toLowerCase()
          .includes(
            value.toLowerCase()
          )
    );

    setFilteredUsers(filtered);
  };

  if (loading) return <Loader />;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <h1 className="page-title">
          All Users
        </h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search users..."
            className="form-control"
            value={search}
            onChange={(e) =>
              handleSearch(
                e.target.value
              )
            }
          />
        </div>
      </div>

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      {filteredUsers.length === 0 ? (
        <div className="empty-state">
          <h4>No Users Found</h4>
        </div>
      ) : (
        filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            handleDelete={
              handleDelete
            }
          />
        ))
      )}
    </div>
  );
};

export default Home;