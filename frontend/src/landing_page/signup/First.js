import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function First() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          email,
          password,
          username,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (data.success) {
        toast.success(data.message, {
          position: "bottom-right",
        });

        setInputValue({
          email: "",
          password: "",
          username: "",
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        toast.error(data.message, {
          position: "bottom-left",
        });
      }
    } catch (error) {
      console.error("Signup error:", error);

      toast.error(error.response?.data?.message || "Signup failed", {
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      

      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
       
          <h1 className="text-center fs-3 mb-3">
            Open a free demat and trading account online
          </h1>

          <p className="text-center text-muted fs-5">
            Start investing brokerage free and join a community of crore
            investors and traders
          </p>

         
          <div className="col-7 p-5">
            <img
              src="/media/images/account_open.svg"
              style={{ width: "90%" }}
              alt="Account Open"
            />
          </div>

          
          <div className="col-5 p-5">
            <div
              className="p-4 shadow rounded bg-white"
              style={{ maxWidth: "420px" }}
            >
              <h2 className="mb-4 fw-normal text-center" style={{ color: "#00d2ff" }}>
                Signup Account
              </h2>

              <form onSubmit={handleSubmit}>
             
                <div className="mb-3 text-start">
                  <label
                    htmlFor="email"
                    className="form-label text-secondary fs-6"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    className="form-control border-0 border-bottom rounded-0 fst-italic shadow-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>

               
                <div className="mb-3 text-start">
                  <label
                    htmlFor="username"
                    className="form-label text-secondary fs-6"
                  >
                    Username
                  </label>

                  <input
                    id="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleOnChange}
                    className="form-control border-0 border-bottom rounded-0 fst-italic shadow-none"
                    placeholder="Enter your username"
                    required
                  />
                </div>

            
                <div className="mb-4 text-start">
                  <label
                    htmlFor="password"
                    className="form-label text-secondary fs-6"
                  >
                    Password
                  </label>

                  <input
                    id="password"
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
                  className="btn w-100 text-white py-2 mb-3 fw-semibold"
                  style={{
                    backgroundColor: "#00d2ff",
                    border: "none",
                  }}
                >
                  Sign Up
                </button>

                
                <div className="text-muted text-center fs-6 mb-3">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-none fw-normal"
                    style={{ color: "#00d2ff" }}
                  >
                    Login
                  </Link>
                </div>

               
                <p
                  className="text-muted text-start mt-3"
                  style={{ fontSize: "0.75rem" }}
                >
                  By proceeding, you agree to the Finspirax{" "}
                  <a
                    href="https://Finspirax.com/terms-and-conditions"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    terms
                  </a>{" "}
                  &{" "}
                  <a
                    href="https://Finspirax.com/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    privacy policy
                  </a>
                </p>

                
                <p
                  className="text-muted text-start mt-2"
                  style={{ fontSize: "0.85rem" }}
                >
                  Looking to open NRI account?{" "}
                  <a
                    href="https://Finspirax.com/open-account/nri/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    Click here
                  </a>
                </p>
              </form>

              <ToastContainer />
            </div>
          </div>
        </div>
      </div>

     

      <div className="container mb-5" style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-3">Already have a demat account?</h2>

            <p className="text-center fs-5 text-muted">
              Move your holdings to FinSpirax and we'll cover your transfer
              costs, up to ₹500,{" "}
              <a href="#" className="text-decoration-none">
                learn more.
              </a>
            </p>
          </div>
        </div>
      </div>

     

      <div
        className="container mb-5"
        style={{
          maxWidth: "1000px",
          marginTop: "80px",
        }}
      >
        <h2 className="text-center mb-5">
          Investment options with Finspirax demat account
        </h2>

        

        <div className="row">
          

          <div className="col-6">
            

            <div className="d-flex align-items-center mb-5">
              <img
                src="/media/images/stocks-acop.svg"
                style={{ width: "140px" }}
                alt="Stocks"
              />

              <div className="ms-4">
                <h3 className="fs-4">Stocks</h3>

                <p className="text-muted">
                  Invest in all exchange-listed securities
                </p>
              </div>
            </div>

        

            <div className="d-flex align-items-center">
              <img
                src="/media/images/ipo-acop (1).svg"
                style={{ width: "140px" }}
                alt="IPO"
              />

              <div className="ms-4">
                <h3 className="fs-4">IPO</h3>

                <p className="text-muted">
                  Apply to the latest IPOs instantly via UPI
                </p>
              </div>
            </div>
          </div>


          <div className="col-6">
            

            <div className="d-flex align-items-center mb-5">
              <img
                src="/media/images/mf-acop.svg"
                style={{ width: "140px" }}
                alt="Mutual Funds"
              />

              <div className="ms-4">
                <h3 className="fs-4">Mutual funds</h3>

                <p className="text-muted">
                  Invest in commission-free direct mutual funds
                </p>
              </div>
            </div>

          

            <div className="d-flex align-items-center">
              <img
                src="/media/images/fo-acop.svg"
                style={{ width: "140px" }}
                alt="Futures and options"
              />

              <div className="ms-5">
                <h3 className="fs-4">Futures & options</h3>

                <p className="text-muted">
                  Hedge and mitigate market risk through simplified F&O trading
                </p>
              </div>
            </div>
          </div>
        </div>

        

        <div className="row mt-5 mb-5">
          <div className="col-12 text-center">
            <button className="btn btn-primary fs-5 px-4 py-2" type="button">
              Explore Investments
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default First;
