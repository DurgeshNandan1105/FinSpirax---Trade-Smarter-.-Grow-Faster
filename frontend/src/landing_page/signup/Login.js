import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div
        className="p-5 shadow rounded bg-white w-100"
        style={{ maxWidth: "450px" }}
      >
        <h2 className="mb-4 fw-normal text-center" style={{ color: "#00d2ff" }}>
          Login Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label text-secondary fs-6">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              className="form-control border-0 border-bottom rounded-0 fst-italic shadow-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4 text-start">
            <label htmlFor="password" className="form-label text-secondary fs-6">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              className="form-control border-0 border-bottom rounded-0 fst-italic shadow-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100 text-white py-2 mb-4 fw-semibold"
            style={{ backgroundColor: "#00d2ff", border: "none" }}
          >
            Submit
          </button>

          <div className="text-muted text-center fs-6">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-decoration-none fw-normal"
              style={{ color: "#00d2ff" }}
            >
              Signup
            </Link>
          </div>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;