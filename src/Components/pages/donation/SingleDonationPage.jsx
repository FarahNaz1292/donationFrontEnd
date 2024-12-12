import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleDonationPage = () => {
  const { id } = useParams();
  const [donations, setDonations] = useState(null);
  useEffect(() => {
    const fetchDonation = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/donations/${id}`
      );
      setDonations(response.data.data);
    };
    fetchDonation();
  }, [id]);
  console.log(donations);

  return (
    <>
      <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto mt-10">
        {donations ? (
          <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
              <img src={donations.thumbnail} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{donations.title}</h2>
              <p>{donations.description}</p>
              <div className="card-actions justify-center"></div>
              <p>{donations.amount}</p>
              <p>{donations.category}</p>
            </div>
          </div>
        ) : (
          <p>Loading donation details...</p>
        )}
      </div>
    </>
  );
};

export default SingleDonationPage;
