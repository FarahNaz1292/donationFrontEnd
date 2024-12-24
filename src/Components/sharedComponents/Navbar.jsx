import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import Cookies from "js-cookie";
import userAuth from "../../utils/AuthProvider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = userAuth();
  const handleLogOut = () => {
    Cookies.remove("accessToken");
    setUser(null);
    navigate("/");
  };
  console.log("this is the user", user);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <div className="navbar bg-[#03045e] ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden bg-[#e9d8a6]"
            >
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
          <Link to="/">
            <div className="flex" data-aos="flip-left" data-aos-once="false">
              {" "}
              <img src={logo} alt="" className="lg:w-28 w-14 lg:ml-4 ml-2" />
              <a className="btn btn-ghost text-3xl font-bold text-[#e9d8a6] lg:mt-8">
                GiveHub
              </a>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex items-center  justify-center space-x-4 px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9c4b36] text-lg font-bold  rounded-md"
                    : "text-[#e9d8a6] text-lg font-bold"
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
                    : "text-[#e9d8a6] text-lg font-bold"
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
                    : "text-[#e9d8a6] text-lg font-bold"
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
                    : "text-[#e9d8a6] text-lg font-bold"
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
                    : "text-[#e9d8a6] text-lg font-bold"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        {user ? (
          <div className="navbar-end">
            <div className=" dropdown dropdown-end">
              <button>
                {" "}
                <div className="avatar">
                  <div className="lg:w-16  w-8 rounded-full lg:mr-7 mr-2">
                    <img src={user.profilePicture} alt={user.userName} />
                  </div>
                </div>
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[2] w-52 p-2 shadow"
              >
                <li>
                  {user && user.role === "admin" ? (
                    <ul>
                      <li>
                        <p className="text-xl font-semibold">{user.userName}</p>
                      </li>
                      <li className="font-semibold">
                        <Link to="/admin/admin-home"> Dash Board </Link>
                      </li>
                      <li className="font-semibold">
                        <Link to="/admin/profile">Admin Profile</Link>
                      </li>
                    </ul>
                  ) : (
                    <ul className="flex flex-col items-center justify-center">
                      <li>
                        <p className="text-xl font-semibold">{user.userName}</p>
                      </li>
                      <li className="font-semibold">
                        <Link to="/user/profile">User Profile</Link>
                      </li>
                      <li className="font-semibold ">
                        <Link to="/user/user-transactions">
                          User Transaction
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    className="btn bg-[#1c0a35] text-[#e9d8a6] btn-sm"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to="/signin">
              <button className="btn mr-10 bg-[#1c0a35] text-[#e9d8a6]">
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
