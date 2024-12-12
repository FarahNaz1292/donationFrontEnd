import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import Cookies from "js-cookie";
import userAuth from "../../utils/AuthProvider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user, setUser } = userAuth();
  const handleLogOut = () => {
    Cookies.remove("accessToken");
    setUser(null);
  };
  console.log("this is the user", user);

  return (
    <div>
      <div className="navbar bg-[#fae3a5]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Donation</a>
              </li>
              <li>
                <a>Fund Raising</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
          <div className="flex">
            {" "}
            <img src={logo} alt="" className="w-20 ml-4" />
            <a className="btn btn-ghost text-2xl font-bold text-[#2e3549] mt-5">
              GiveHub
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex items-center  justify-center space-x-4 px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9c4b36] text-lg font-bold  rounded-md"
                    : "text-[#2e3549] text-lg font-bold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donations"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9c4b36] text-lg font-bold  rounded-md"
                    : "text-[#2e3549] text-lg font-bold"
                }
              >
                Donation
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/fundraisings"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9c4b36] text-lg font-bold  rounded-md"
                    : "text-[#2e3549] text-lg font-bold"
                }
              >
                FundRaising
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9c4b36] text-lg font-bold  rounded-md"
                    : "text-[#2e3549] text-lg font-bold"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9c4b36] text-lg font-bold  rounded-md"
                    : "text-[#2e3549] text-lg font-bold"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        {user ? (
          <details className="dropdown">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={user.profilePicture} alt={user.userName} />
              </div>
            </div>
            {/* <summary className="btn m-1">open or close</summary> */}
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[2] w-52 p-2 shadow">
              <li>
                <p>{user.userName}</p>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                {user && user.role === "admin" ? (
                  <Link to="/admin/admin-home"> DashBoard </Link>
                ) : (
                  <Link to="">User Profile</Link>
                )}
              </li>
              <li>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </li>
            </ul>
          </details>
        ) : (
          <div className="navbar-end">
            <Link to="/signin">
              <button className="btn mr-10 bg-[#2e3549] text-white">
                Join us{" "}
                <FontAwesomeIcon icon={faHeart} className="text-red-800" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
