import bannerImg from "../assets/banner.avif";
import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-left">
      <div className="relative">
        <img
          className="h-48 opacity-80 md:opacity-100  md:h-auto"
          src={bannerImg}
          alt=""
        />

        <div className="absolute bottom-16 md:bottom-40 md:space-y-4 left-7 md:left-8 ">
          <h2 className="font-dancing text-5xl font-medium text-[#AE4A4A] md:text-[#000000]">
            To Making Your
          </h2>
          <h2 className="font-poppins text-xl mt-3 md:mt-0 md:text-4xl font-medium text-[#000000]">
            Special Day Memorable
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
