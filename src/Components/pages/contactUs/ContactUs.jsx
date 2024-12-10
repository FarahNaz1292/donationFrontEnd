import {
  faEnvelopeCircleCheck,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Contact from "../../../../public/contact.json";
import React from "react";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react";

const ContactUs = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[50%">
          <Lottie
            animationData={Contact}
            loop={true}
            width={400}
            height={500}
          />
        </div>
        <div className="text-center flex flex-col items-center justify-center w-[50%]  text-[#2e3549] ">
          <h1 className="font-bold text-2xl">ContactUs</h1>
          <p className="text-xl font-semibold">
            Have a question or want to learn more about our mission? Please feel
            free to contact us
          </p>
          <p className="text-xl">
            <FontAwesomeIcon icon={faEnvelopeCircleCheck} />{" "}
            givehub@donations.org
          </p>
          <p className="text-xl">
            <FontAwesomeIcon icon={faPhone} />
            001-123-2345-56443
          </p>
          <p className="text-xl">
            <FontAwesomeIcon icon={faMailBulk} /> 234 donationhib Ave, NewYork ,
            Newyork 11234
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
