import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import CardDetails from "../Pages/Services/CardDetails";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/event.json"),
      },
      {
        path: "/card/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch("/event.json"),
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
