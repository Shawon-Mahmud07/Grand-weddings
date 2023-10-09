import React, { useContext } from "react";
import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import userDefaultPicture from "../assets/user.png";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const NavBar = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const { user, logOut } = useContext(AuthContext);
  const [openNav, setOpenNav] = React.useState(false);
  console.log(user);

  const handleLogOut = () => {
    logOut();
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:justify-center">
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-[#AE4A4A] font-bold underline text-lg"
              : "flex items-center text-[#706F6F] text-lg"
          }
        >
          Home
        </NavLink>
      </Typography>

      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive
            ? "flex items-center text-[#AE4A4A] font-bold underline text-lg"
            : "flex items-center text-[#706F6F] text-lg"
        }
      >
        Gallery
      </NavLink>
      <NavLink
        to="/Contact"
        className={({ isActive }) =>
          isActive
            ? "flex items-center text-[#AE4A4A] font-bold underline text-lg"
            : "flex items-center text-[#706F6F] text-lg"
        }
      >
        Contact Us
      </NavLink>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-[#AE4A4A] font-bold underline text-lg"
              : "flex items-center text-[#706F6F] text-lg"
          }
        >
          Register
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar data-aos="fade-right" className=" py-2  shadow-sm">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="lg:flex items-center">
          <img className="w-32 h-14 md:w-36 md:h-16" src={logo} alt="" />
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex  items-center">
          {" "}
          {user ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="h-7 md:h-10 w-7 md:w-10 rounded-full mr-2"
            />
          ) : (
            <img
              src={userDefaultPicture}
              alt="Profile"
              className="h-7 md:h-10 w-7 md:w-10 rounded-full mr-2"
            />
          )}
          {user ? (
            <Button
              onClick={handleLogOut}
              className="hidden md:block bg-[#403F3F] rounded-md  font-semibold text-base text-[#fff]"
              variant="gradient"
              size="sm"
            >
              <span>Log Out</span>
            </Button>
          ) : (
            <Link to="/login">
              <Button
                className="hidden md:block bg-[#403F3F] rounded-md  font-semibold text-base text-[#fff]"
                variant="gradient"
                size="sm"
              >
                <span>Login</span>
              </Button>
            </Link>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-2 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          {user ? (
            <Button
              onClick={handleLogOut}
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2"
            >
              <span>Log out</span>
            </Button>
          ) : (
            <Link to="/login">
              <Button variant="gradient" size="sm" fullWidth className="mb-2">
                <span>Login</span>
              </Button>
            </Link>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
