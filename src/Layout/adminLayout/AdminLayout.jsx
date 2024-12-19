import React, { useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router";
import logo from "../../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const AdminLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-center">
          {/* Sidebar content here */}
          <li>
            <Link to="/">
              {" "}
              <div className="flex" data-aos="flip-left" data-aos-once="false">
                {" "}
                <img src={logo} alt="" className="w-12 " />
                <a className="btn btn-ghost text-xl font-bold text-[#e9d8a6] mt-8">
                  GiveHub
                </a>
              </div>
            </Link>
          </li>
          <li className="font-bold text-lg">
            <NavLink to="/admin/admin-home">AdminHome</NavLink>
          </li>
          <li className="font-bold text-lg">
            <NavLink to="/admin/create-donation">Create Donation</NavLink>
          </li>
          <li className="font-bold text-lg">
            <NavLink to="/admin/all-donation">All Donation</NavLink>
          </li>
          <li className="font-bold text-lg">
            <NavLink to="/admin/create-fundraiser">Create Fundraiser</NavLink>
          </li>
          <li className="font-bold text-lg">
            <NavLink to="/admin/all-fundraiser">All Fundraiser</NavLink>
          </li>

          <li className="font-bold text-lg">
            <NavLink to="/admin/all-user">All User</NavLink>
          </li>
          <li className="font-bold text-lg">
            <NavLink to="/admin/all-donations">All Donations</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminLayout;
