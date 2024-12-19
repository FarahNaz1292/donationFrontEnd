import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import userAuth from "../../../utils/AuthProvider/AuthProvider";
import Navbar from "../../sharedComponents/Navbar";
import Footer from "../../sharedComponents/Footer";

import TestimonialSection from "../home/TestimonialSection";

const UserTransactions = () => {
  const { user, loading } = userAuth();
  console.log(user);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    if (!user || loading) return;

    const fetchTransaction = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/get-transactions/${user.id}`
        );
        console.log(response);
        setTransaction(response.data.data);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    };

    fetchTransaction();
  }, [user, loading]);

  console.log(transaction);
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
      {transaction.length > 0 ? (
        <div className="flex flex-col items-center justify-center  bg-gradient-to-r from-[#fefae0] via-[#7ebff7] to-[#8338ec] ...">
          <h1 className="text-4xl text-center font-bold p-8">
            User Transaction
          </h1>
          <div className=" w-[80%] h-[100%] m-10 border-8 ">
            <table className="table flex justify-center items-center">
              {/* Table Header */}
              <thead>
                <tr>
                  <th className="text-lg font-bold">User Name</th>
                  <th className="text-lg font-bold">Email</th>

                  <th className="text-lg font-bold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transaction.map((transaction, id) => (
                  <tr key={id}>
                    <td>
                      <p>{transaction.donorID?.userName}</p>
                    </td>
                    <td>{transaction.donorID?.email}</td>

                    <td>
                      {transaction.donationID
                        ? transaction.donationID.amount
                        : transaction.fundRaisingID?.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>No transaction data available</p>
      )}
      <TestimonialSection />
      <Footer />
    </>
  );
};
export default UserTransactions;
