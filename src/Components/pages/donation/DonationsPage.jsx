import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const DonationsPage = () => {
  const [donations, setDonations] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const searchRef = useRef(null);
  const changeRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
    const getDonations = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/donations?search=${searchValue}&sort=${selectValue}`
      );
      setDonations(response.data.data);
    };

    getDonations();
  }, [searchValue, selectValue]);

  console.log(donations);
  const handleSearch = () => {
    setSearchValue(searchRef.current.value);
  };
  const handleSelect = () => {
    setSelectValue(changeRef.current.value);
  };
  console.log(searchValue);
  console.log(selectValue);

  return (
    <>
      <div
        className="flex  justify-center items-center realtive mb-32"
        data-aos="fade-zoom-in"
      >
        <div className="flex items-center justify-center w-full h-20 bg-gradient-to-r  from-[#7ebff7] to-[#4438ec] ... absolute top-1 gap-7 outline-double outline-blue-950 ">
          <div>
            <label className="input input-lg w-full max-w-xs flex items-center gap-2">
              <input
                ref={searchRef}
                type="text"
                className="grow textarea-lg "
                placeholder="Search"
              />
              <button onClick={handleSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </label>
          </div>
          <div>
            {" "}
            <select
              className="select select-bordered w-full max-w-xs bg-[#1c0a35] text-[#e9d8a6]"
              ref={changeRef}
              onChange={handleSelect}
            >
              <option disabled selected>
                Search By amount
              </option>
              <option value="HighToLow">HighToLow</option>
              <option value="LowToHigh">LowToHigh</option>
            </select>
          </div>
        </div>
      </div>
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
                  <p>Amount:${donation.amount}</p>
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
