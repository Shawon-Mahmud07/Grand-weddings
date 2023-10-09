import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import CardDetails from "../Pages/Services/CardDetails";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../Pages/Home/ErrorPage";
import ContactUs from "../components/ContactUs";
import Gallery from "../components/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/event.json"),
      },
      {
        path: "/card/:id",
        element: (
          <PrivetRoute>
            <CardDetails></CardDetails>
          </PrivetRoute>
        ),
        loader: () => fetch("/event.json"),
      },
      {
        path: "/contact",
        element: (
          <PrivetRoute>
            <ContactUs></ContactUs>
          </PrivetRoute>
        ),
      },
      {
        path: "/gallery",
        element: (
          <PrivetRoute>
            <Gallery></Gallery>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
