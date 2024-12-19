import axios from "axios";
import { useEffect, useState } from "react";

const AllTransactions = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    try {
      const fetchAllTransactions = async () => {
        const response = await axios.get(
          "http://localhost:5000/api/all-transactions"
        );
        setAllTransactions(response.data.data);

        setLoading(false);
      };
      fetchAllTransactions();
    } catch (error) {
      setLoading(false);
    }
  }, [refreshKey]);
  console.log(allTransactions);

  if (loading) {
    return (
      <div className="min-h-screen max-w[100vh] flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto w-full h-full pt-10 bg-gradient-to-r from-[#fefae0] via-[#7ebff7] to-[#8338ec] ... ">
      <h1 className="text-4xl text-center font-bold mb-10">
        {" "}
        All Transactions By Users
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th className="text-lg font-bold">User Name</th>
            <th className="text-lg font-bold">Email</th>
            <th className="text-lg font-bold">Title</th>
            <th className="text-lg font-bold">Amount</th>

            <th className="text-lg font-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allTransactions.map((transaction) => (
            <tr>
              <th></th>
              <td>
                <p>{transaction.donorID?.userName || "N/A"}</p>
              </td>
              <td>{transaction.donorID?.email || "N/A"}</td>
              <td>
                {transaction.donationID
                  ? transaction.donationID.title
                  : transaction.fundRaisingID?.title || "N/A"}
              </td>
              <td>
                {transaction.donationID
                  ? transaction.donationID.amount
                  : transaction.fundRaisingID?.amount || "N/A"}
              </td>

              <th>
                <button className="btn btn-warning btn-xs mr-3">Edit</button>
                <button className="btn btn-error btn-xs">Delete</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTransactions;
