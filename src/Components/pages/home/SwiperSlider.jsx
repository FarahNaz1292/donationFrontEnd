// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";
const SwiperSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper items-center lg:h-[80vh]"
      >
        <SwiperSlide>
          <div className="relative">
            {" "}
            <img
              src="https://eng.ruralvoice.in/uploads/images/2023/05/image_750x_645247ce6eac1.jpg"
              alt=""
              className="w-full object-cover "
            />
          </div>
          <div className="lg:w-full lg:h-full absolute lg:left-0 lg:top-0 bg-[#023e8a] opacity-35"></div>
          <div className="absolute lg:top-1/2 lg:left-1/3 top-12 left-8 text-[#e9d8a6]">
            <p className="lg:text-3xl font-bold text-center text-[#e9d8a6]">
              "Your Generosity Can Change Lives"
            </p>
            <p className="font-bold text-center lg:text-2xl ">
              Feed the hungry
            </p>
            <div className="flex items-center justify-center">
              <Link to="/signin">
                <button className="btn btn-active btn-ghost">
                  Start Donating
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://cc.gfamedia.org/special-report/child-labor/young-boys-working-construction.jpg"
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div className="lg:w-full lg:h-full absolute lg:left-0 lg:top-0 bg-[#023e8a] opacity-35"></div>
          <div className="absolute lg:top-1/2 lg:left-1/3 top-12 left-8 text-[#e9d8a6]">
            <p className="lg:text-3xl font-bold text-center text-[#e9d8a6]">
              "Your Generosity Can Change Lives"
            </p>
            <p className="font-bold text-center lg:text-2xl ">
              Feed the hungry
            </p>
            <div className="flex items-center justify-center">
              <Link to="/signin">
                <button className="btn btn-active btn-ghost">
                  Start Donating
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://www.infoans.org/media/k2/items/cache/83ae357fec8eba398717da5e96b247b3_XL.jpg"
              alt=""
              className="w-full object-cover"
            />
          </div>

          <div className="lg:w-full lg:h-full absolute lg:left-0 lg:top-0 bg-[#023e8a] opacity-35"></div>
          <div className="absolute lg:top-1/2 lg:left-1/3 top-12 left-8 text-[#e9d8a6]">
            <p className="lg:text-3xl font-bold text-center text-[#e9d8a6]">
              "Your Generosity Can Change Lives"
            </p>
            <p className="font-bold text-center lg:text-2xl ">
              Feed the hungry
            </p>
            <div className="flex items-center justify-center">
              <Link to="/signin">
                <button className="btn btn-active btn-ghost">
                  Start Donating
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://www.naacpldf.org/wp-content/uploads/shutterstock_2026178408.jpg"
              alt="Farmers"
              className="w-full object-cover"
            />
          </div>
          <div className="lg:w-full lg:h-full absolute lg:left-0 lg:top-0 bg-[#023e8a] opacity-35"></div>
          <div className="absolute lg:top-1/2 lg:left-1/3 top-12 left-8 text-[#e9d8a6]">
            <p className="lg:text-3xl font-bold text-center text-[#e9d8a6]">
              "Your Generosity Can Change Lives"
            </p>
            <p className="font-bold text-center lg:text-2xl ">
              Feed the hungry
            </p>
            <div className="flex items-center justify-center">
              <Link to="/signin">
                <button className="btn btn-active btn-ghost">
                  Start Donating
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://ccij.io/wp-content/uploads/2020/08/Women-and-girls-waiting-for-their-turns-to-fetch-water-1024x576.jpg"
              alt="WaterFecthing"
              className="w-full object-cover"
            />
          </div>
          <div className="lg:w-full lg:h-full absolute lg:left-0 lg:top-0 bg-[#023e8a] opacity-35"></div>
          <div className="absolute lg:top-1/2 lg:left-1/3 top-12 left-8 text-[#e9d8a6]">
            <p className="lg:text-3xl font-bold text-center text-[#e9d8a6]">
              "Your Generosity Can Change Lives"
            </p>
            <p className="font-bold text-center lg:text-2xl ">
              Feed the hungry
            </p>
            <div className="flex items-center justify-center">
              <Link to="/signin">
                <button className="btn btn-active btn-ghost">
                  Start Donating
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://www.pakistantoday.com.pk/wp-content/uploads/2022/09/Downloader.la-6320486c56a78.jpg"
              alt="Medical Camps"
              className="w-full object-cover"
            />
          </div>
          <div className="lg:w-full lg:h-full absolute lg:left-0 lg:top-0 bg-[#023e8a] opacity-35"></div>
          <div className="absolute lg:top-1/2 lg:left-1/3 top-12 left-8 text-[#e9d8a6]">
            <p className="lg:text-3xl font-bold text-center text-[#e9d8a6]">
              "Your Generosity Can Change Lives"
            </p>
            <p className="font-bold text-center lg:text-2xl ">
              Feed the hungry
            </p>
            <div className="flex items-center justify-center">
              <Link to="/signin">
                <button className="btn btn-active btn-ghost">
                  Start Donating
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://www.cry.org/wp-content/uploads/child-education-world-ngo-day-1.jpg"
              alt="Children'sSchool"
              className="w-full object-cover"
            />
          </div>
          <div className="lg:w-full lg:h-full absolute lg:left-0 lg:top-0 bg-[#023e8a] opacity-35"></div>
          <div className="absolute lg:top-1/2 lg:left-1/3 top-12 left-8 text-[#e9d8a6]">
            <p className="lg:text-3xl font-bold text-center text-[#e9d8a6]">
              "Your Generosity Can Change Lives"
            </p>
            <p className="font-bold text-center lg:text-2xl ">
              Feed the hungry
            </p>
            <div className="flex items-center justify-center">
              <Link to="/signin">
                <button className="btn btn-active btn-ghost">
                  Start Donating
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://media.npr.org/assets/img/2013/01/08/donkey_ethiopia-bc6299f6ee4bf26684912134f102f5843348c878.jpg?s=1000"
              alt="AnimalAbuse"
              className="  w-full object-cover"
            />
          </div>
          <div className="lg:w-full lg:h-full absolute lg:left-0 lg:top-0 bg-[#023e8a] opacity-35"></div>
          <div className="absolute lg:top-1/2 lg:left-1/3 top-12 left-8 text-[#e9d8a6]">
            <p className="lg:text-3xl font-bold text-center text-[#e9d8a6]">
              "Your Generosity Can Change Lives"
            </p>
            <p className="font-bold text-center lg:text-2xl ">
              Feed the hungry
            </p>
            <div className="flex items-center justify-center">
              <Link to="/signin">
                <button className="btn btn-active btn-ghost">
                  Start Donating
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperSlider;
