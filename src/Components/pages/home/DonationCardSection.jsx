import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
const DonationCardSection = () => {
  const [donations, setDonations] = useState([]);
  const [displayCards, setDisplayCards] = useState(4);
  useEffect(() => {
    AOS.init({
      duration: 2500,
      easing: "ease-in-back",
    });
    const getDonations = async () => {
      const response = await axios.get("http://localhost:5000/api/donations");
      setDonations(response.data.data);
    };

    getDonations();
  }, []);
  console.log(donations);

  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <h1 className="text-center text-3xl font-semibold text-[#2e3549]">
          Donation{" "}
        </h1>
        <p className="text-center text-xl text-[#2e3549]">
          When we donate, we not only help others but also enrich our own lives.
          Giving back can boost our mood, reduce stress, and increase our
          overall well-being. It fosters a sense of purpose and gratitude,
          reminding us of the importance of compassion and empathy. By making a
          positive impact on the world, we can create a ripple effect of
          kindness and generosity.
        </p>
      </div>
      <div>
        <div
          className="grid lg:grid-cols-4 md:grid-cols-2   grid-col-1   gap-6 max-w-7xl mx-auto mt-10"
          data-aos="zoom-in-down"
          data-aos-once="true"
        >
          {donations.slice(0, displayCards).map((donation) => {
            return (
              <div
                key={donation.id}
                className="card card-compact bg-base-100  shadow-xl"
              >
                <figure>
                  <img
                    src={donation.thumbnail}
                    alt=""
                    className="w-full h-[20vh]"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-[#2e3549]">
                    {donation.title}
                  </h2>
                  <p className="text-[#2e3549] font-semibold text-center">
                    {donation.description}
                  </p>
                  <div className="card-actions justify-center">
                    <NavLink to={`/donations/${donation._id}`}>
                      <button className="btn bg-[#1c0a35] text-[#e9d8a6] w-60 rounded-md h-10 font-semibold">
                        Show details
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center m-10">
          <NavLink to="/donations">
            <button className="btn bg-[#1c0a35] text-[#e9d8a6] w-40 rounded-md h-10 font-semibold text-center">
              Show All
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default DonationCardSection;
