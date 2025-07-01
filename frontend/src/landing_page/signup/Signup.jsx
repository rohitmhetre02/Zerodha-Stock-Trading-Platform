import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`, form, {
        withCredentials: true,
      });
      alert(res.data.message || "Signup successful!");
      window.location.href = `${import.meta.env.VITE_DASHBOARD_URL}`;
    } catch (err) {
      alert("Signup failed: " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="container mt-5">
      <h1 className='text-center'>Open a free demat and trading account</h1>
      <p className='text-center mb-5'>
        Start investing brokerage free and join a community of 1+ crore investors and traders
      </p>

      <div className="row align-items-center">
        <div className="col-md-6 col-12 mb-4">
          <img
            src="/assets/account_open.png"
            alt="Account Open"
            className="img-fluid"
          />
        </div>

        <div className="col-md-6 col-12">
          <h2 className="mb-3 text-center">Create Account</h2>

         
          {loading ? (
            <div className="d-flex justify-content-center my-4">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border p-4 shadow rounded bg-light">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    name="username"
                    className="form-control"
                    placeholder="Enter username"
                    onChange={handleChange}
                    required
                  />
                </li>

                <li className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={handleChange}
                    required
                  />
                </li>

                <li className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={handleChange}
                    required
                  />
                </li>
              </ul>

              <button type="submit" className="btn btn-success w-100">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
