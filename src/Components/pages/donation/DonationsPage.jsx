import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const DonationsPage = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 2500,
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
      <div className="mx-auto max-w-7xl  text-[#2e3549]">
        <h1 className="text-center text-4xl font-bold text-[#2e3549] pt-2">
          Donation{" "}
        </h1>

        <p className="text-center text-xl font-semibold m-6">
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
          className="grid grid-cols-4 gap-6 max-w-7xl mx-auto mt-10 mb-10"
          data-aos="fade-up"
        >
          {donations.map((donation) => {
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
                    <Link to={`/donations/${donation._id}`}>
                      {" "}
                      <button className="btn bg-[#1c0a35] text-[#e9d8a6] w-[250px] rounded-md h-10 font-semibold ">
                        Show Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DonationsPage;
