import {
  faClock,
  faCreditCard,
  faHandshake,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBookOpenReader,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AdvertiseSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out-cubic",
    });
  });
  return (
    <>
      <div
        className="flex gap-7 justify-center items-center p-7 m-8 relative lg:flex-row flex-col"
        data-aos="flip-up"
        data-aos-once="false"
      >
        <div>
          <span className="absolute ml-4 mt-2 top-1/3">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="font-bold text-xl text-[#e9d8a6]"
            />
          </span>
          <h1 className="bg-[#441a7e] text-center text-[#e9d8a6] font-bold w-[250px] h-20 py-6 rounded-md ">
            Secure transaction
          </h1>
        </div>
        <div>
          <span className="absolute ml-5 mt-2 top-1/3">
            <FontAwesomeIcon icon={faClock} className="font-bold text-xl" />
          </span>
          <h1 className=" bg-[#441a7e] text-center text-[#e9d8a6] font-bold w-[250px] h-20 py-6 rounded-md">
            Real-time Updates
          </h1>
        </div>
        <div>
          <span className="absolute ml-7 mt-2 top-1/3">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="font-bold text-xl text-[#e9d8a6]"
            />
          </span>
          <h1 className="bg-[#441a7e] text-center text-[#e9d8a6] font-bold w-[250px] h-20 py-6 rounded-md">
            Transparency
          </h1>
        </div>{" "}
        <div>
          <span className="absolute ml-5 mt-2 top-1/3">
            <FontAwesomeIcon
              icon={faBookOpenReader}
              className="font-bold text-xl text-[#e9d8a6]"
            />
          </span>
          <h1 className="bg-[#441a7e] text-center text-[#e9d8a6] font-bold w-[250px] h-20 py-6 rounded-md">
            1000+ programs
          </h1>
        </div>
        <div>
          <span className="absolute ml-5 mt-2 top-1/3">
            <FontAwesomeIcon
              icon={faHandshake}
              className="font-bold text-xl text-[#e9d8a6]"
            />
          </span>
          <h1 className="bg-[#441a7e] text-center text-[#e9d8a6] font-bold w-[250px] h-20 py-6 rounded-md">
            Millions Volunteers
          </h1>
        </div>
      </div>
    </>
  );
};

export default AdvertiseSection;
