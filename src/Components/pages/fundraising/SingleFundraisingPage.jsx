import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import SwiperSlider from "../home/SwiperSlider";
import userAuth from "../../../utils/AuthProvider/AuthProvider";

const SingleFundraisingPage = () => {
  const { user } = userAuth();
  const [fundraising, setfundraising] = useState(null);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [fundraiserId, setFundraiserId] = useState("");

  useEffect(() => {
    const fetchFundraising = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/single-fund/${id}`
      );
      setfundraising(response.data.data);
    };
    fetchFundraising();
  }, [id]);
  console.log(fundraising);
  const handleShowModal = (fundraising) => {
    setShowModal(true);
    setFundraiserId(fundraising.id);
  };
  const handleFundraisingTransaction = async (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const newFund = {
      donorID: user._id,
      fundraiserId,
      message,
    };
    console.log(newFund);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/create-transaction",
        newFund
      );
      console.log(response);
      if (response.data.status === "Success") {
        console.log("Donation Sent");

        setShowModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SwiperSlider />
      <div>
        {fundraising ? (
          <div className="flex max-w-7xl mx-auto m-10 justify-center items-center gap-10">
            <div className="flex items-center justify-center gap-20">
              <div>
                <img
                  src={fundraising.thumbnail}
                  alt=""
                  className="w-[800px] h-[400px]"
                />
              </div>
              <div>
                <h2 className="text-nowrap text-2xl font-bold">
                  {fundraising.title}
                </h2>

                <p className="text-xl font-bold">{fundraising.category}</p>
                <p className="text-lg font-semibold">
                  ${fundraising.targetAmount}
                </p>
                <progress
                  className="progress progress-success w-56"
                  value={(fundraising.amount / fundraising.targetAmount) * 100}
                  max="100"
                ></progress>
                <p className="text-nowrap font-semibold">
                  {fundraising.description}
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam tempore impedit fuga omnis! Nisi illo quod sint
                  doloremque, sunt modi corrupti! Possimus quibusdam
                  necessitatibus molestiae cum ducimus. Dolorum, quibusdam odit!
                </p>
                <h1 className="text-lg font-bold">Why Donate?</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam, quasi necessitatibus consectetur, vero voluptatum porro
                  ipsum aut doloremque temporibus illo illum accusantium sint ea
                  assumenda dolor praesentium! Voluptatum, nam iure.
                </p>

                <button
                  className="btn bg-[#2e3549] text-white  mt-5"
                  onClick={handleShowModal}
                >
                  Donate
                </button>
                {showModal && (
                  <dialog
                    id="my_modal_5"
                    className="modal modal-middle sm:modal-middle"
                    open
                  >
                    <div className="modal-box ">
                      <form
                        className="card-body"
                        onSubmit={handleFundraisingTransaction}
                      >
                        <h3 className="font-bold text-2xl text-center">
                          Donate
                        </h3>
                        <div>
                          {" "}
                          <h1 className="text-xl font-bold ">
                            Amount:${fundraising.amount}
                          </h1>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-lg font-semibold">
                              Message
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Message"
                            className="input input-bordered"
                            name="message"
                            required
                          />
                        </div>
                        <div className="modal-action mt-6">
                          <button
                            className="btn bg-[#2e3549] text-white"
                            type="submit"
                          >
                            Donate Now
                          </button>
                          <button
                            className="btn btn-warning"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </dialog>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading donation details...</p>
        )}
      </div>
    </>
  );
};

export default SingleFundraisingPage;
