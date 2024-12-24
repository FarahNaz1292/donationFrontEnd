import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
const FundRaising = () => {
  const [fundRaisings, setFundRaisings] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const searchRef = useRef(null);
  const changeRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "linear",
    });
    const getFundraisings = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/funds?search=${searchValue}&sort=${selectValue}`
      );
      setFundRaisings(response.data.data);
    };

    getFundraisings();
  }, [searchValue, selectValue]);
  console.log(fundRaisings);
  const handleSearch = () => {
    setSearchValue(searchRef.current.value);
  };
  const handleSelect = () => {
    setSelectValue(changeRef.current.value);
  };

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
                Search By Raised amount
              </option>
              <option value="HighToLow">HighToLow</option>
              <option value="LowToHigh">LowToHigh</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl ">
        <div className="text-center">
          <h1 className="text-2xl font-bold text">
            Ongoing Fundraising campaigns
          </h1>
          <p className="text-xl font-semibold">
            Please be generous and view all our ongoing campaigns and donate to
            help us make this world a better place to live for all. Your
            consistent support ensures we can maintain our vital programs and
            reach even more people in need. By committing to regular donations,
            you are investing in long-term solutions and positive change. Your
            monthly or annual gift, no matter the size, makes a significant
            difference. Become a dedicated supporter and be part of a movement
            that transforms lives.
          </p>
        </div>
        <div
          className="grid lg:grid-cols-4  md:grid-cols-2 grid-col-1 gap-6 max-w-7xl mx-auto mt-10 mb-10"
          data-aos="fade-down"
        >
          {fundRaisings.map((fund) => {
            return (
              <div
                key={fund._id}
                className="card card-compact bg-base-100  shadow-xl m-2"
              >
                <figure>
                  <img
                    src={fund.thumbnail}
                    alt=""
                    className="w-full h-[20vh]"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{fund.title}</h2>
                  <p>{fund.description}</p>
                  <progress
                    className="progress progress-success w-56"
                    value={(fund.amount / fund.targetAmount) * 100}
                    max="100"
                  ></progress>
                  <p>Targeted Amount: ${fund.targetAmount}</p>
                  <p>Raised Amount: ${fund.amount}</p>
                  <div className="card-actions justify-center">
                    <Link to={`/fundraisings/${fund._id}`}>
                      {" "}
                      <button className="btn bg-[#1c0a35] text-[#e9d8a6] w-[250px] rounded-md h-10 font-semibold">
                        Donate
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

export default FundRaising;
