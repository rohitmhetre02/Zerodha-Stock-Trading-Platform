import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Menu.css"



const Menu = () => {
  const [seletedMenu, setSeletedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleMenuClikes = (index) => {
    setSeletedMenu(index);
  };

  const handleProfileClikes = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/logout`, {}, {
        withCredentials: true,
      });
      window.location.href = `${import.meta.env.VITE_FRONTEND_URL}`;
    } catch (err) {
      alert("Logout failed: " + err.message);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/check`, {
          withCredentials: true,
        });
        if (res.data.loggedIn) {
          setUsername(res.data.user.username);
        } else {
          window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
        }
      } catch (err) {
        console.error("Error checking auth:", err);
        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
      }
    };
    fetchUser();
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
 



  return (
    <div className="menu-container">
      <img src="/assets/logo.png" style={{ width: "50px" }} alt="Logo" />

       <button className="menu-toggle" onClick={() => {
    const menu = document.querySelector('.menus');
    menu.classList.toggle('open');
  }}>
    <i class="fa-solid fa-bars"></i>
  </button>
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClikes(0)}>
              <p className={seletedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClikes(1)}>
              <p className={seletedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClikes(2)}>
              <p className={seletedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClikes(3)}>
              <p className={seletedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClikes(4)}>
              <p className={seletedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClikes(5)}>
              <p className={seletedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClikes}>
          <div className="avatar">{username.slice(0, 2).toUpperCase()}</div>
          <p className="username">{username}</p>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <Link to="/" className="dropdown-item"><i class="fa-solid fa-user"></i> Profile</Link>
              <Link to="/" className="dropdown-item"><i class="fa-solid fa-square-poll-vertical"></i> Dashboard</Link>
              <button className="dropdown-item logout-button" onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i> Logout</button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Menu;
