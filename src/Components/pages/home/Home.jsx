import React from "react";
import SwiperSlider from "./SwiperSlider";
import AdvertiseSection from "./AdvertiseSection";
import DonationCardSection from "./DonationCardSection";
import Footer from "../../sharedComponents/Footer";
import VideoSection from "./VideoSection";
import RaiseFundSection from "./RaiseFundSection";
import TestimonialSection from "./TestimonialSection";

const Home = () => {
  return (
    <>
      <SwiperSlider />
      <AdvertiseSection />
      <DonationCardSection />
      <VideoSection />
      <RaiseFundSection />
      <TestimonialSection />
    </>
  );
};

export default Home;
