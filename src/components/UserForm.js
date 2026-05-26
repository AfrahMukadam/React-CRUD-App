import React, { useEffect, useState } from "react";

const UserForm = ({
  onSubmit,
  initialData,
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        email: initialData.email || "",
      });
    }
  }, [initialData]);

  const validate = () => {
  let newErrors = {};

  if (!form.name.trim()) {
    newErrors.name = "Name is required";
  } else if (
    !/^[A-Za-z\s]{3,}$/.test(form.name)
  ) {
    newErrors.name =
      "Name must contain only letters and be at least 3 characters";
  }

  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else if (
    !/\S+@\S+\.\S+/.test(form.email)
  ) {
    newErrors.email = "Invalid email";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      onSubmit(form);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card shadow p-4"
    >
      <h3 className="mb-4 fw-bold">
        User Information
      </h3>

      <div className="mb-3">
        <label className="form-label fw-semibold">
          Name
        </label>

        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
        />

        {errors.name && (
          <small className="text-danger">
            {errors.name}
          </small>
        )}
      </div>

      <div className="mb-4">
        <label className="form-label fw-semibold">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
        />

        {errors.email && (
          <small className="text-danger">
            {errors.email}
          </small>
        )}
      </div>

      <button className="btn btn-primary">
        Save User
      </button>
    </form>
  );
};

export default UserForm;