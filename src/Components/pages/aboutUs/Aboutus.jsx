import React from "react";

const Aboutus = () => {
  return (
    <>
      <div>
        <div className="w-full m-8">
          <img
            src="https://t4.ftcdn.net/jpg/03/80/58/17/360_F_380581723_Dcf4rseeXVRboNX5QrsdlMLs9bzi66PA.jpg"
            alt=""
            className="w-[50%] h-2/3 relative left-1/4 ml-18"
          />
        </div>
        <div className="w-[50%] absolute left-48 top-1/4 font-extrabold text-9xl font-sans text-[#2e3549]">
          About US
        </div>
      </div>
      <div>
        <p className="text-center max-w-xl mx-auto m-10 text-[#2e3549] font-semibold">
          We are GiveHub, a dedicated non-profit organization committed to make
          this world a better place to live for all. Our mission is to create
          welfare for every living being . We strive to make a positive impact
          on land and sea through our commitment to make this world a better
          place to live. Your generous donation will directly contribute to our
          communities globally. Join us in our mission to donate as well help
          raise funds and create a brighter future for all.
        </p>
      </div>
    </>
  );
};

export default Aboutus;
