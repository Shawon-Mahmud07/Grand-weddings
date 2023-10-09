import Footer from "../Pages/Footer/Footer";
import NavBar from "../Shared/NavBar";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpeg";
import g4 from "../assets/g4.jpeg";
import g5 from "../assets/g5.webp";
import g6 from "../assets/g6.jpg";

const Gallery = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="my-10">
        <h2 className="font-dancing text-3xl my-3 md:text-4xl md:mt-5 md:-mb-10 text-center text-[#AE4A4A]">
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-3 md:mx-0">
          <img className="rounded-md" src={g1} alt="" />
          <img className="rounded-md" src={g2} alt="" />
          <img className="rounded-md" src={g3} alt="" />
          <img className="rounded-md" src={g4} alt="" />
          <img className="rounded-md" src={g5} alt="" />
          <img className="rounded-md" src={g6} alt="" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Gallery;
