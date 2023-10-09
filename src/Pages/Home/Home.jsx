import { useLoaderData } from "react-router-dom";
import NavBar from "../../Shared/NavBar";
import Banner from "../../components/Banner";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";

const Home = () => {
  const eventData = useLoaderData();
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Services eventData={eventData}></Services>
      <AboutUs></AboutUs>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
