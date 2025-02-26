import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

const UpdatingFund = () => {
  const { id } = useParams();
  const [fund, setFund] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getFund = async () => {
      const res = await axios.get(
        `https://donation-project-backend.vercel.app/single-fund/${id}`
      );
      setFund(res.data.data);
    };
    getFund();
  }, [id]);
  console.log(fund);
  if (!fund) {
    return (
      <div>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const { title, description, thumbnail, amount } = fund;
  const handleUpdateFund = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const thumbnail = form.thumbnail.value;
    const amount = form.amount.value;

    const newFund = { title, description, thumbnail, amount };
    try {
      const res = await axios.put(
        `http://localhost:5000/api/update-fund/${id}`,
        newFund
      );
      console.log(res);
      navigate("/admin/all-fundraiser");

      if (res.status === "Success") {
        toast.success(res.data.message("Fund updated succesfully"));
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      {" "}
      <div>
        <div className="text-center text-2xl font-semibold">Update Fund</div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body " onSubmit={handleUpdateFund}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Input your title"
                className="input input-bordered"
                required
                name="title"
                defaultValue={title}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Input your description"
                className="input input-bordered"
                required
                name="description"
                defaultValue={description}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Thumbnail</span>
              </label>
              <input
                type="text"
                placeholder="Input your Photo"
                className="input input-bordered"
                required
                name="thumbnail"
                defaultValue={thumbnail}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Amount</span>
              </label>
              <input
                type="number"
                placeholder="Input your Amount"
                className="input input-bordered"
                required
                name="amount"
                defaultValue={amount}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning" type="submit">
                Update Fund
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatingFund;
