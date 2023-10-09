import NavBar from "../../../Shared/NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { HiEyeOff, HiEye } from "react-icons/hi";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import Footer from "../../Footer/Footer";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
  const { userSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIcon, setShowPassword] = useState(false);

  // make password input visible
  const showPassword = () => {
    setShowPassword(!passwordIcon);
  };
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    userSignIn(trimmedEmail, trimmedPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // Navigate after Login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="mb-5 md:mb-20 ">
        <div className="mt-10 flex justify-center ">
          <Card className="w-96">
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-24 place-items-center"
            >
              <Typography className="text-2xl" variant="h3" color="white">
                Login your account
              </Typography>
            </CardHeader>
            <CardBody className=" relative flex flex-col gap-4">
              <Input
                label="Email"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                label="Password"
                size="lg"
                type={passwordIcon ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div onClick={showPassword} className="absolute top-24 right-8">
                {passwordIcon ? <HiEye></HiEye> : <HiEyeOff></HiEyeOff>}
              </div>
              <small className="-mt-3">Forget Password?</small>

              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" onClick={handleClick} fullWidth>
                Login
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Link className="ml-1 font-bold text-[#F8625C]" to="/register">
                  {" "}
                  Register
                </Link>
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
