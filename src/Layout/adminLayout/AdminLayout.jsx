import React from "react";
import { Link, NavLink, Outlet } from "react-router";

const AdminLayout = () => {
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
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <Link to="/">GiveHub</Link>
          </li>
          <li>
            <NavLink to="/admin/admin-home">AdminHome</NavLink>
          </li>
          <li>
            <NavLink to="/admin/create-donation">Create Donation</NavLink>
          </li>
          <li>
            <NavLink to="/admin/all-donation">All Donation</NavLink>
          </li>
          <li>
            <NavLink to="/admin/create-fundraiser">Create Fundraiser</NavLink>
          </li>
          <li>
            <NavLink to="/admin/all-fundraiser">All Fundraiser</NavLink>
          </li>

          <li>
            <NavLink to="/admin/all-user">All User</NavLink>
          </li>
          <li>
            <NavLink to="/admin/all-donations">All Donations</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminLayout;
