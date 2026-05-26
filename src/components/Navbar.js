import React from "react";

import { Link } from "react-router-dom";

import { FaUsers } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4 py-3">
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center gap-2"
      >
        <FaUsers />

        <span>User Management</span>
      </Link>

      <Link
        to="/create"
        className="btn btn-primary"
      >
        Add User
      </Link>
    </nav>
  );
};

export default Navbar;