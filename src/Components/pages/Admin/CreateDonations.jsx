import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const CreateDonations = () => {
  const handleCreateDonation = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const thumbnail = form.thumbnail.value;
    const amount = Number(form.amount.value);
    const category = form.category.value;
    const newDonation = {
      title,
      description,
      thumbnail,
      amount,
      category,
    };
    try {
      const res = await axios.post(
        "https://donation-project-backend.vercel.app/create-donations",
        newDonation
      );
      if (res.data.status === "Success") {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="bg-gradient-to-r from-[#fefae0] via-[#7ebff7] to-[#8338ec] ... w-full h-full">
        <div className=" flex justify-center items-center mt-20">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="text-center pt-6 text-2xl font-bold">
              Create Donation
            </div>
            <form className="card-body " onSubmit={handleCreateDonation}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Input your donation title"
                  className="input input-bordered"
                  name="title"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="input your description"
                  className="input input-bordered"
                  required
                  name="description"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Amount</span>
                </label>
                <input
                  type="number"
                  placeholder="input your Amount"
                  className="input input-bordered"
                  required
                  name="amount"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Thumbnail</span>
                </label>
                <input
                  type="text"
                  placeholder="imge URL"
                  className="input input-bordered"
                  required
                  name="thumbnail"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Category</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  name="category"
                  required
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
                <button
                  className="btn bg-[#1c0a35] text-[#e9d8a6]"
                  type="submit"
                >
                  Create Donation{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateDonations;
