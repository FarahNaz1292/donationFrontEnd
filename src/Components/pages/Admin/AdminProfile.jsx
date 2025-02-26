import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import userAuth from "../../../utils/AuthProvider/AuthProvider";
import Navbar from "../../sharedComponents/Navbar";
import Footer from "../../sharedComponents/Footer";

const AdminProfile = () => {
  const { user, loading } = userAuth();
  // console.log(user);

  const [adminProfile, setAdminProfile] = useState(null);

  useEffect(() => {
    if (!user || loading) return;

    const fetchAdmin = async () => {
      try {
        const response = await axios.get(
          `https://donation-project-backend.vercel.app/get-user/${user.id}`
        );
        console.log(response);

        setAdminProfile(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAdmin();
  }, [user, loading]);
  if (loading) {
    return (
      <div className="min-h-screen max-w[100vh] flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      {adminProfile ? (
        <div className="flex flex-col w-full h-full justify-center items-center bg-gradient-to-r from-[#fefae0] via-[#7ebff7] to-[#8338ec] ...">
          <h1 className="text-3xl font-extrabold m-8">Your Profile</h1>
          <div>
            <img
              src={adminProfile.profilePicture}
              alt={adminProfile.userName}
              className="w-[1200px]"
            />
          </div>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card w-full shadow-2xl ">
                <form className="card-body ml-20 mr-20 mt-6">
                  <div className="form-control flex flex-row gap-20">
                    <label className="label">
                      <span className="label-text text-2xl font-bold">
                        userName
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder={adminProfile.userName}
                      className="input input-bordered text-center text-2xl text-zinc-950"
                    />
                  </div>
                  <div className="form-control flex flex-row gap-32">
                    <label className="label">
                      <span className="label-text text-2xl font-bold">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder={adminProfile.email}
                      className="input input-bordered text-center text-2xl text-zinc-950"
                    />
                  </div>
                  <div className="form-control flex flex-row gap-36 ">
                    <label className="label">
                      <span className="label-text text-2xl font-bold">
                        Role
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder={adminProfile.role}
                      className="input input-bordered text-center text-2xl text-zinc-950"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <Link to={`/admin/update-admin/${adminProfile._id}`}>
                      {" "}
                      <button className="btn btn-primary w-full">Edit</button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>
          Loading user profile...
          <div className="min-h-screen max-w[100vh] flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        </p>
      )}
    </>
  );
};

export default AdminProfile;
