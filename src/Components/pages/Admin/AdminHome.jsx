import Lottie from "lottie-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import welcomeAdmin from "../../../../public/welcomeAdmin.json";

const AdminHome = () => {
  return (
    <div className="bg-gradient-to-r from-[#fefae0] via-[#7ebff7] to-[#8338ec] ... w-full h-full">
      <div className="mb-10 flex justify-center items-center  ">
        <TypeAnimation
          sequence={[
            "Welcome to Admin DashBoard",
            1500,
            "Here you can add donation",
            1000,
            "Here you can update and delete Donation",
            1000,
            "Here you can toggle the user Role",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "3rem",
            textAlign: "center",
            display: "inline-block",
            fontWeight: "bold",
          }}
          repeat={Infinity}
        />
      </div>
      <Lottie
        animationData={welcomeAdmin}
        autoPlay={true}
        width={500}
        height={250}
      ></Lottie>
    </div>
  );
};

export default AdminHome;
