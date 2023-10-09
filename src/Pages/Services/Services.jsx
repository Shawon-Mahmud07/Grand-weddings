import PropTypes from "prop-types";
import EventCard from "./EventCard";
const Services = ({ eventData }) => {
  return (
    <div className="mt-7 md:mt-14">
      <div className="text-center">
        <h2 className="text-[#AE4A4A] mb-4 md:mb-10  font-dancing font-extrabold  text-2xl md:text-4xl">
          Services We Provide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventData.map((data, index) => (
            <EventCard key={index} data={data}></EventCard>
          ))}
        </div>
      </div>
    </div>
  );
};
Services.propTypes = {
  eventData: PropTypes.array,
};
export default Services;
