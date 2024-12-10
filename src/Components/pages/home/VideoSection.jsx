import React from "react";

const VideoSection = () => {
  return (
    <>
      <div className="m-10">
        <h1 className="text-center text-3xl font-extrabold ">Why Choose US?</h1>
        <p className="text-center font-semibold gap-6 max-w-7xl mx-auto ">
          Consider supporting our donation program and make a tangible
          difference in the lives of those in need. Your generous contribution
          will directly fund vital initiatives such as providing clean water to
          impoverished communities, supporting education for underprivileged
          children, and aiding disaster relief efforts. By choosing our program,
          you're not just giving; you're empowering individuals and fostering
          hope for a brighter future. Join us in creating a positive impact on
          the world, one donation at a time.
        </p>
        <div className="flex items-center justify-center m-10">
          <iframe
            width="900"
            height="450"
            src="https://www.youtube.com/embed/TqhNILVX8IE?si=F0s0nK4WdoBI2z-j"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
