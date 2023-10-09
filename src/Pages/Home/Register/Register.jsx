import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import NavBar from "../../../Shared/NavBar";
import Footer from "../../Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { HiEyeOff, HiEye } from "react-icons/hi";

const Register = () => {
  const { userCreate } = useContext(AuthContext);
  const [passwordIcon, setShowPassword] = useState(false);
  // make password input visible
  const showPassword = () => {
    setShowPassword(!passwordIcon);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");

    const email = form.get("email");
    const password = form.get("password");

    userCreate(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="mt-10 mb-5 md:mb-20 flex justify-center ">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Register your account
          </Typography>

          <form
            onSubmit={handleSubmit}
            className="mt-8 mb-2 w-72 md:w-80 max-w-screen-lg sm:w-96"
          >
            <div className=" relative mb-4 flex flex-col gap-6">
              <Input name="name" size="lg" label="Name" required />

              <Input name="email" size="lg" label="Email" required />
              <Input
                name="password"
                type={passwordIcon ? "text" : "password"}
                size="lg"
                label="Password"
                required
              />
              <div onClick={showPassword} className="absolute bottom-4 right-2">
                {passwordIcon ? <HiEye></HiEye> : <HiEyeOff></HiEyeOff>}
              </div>
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <Link className="font-medium transition-colors hover:text-gray-900">
                    &nbsp;Terms and Conditions
                  </Link>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button type="submit" className="mt-6" fullWidth>
              Register
            </Button>
            <Link to="/login">
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <span className="font-bold text-[#F8625C]">Login</span>
              </Typography>
            </Link>
          </form>
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
