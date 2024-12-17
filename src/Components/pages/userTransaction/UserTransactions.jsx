import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import authProvider from "../../../utils/AuthProvider/AuthProvider";

const UserTransactions = () => {
  const { user } = authProvider;
  //   console.log(user);
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return;

    const fetchTransaction = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/get-transactions/${user.id}`
        );
        console.log(response);
        setTransaction(response.data.data);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    };

    fetchTransaction();
  }, [user]);

  console.log(transaction);
  if (loading) {
    return (
      <div className="min-h-screen max-w[100vh] flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      {transaction.length > 0 ? (
        <div className="overflow-x-auto w-full h-full pt-10">
          <h1 className="text-4xl text-center font-bold mb-10">
            User Transaction
          </h1>
          <table className="table flex justify-center items-center">
            {/* Table Header */}
            <thead>
              <tr>
                <th className="text-lg font-bold">User Name</th>
                <th className="text-lg font-bold">Email</th>
                <th className="text-lg font-bold">Title</th>
                <th className="text-lg font-bold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transaction.map((transaction, id) => (
                <tr key={id}>
                  <td>
                    <p>{transaction.donorID?.userName || "N/A"}</p>
                  </td>
                  <td>{transaction.donorID?.email || "N/A"}</td>
                  <td>
                    {txn.donationId
                      ? transaction.donationID.title
                      : transaction.fundRaisingID?.title || "N/A"}
                  </td>
                  <td>
                    {transaction.donationID
                      ? transaction.donationID.amount
                      : transaction.fundRaisingID?.amount || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No transaction data available</p>
      )}
    </div>
  );
};
export default UserTransactions;
