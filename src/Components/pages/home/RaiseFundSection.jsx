import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const RaiseFundSection = () => {
  const [fundRaisings, setFundRaisings] = useState([]);
  const [cards, setCards] = useState(4);
  useEffect(() => {
    const getFundraisings = async () => {
      const response = await axios.get("http://localhost:5000/api/funds");
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
          <p className="text-xl font-semibold">
            Please be generous and view all our ongoing campaigns and donate to
            help us make this world a better place to live for all
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto mt-10">
          {fundRaisings.slice(0, cards).map((fund) => {
            return (
              <div
                key={fund.id}
                className="card card-compact bg-base-100  shadow-xl"
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
                      <button className="btn bg-[#2e3549] w-40 rounded-md h-10 font-semibold text-white">
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
            <button className="btn bg-[#2e3549] w-25 rounded-md h-10 font-semibold text-white">
              Show All
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default RaiseFundSection;
