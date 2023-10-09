import qoute from "../../assets/SSD.png";

import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="zoom-in-down"
      className=" border border-[#AE4A4A] w-11/12  md:w-8/12 mx-auto py-7 my-10 md:my-20 space-y-4"
    >
      <h2 className="text-[#AE4A4A] text-center mb-3  font-dancing font-extrabold  text-3xl md:text-4xl">
        Testimonials
      </h2>
      <div className="flex justify-center">
        <img className="h-5 w-5" src={qoute} alt="" />
      </div>
      <div className="text-center w-8/12 mx-auto">
        <p className="font-poppins">
          Thanks for their involvement in planning my wedding. I could spend
          some extra quality time with my Mom & Dad.
        </p>
        <p className="font-sans mt-2">**Smriti Sinha**</p>
      </div>
    </div>
  );
};

export default Testimonials;
