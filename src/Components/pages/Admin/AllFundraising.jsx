import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

const AllFundraising = () => {
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    try {
      const getFunds = async () => {
        const res = await axios.get("http://localhost:5000/api/funds");
        setFunds(res.data.data);
        setLoading(false);
      };
      getFunds();
    } catch (error) {
      console.log(error);
    }
  }, [refreshKey]);
  if (loading) {
    <div>
      <span className="loading loading-bars loading-lg"></span>
    </div>;
  }
  const handleDelete = async (id) => {
    const res = await axios.delete(
      `http://localhost:5000/api/delete-fund/${id}`
    );
    console.log(res);
    if (res.status === "Success") {
      toast.success(res.data.message);
      setRefreshKey((prev) => prev + 1);
    }
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Targeted Amount</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {funds.map((fund) => (
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={fund.thumbnail} alt={fund.title} />
                    </div>
                  </div>
                </div>
              </td>
              <td>{fund.title}</td>
              <td>{fund.targetAmount}</td>
              <td>{fund.amount}</td>
              <th>
                <Link to={`/admin/update-fund/${fund._id}`}>
                  {" "}
                  <button className="btn btn-warning btn-sm mr-3">Edit</button>
                </Link>
                <button
                  className="btn btn-error btn-sm"
                  onClick={() => handleDelete(fund._id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllFundraising;
