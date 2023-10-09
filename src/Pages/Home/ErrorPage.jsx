import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center py-36 text-3xl space-y-3">
      <h1>Oops!</h1>
      <div>
        <p className="mb-2">Sorry, Page Not Found.</p>
        <Link to="/">
          <button className="bg-red-400 rounded-md mt-2 px-2 pb-1 hover:bg-red-900 hover:text-white duration-1000 font-serif">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
