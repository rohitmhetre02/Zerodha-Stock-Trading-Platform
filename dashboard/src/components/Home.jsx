import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard"; 

axios.defaults.withCredentials = true;

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

 useEffect(() => {
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/check`, { withCredentials: true }) 
    .then((res) => {
      console.log("User is logged in:", res.data.user);
      setUser(res.data.user);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Not logged in, redirecting to login...");
      navigate("/login");
    });
}, [navigate]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <TopBar />
      <Dashboard user={user} /> 
    </>
  );
};

export default Home;
