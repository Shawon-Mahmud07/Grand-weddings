import { useLoaderData } from "react-router-dom";
import NavBar from "../../Shared/NavBar";
import Banner from "../../components/Banner";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";

const Home = () => {
  const eventData = useLoaderData();
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Services eventData={eventData}></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
