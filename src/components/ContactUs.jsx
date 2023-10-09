import Footer from "../Pages/Footer/Footer";
import NavBar from "../Shared/NavBar";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.webp";
const ContactUs = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1 className="font-dancing text-3xl my-3 md:text-4xl md:mt-5 md:-mb-10 text-center text-[#AE4A4A]">
        Contact Us
      </h1>
      <div className="mb-10 md:my-20 border-2 font-poppins rounded-md border-[#3DB4C6] p-5 md:p-10 mx-4 md:w-4/12 md:mx-auto md:space-y-10">
        <div className="flex items-center gap-4 mb-5">
          <img className="h-10 w-10" src={icon1} alt="" />
          <div>
            <h2 className="text-xl">Our Office Address</h2>
            <p>area, city, landmark, pincode</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-5">
          <img className="h-10 w-10" src={icon2} alt="" />
          <div>
            <h2 className="text-xl">General Enquiries</h2>
            <p>sample@example.ecom</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-5">
          <img className="h-10 w-10" src={icon3} alt="" />
          <div>
            <h2 className="text-xl">Call Us</h2>
            <p>+91-1111111111</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-5">
          <img className="h-10 w-10" src={icon4} alt="" />
          <div>
            <h2 className="text-xl">Our Timing</h2>
            <p>Mon - Sun : 10:00 AM - 07:00 PM</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
