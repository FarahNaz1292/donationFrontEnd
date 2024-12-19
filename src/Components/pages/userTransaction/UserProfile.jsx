import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import userAuth from "../../../utils/AuthProvider/AuthProvider";
import Navbar from "../../sharedComponents/Navbar";
import Footer from "../../sharedComponents/Footer";
import SwiperSlider from "../home/SwiperSlider";

const UserProfile = () => {
  const { user, loading } = userAuth();
  console.log(user);

  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (!user || loading) return;

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/get-user/${user.id}`
        );
        console.log(response);

        setUserProfile(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
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
      <Navbar />
      {userProfile ? (
        <div className="flex flex-col w-full h-full justify-center items-center m-10 bg-gradient-to-r from-[#fefae0] via-[#7ebff7] to-[#8338ec] ...">
          <h1 className="text-3xl font-extrabold m-8">Your Profile</h1>
          <div>
            <img
              src={userProfile.profilePicture}
              alt={userProfile.userName}
              className="w-[1200px]"
            />
          </div>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card w-full shadow-2xl ">
                <form className="card-body ml-20 mr-20 ">
                  <div className="form-control flex flex-row gap-20">
                    <label className="label">
                      <span className="label-text text-2xl font-bold">
                        userName
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder={userProfile.userName}
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
                      placeholder={userProfile.email}
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
                      placeholder={userProfile.role}
                      className="input input-bordered text-center text-2xl text-zinc-950"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <Link to={`/user/update-user/${userProfile._id}`}>
                      {" "}
                      <button className="btn bg-[#1c0a35] text-[#e9d8a6] w-full">
                        Edit
                      </button>
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

      <Footer />
    </>
  );
};

export default UserProfile;
