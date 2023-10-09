import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../../Shared/NavBar";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Footer from "../Footer/Footer";

const CardDetails = () => {
  const { id } = useParams();
  const allCardData = useLoaderData();
  const singleData = allCardData.find((card) => card._id == id);
  const { title, details, image_url, price } = singleData;

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Card className="w-96 md:w-11/12 mx-auto ">
          <CardHeader
            floated={false}
            className="h-full w-80  md:w-full mx-auto md:h-[90vh]"
          >
            <img
              className="w-96 md:w-full md:h-[100vh]"
              src={image_url}
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center ">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <Typography
              color="blue-gray"
              className="font-poppins font-semibold text-xl mb-3"
            >
              Price: {price}
            </Typography>
            <Typography
              className="font-normal text-justify text-gray-900 font-poppins"
              textGradient
            >
              {details}
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CardDetails;
