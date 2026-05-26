import React from "react";

import { Link } from "react-router-dom";

import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const UserCard = ({ user, handleDelete }) => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body p-4">
        <h4 className="fw-bold mb-2">
          {user.name}
        </h4>

        <p className="user-email">
          {user.email}
        </p>

        <div className="user-card-actions">
          <Link
            to={`/user/${user.id}`}
            className="btn btn-info text-white"
          >
            <FaEye /> View
          </Link>

          <Link
            to={`/edit/${user.id}`}
            className="btn btn-warning text-dark"
          >
            <FaEdit /> Edit
          </Link>

          <button
            className="btn btn-danger"
            onClick={() =>
              handleDelete(user.id)
            }
          >
            <FaTrash /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;