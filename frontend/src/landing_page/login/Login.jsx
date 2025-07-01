import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false); // ⬅️ New state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        form,
        { withCredentials: true }
      );

      if (response.status === 200) {
        alert("Login successful!");
        window.location.href = `${import.meta.env.VITE_DASHBOARD_URL}`;
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
      alert("Login failed: " + (error.response?.data?.message || "Unknown error"));
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Open a free demat and trading account</h1>
      <p className="text-center mb-5">
        Start investing brokerage free and join a community of 1+ crore investors and traders
      </p>
      <div className="row align-items-center">
        <div className="col-md-6 col-12 mb-4">
          <img src="/assets/account_open.png" alt="Login Banner" className="img-fluid" />
        </div>

        <div className="col-md-6 col-12">
          <h2 className="mb-3">Login to Your Account</h2>
          <p className="mb-4">Access your portfolio and start trading instantly</p>

         
          {loading ? (
            <div className="d-flex justify-content-center my-4">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleLogin}
              className="border p-4 shadow rounded bg-light"
            >
              <ul className="list-unstyled">
                <li className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter username"
                    value={form.username}
                    onChange={handleChange}
                    required
                  />
                </li>

                <li className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </li>
              </ul>

              <button type="submit" className="btn btn-success w-100">
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
