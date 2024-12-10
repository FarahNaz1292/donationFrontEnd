import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleFundraisingPage = () => {
  const [fundraising, setfundraising] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchFundraising = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/single-fund/${id}`
      );
      setfundraising(response.data.data);
    };
    fetchFundraising();
  }, [id]);
  console.log(fundraising);

  return (
    <>
      <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto mt-10">
        {fundraising ? (
          <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
              <img src="" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{fundraising.title}</h2>
              <img src={fundraising.thumbnail} alt="" />
              <p>{fundraising.description}</p>
              <div className="card-actions justify-center"></div>
              <p>Donation Amount:{fundraising.targetedAmount}</p>
              <p>Amount Collected:{fundraising.amount}</p>
              <p>{fundraising.status}</p>
            </div>
          </div>
        ) : (
          <p>Loading Fundrasings details...</p>
        )}
      </div>
    </>
  );
};

export default SingleFundraisingPage;
