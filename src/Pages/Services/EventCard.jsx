import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const EventCard = ({ data }) => {
  const { title, thumbnail_url, details, _id } = data;

  useEffect(() => {
    AOS.init({ duration: 5000, delay: 5000 });
  }, []);

  return (
    <div>
      <Card className="mt-6  max-w-96 md:w-96">
        <CardHeader
          data-aos="zoom-out-down"
          color="blue-gray"
          className="relative h-62"
        >
          <img src={thumbnail_url} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-lg md:text-2xl "
          >
            {title}
          </Typography>
          <Typography className="">{details.slice(0, 170)}</Typography>
        </CardBody>
        <CardFooter className="pt-0 ">
          <Link to={`/card/${_id}`}>
            <Button>Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
EventCard.propTypes = {
  data: PropTypes.object,
};
export default EventCard;
