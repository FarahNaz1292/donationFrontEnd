import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import Footer from "../../sharedComponents/Footer";
import Navbar from "../../sharedComponents/Navbar";

const AllDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    try {
      const getDonations = async () => {
        const response = await axios.get("http://localhost:5000/api/donations");
        setDonations(response.data.data);
        setLoading(false);
      };

      getDonations();
    } catch (error) {
      setLoading(false);
    }
  }, [refreshKey]);
  if (loading) {
    return (
      <div>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  console.log(donations);
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/donations/${id}`
      );
      console.log(res);
      if (res.data.status === "Success") {
        toast.success(res.data.message);
        setRefreshKey((prev) => prev + 1);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="overflow-x-auto w-full bg-gradient-to-r from-[#fefae0] via-[#7ebff7] to-[#8338ec] ...">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={donation.thumbnail}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{donation.title}</td>
                <td>{donation.amount}</td>
                <td>{donation.category}</td>
                <td>
                  <Link to={`/admin/update-donation/${donation._id}`}>
                    <button className="btn btn-warning btn-xs mr-4">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn btn-error btn-xs"
                    onClick={() => handleDelete(donation._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default AllDonations;
