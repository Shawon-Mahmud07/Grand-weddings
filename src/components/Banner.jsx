import bannerImg from "../assets/banner.avif";
const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img className="h-48  md:h-auto" src={bannerImg} alt="" />

        <div className="absolute bottom-10 md:bottom-40 md:space-y-4 left-16 md:left-8 ">
          <h2 className="font-dancing text-3xl md:text-5xl font-medium text-[#000000]">
            To Making Your
          </h2>
          <h2 className="font-poppins md:text-4xl font-medium text-[#AE4A4A] md:text-[#000000]">
            Special Day Memorable{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
