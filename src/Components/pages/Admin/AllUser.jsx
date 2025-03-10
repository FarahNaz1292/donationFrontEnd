import axios from "axios";
import React, { useEffect, useState } from "react";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      const getAllUsers = async () => {
        const res = await axios.get("http://localhost:5000/api/user");
        setUsers(res.data.data);
      };
      getAllUsers();
    } catch (error) {}
  }, []);
  const handleChange = async (Id, currentrole) => {
    const newRole = currentrole === "user" ? "admin" : "user";
    try {
      await axios.put(
        `https://donation-project-backend.vercel.app/user-update/${Id}`,
        {
          role: newRole,
        }
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === Id ? { ...user, role: newRole } : user
        )
      );
    } catch (error) {
      console.log(error, "error Changing role");
    }
  };
  return (
    <div className="overflow-x-auto w-full h-full bg-gradient-to-r from-[#fefae0] via-[#7ebff7] to-[#8338ec] ... p-4">
      <h1 className="text-center text-2xl font-semibold p-10">All Users</h1>
      <table className="table w-full ml-4">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={user.profilePicture} alt={user.userName} />
                    </div>
                  </div>
                </div>
              </td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <th>
                <button
                  className="btn bg-[#1c0a35] text-[#e9d8a6]  btn-sm"
                  onClick={() => handleChange(user._id, user.role)}
                >
                  Change Role
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
