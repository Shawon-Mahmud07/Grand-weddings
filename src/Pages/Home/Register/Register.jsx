import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../../Shared/NavBar";
import Footer from "../../Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { userCreate } = useContext(AuthContext);
  const [passwordIcon, setShowPassword] = useState(false);
  // make password input visible
  const showPassword = () => {
    setShowPassword(!passwordIcon);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");

    const email = form.get("email");
    const password = form.get("password");
    const checkBox = form.get("terms");

    const pattern = /[A-Z]/;
    const checked = pattern.test(password);

    const patternSpecial = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;
    const patternChecked = patternSpecial.test(password);

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters or longer");
      return;
    } else if (!checked) {
      toast.error(
        "Your password should have at least one upper case characters."
      );
      return;
    } else if (!checkBox) {
      toast.error("Please accept our terms and conditions!");
      return;
    }
    if (!patternChecked) {
      toast.error("Password must contain at least one special character");
      return;
    }

    userCreate(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        if (user) {
          toast.success("User create successfully!");
        }
        setTimeout(() => {
          navigate("/");
        }, 2000);
        console.log(user);

        // Update a user's profile
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            toast.success("Profile updated!");
          })
          .catch((error) => {
            toast.error(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage) {
          toast.error("Invalid Email & Password! Try again");
        }
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
              name="terms"
              type="checkbox"
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
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
};

export default Register;
