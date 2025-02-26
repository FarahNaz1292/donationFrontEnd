import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

const UpdatingDonations = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [donation, setDonation] = useState(null);
  useEffect(() => {
    const getDonation = async () => {
      const response = await axios.get(
        `https://donation-project-backend.vercel.app/donations/${id}`
      );

      setDonation(response.data.data);
    };

    getDonation();
  }, [id]);
  console.log(id);
  console.log(donation);
  if (!donation) {
    return (
      <div>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  const { title, thumbnail, description, amount, category } = donation;
  const handleUpdateDonation = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const amount = form.amount.value;
    const description = form.description.value;
    const thumbnail = form.thumbnail.value;
    const category = form.category.value;
    const newDonation = {
      title,
      amount,
      description,
      thumbnail,
      category,
    };
    console.log(newDonation);
    try {
      const res = await axios.put(
        `http://localhost:5000/api/donations/${id}`,
        newDonation
      );
      console.log(res);
      if (res.data.status === "Success") {
        toast.success(res.data.message);
        navigate("/admin/all-donation");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div>Create Donation</div>
      <form className="card-body" onSubmit={handleUpdateDonation}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Input your donation title"
            className="input input-bordered"
            name="title"
            required
            defaultValue={title}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="input your description"
            className="input input-bordered"
            required
            name="description"
            defaultValue={description}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Amount</span>
          </label>
          <input
            type="number"
            placeholder="input your Amount"
            className="input input-bordered"
            required
            name="amount"
            defaultValue={amount}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbnail</span>
          </label>
          <input
            type="text"
            placeholder="imge URL"
            className="input input-bordered"
            required
            defaultValue={thumbnail}
            name="thumbnail"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            name="category"
            required
            defaultValue={category}
          >
            <option disabled selected>
              Category
            </option>
            <option>Hunger Relief </option>
            <option>Envirnomental Conservation</option>
            <option>Women's Empowerment</option>
            <option>Medical Reserach</option>
            <option>Disaster Relief</option>
            <option>Animal Welfare</option>
            <option>Arts and Culture</option>
          </select>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning" type="submit">
            Create Donation{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatingDonations;
