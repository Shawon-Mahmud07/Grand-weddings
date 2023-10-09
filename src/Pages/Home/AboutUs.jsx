import aboutImg from "../../assets/217D9D331423F2F0E016448602_1607426730912.webp";
import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-left" className="mt-10 mx-3 ">
      <h2 className="text-[#AE4A4A] text-center mb-4 md:mb-10  font-dancing font-extrabold  text-3xl md:text-4xl">
        About Us
      </h2>
      <div>
        <img className="h-40 md:h-full" src={aboutImg} alt="" />
        <p className="font-poppins mt-5 text-sm text-justify md:text-base">
          Weddings are a montage of special moments experienced by the couples
          and their families. We, dummy company at area, city, state bring in
          equal style and detail to every wedding story – we help conceptualise,
          design, organise and coordinate the sequence of rituals and ceremonies
          for the subtle and smooth flow of your special day. We take pride in
          our ability to create the perfect ambience, blending traditions with
          current trends and innovations. Whether you wish for a small and
          intimate affair, a royal wedding or an exotic & scintillating
          destination wedding, we will make it a zealous moment to treasure and
          remember!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
