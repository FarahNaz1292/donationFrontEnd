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
        "http://localhost:5000/api/create-fund",
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
    <div>
      <div className="text-center text-2xl font-semibold">Create Fund</div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body " onSubmit={handleSubmit}>
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
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-warning" type="submit">
              Create Fund
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFundraising;
