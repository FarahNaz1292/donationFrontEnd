import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import userAuth from "../../../utils/AuthProvider/AuthProvider";
import SwiperSlider from "../home/SwiperSlider";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleDonationPage = () => {
  const { user } = userAuth();
  const { id } = useParams();
  const [donations, setDonations] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [donationID, setDonationId] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "linear",
    });
    const fetchDonation = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/donations/${id}`
      );
      setDonations(response.data.data);
    };
    fetchDonation();
  }, [id]);
  console.log(donations);
  const handleShowModal = (donations) => {
    setShowModal(true);
    setDonationId(donations._id);
  };
  const handleDonateTransaction = async (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const newDonation = {
      donorID: user.id,
      donationID: donations._id,
      message,
    };
    console.log(newDonation);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/create-donation-transaction",
        newDonation
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
        {donations ? (
          <div className="flex max-w-7xl mx-auto m-10 justify-center items-center gap-10">
            <div className="flex items-center justify-center gap-20">
              <div>
                <img
                  src={donations.thumbnail}
                  alt=""
                  className="w-[800px] h-[400px]"
                  data-aos="flip-right"
                />
              </div>
              <div>
                <h2 className="text-nowrap text-2xl font-bold">
                  {donations.title}
                </h2>

                <p className="text-xl font-bold">{donations.category}</p>
                <p className="text-lg font-semibold">${donations.amount}</p>
                <p className="text-nowrap font-semibold">
                  {donations.description}
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
                  className="btn bg-[#1c0a35] text-[#e9d8a6] w-full mt-5"
                  onClick={handleShowModal}
                >
                  Donate
                </button>
                {showModal && (
                  <dialog
                    id="my_modal_5"
                    className="modal modal-middle sm:modal-middle"
                    data-aos="fade-in"
                    open
                  >
                    <div className="modal-box ">
                      <form
                        className="card-body"
                        onSubmit={handleDonateTransaction}
                      >
                        <h3 className="font-bold text-2xl text-center">
                          Donate
                        </h3>
                        <div>
                          {" "}
                          <h1 className="text-xl font-bold ">
                            Amount:${donations.amount}
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

export default SingleDonationPage;
