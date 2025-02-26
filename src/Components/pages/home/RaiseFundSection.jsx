import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const RaiseFundSection = () => {
  const [fundRaisings, setFundRaisings] = useState([]);

  const [cards, setCards] = useState(4);
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
    const getFundraisings = async () => {
      const response = await axios.get(
        "https://donation-project-backend.vercel.app/funds"
      );
      setFundRaisings(response.data.data);
    };

    getFundraisings();
  }, []);
  console.log(fundRaisings);

  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text">
            Ongoing Fundraising campaigns
          </h1>
          <p className="text-xl lg:font-semibold text-center">
            Please be generous and view all our ongoing campaigns and donate to
            help us make this world a better place to live for all
          </p>
        </div>
        <div
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 max-w-7xl mx-auto mt-10"
          data-aos="zoom-out-up"
        >
          {fundRaisings.slice(0, cards).map((fund) => {
            return (
              <div
                key={fund.id}
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
                    <NavLink to={`/fundraisings/${fund._id}`}>
                      {" "}
                      <button className="btn bg-[#1c0a35] text-[#e9d8a6] w-40 rounded-md h-10 font-semibold ">
                        show Details
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center m-10">
          <NavLink to="/fundraisings">
            {" "}
            <button className="btn bg-[#1c0a35] text-[#e9d8a6] w-40 rounded-md h-10 font-semibold">
              Show All
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default RaiseFundSection;
