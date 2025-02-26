import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const CreateFundraising = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.title.value;
    const thumbnail = form.thumbnail.value;
    const amount = Number(form.amount.value);

    const newFund = {
      title,
      description,
      thumbnail,
      amount,
    };
    console.log(newFund);
    try {
      const res = await axios.post(
        "https://donation-project-backend.vercel.app/create-fund",
        newFund
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
      <div className="bg-gradient-to-r from-[#fefae0] via-[#7ebff7] to-[#8338ec] ... w-full h-full flex flex-col items-center justify-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div>
            <h1 className="text-2xl font-bold text-center pt-3">Create Fund</h1>
          </div>
          <form className="card-body " onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Title</span>
              </label>
              <input
                type="text"
                placeholder="Input your title"
                className="input input-bordered "
                required
                name="title"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Description</span>
              </label>
              <input
                type="text"
                placeholder="Input your description"
                className="input input-bordered "
                required
                name="description"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Thumbnail</span>
              </label>
              <input
                type="text"
                placeholder="Input your Photo"
                className="input input-bordered "
                required
                name="thumbnail"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Amount</span>
              </label>
              <input
                type="number"
                placeholder="Input your Amount"
                className="input input-bordered font-bold"
                required
                name="amount"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#1c0a35] text-[#e9d8a6]" type="submit">
                Create Fund
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateFundraising;
