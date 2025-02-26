import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import axios from "axios";

const EditAdminProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editProfile, setEditProfile] = useState(null);
  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axios.get(
        `https://donation-project-backend.vercel.app/get-user/${id}`
      );

      setEditProfile(response.data.data);
    };

    getUserProfile();
  }, [id]);
  console.log(id);
  console.log(editProfile);
  if (!editProfile) {
    return (
      <div>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  const { userName, email, profilePicture } = editProfile;
  const handleEditUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const profilePicture = form.profilePicture.value;

    const editedProfile = {
      userName,
      email,
      profilePicture,
    };
    console.log(editedProfile);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/get-user/${id}`,
        editedProfile
      );
      console.log(res);
      if (res.data.status === "Success") {
        toast.success(res.data.message);
        navigate("/user/profile");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="bg-gradient-to-r from-[#fefae0] via-[#7ebff7] to-[#8338ec] ... w-full h-full">
        <h1 className="text-center m-8 text-4xl font-semibold">
          Edit User Profile
        </h1>
        <div className="flex items-center justify-center">
          <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleEditUser}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">UserName</span>
                </label>
                <input
                  type="text"
                  placeholder="Input your name"
                  className="input input-bordered"
                  name="userName"
                  required
                  defaultValue={userName}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">email</span>
                </label>
                <input
                  type="email"
                  placeholder="input your email"
                  className="input input-bordered"
                  required
                  name="email"
                  defaultValue={email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <input
                  type="text"
                  placeholder={editProfile.role}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Picture</span>
                </label>
                <input
                  type="text"
                  placeholder={editProfile.profilePicture}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button
                  className="btn bg-[#1c0a35] text-[#e9d8a6]"
                  type="submit"
                >
                  Save Changes{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAdminProfile;
