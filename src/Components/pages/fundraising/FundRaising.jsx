import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FundRaising = () => {
  const [fundRaisings, setFundRaisings] = useState([]);

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
        <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto mt-10 mb-10">
          {fundRaisings.map((fund) => {
            return (
              <div
                key={fund._id}
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
                    <Link to={`/fundraisings/${fund._id}`}>
                      {" "}
                      <button className="btn bg-[#2e3549] w-20 rounded-md h-10 font-semibold text-white">
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
