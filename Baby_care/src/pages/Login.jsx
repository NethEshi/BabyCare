import InputField from "../components/InputField";
import loginImg from "../assets/login.svg";
import Bluebutton from "../components/Bluebutton";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useOverlay } from "../components/context/OverlayContext";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {

  const [UserInputs, setUserInputs] = useState({
    Email: "",
    password: "",
  });
  const {showSpinner, hideSpinner} = useOverlay();

  const Navigate = useNavigate();
  const handleChange = (e) => {
    setUserInputs({ ...UserInputs, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    showSpinner();
    axios.post("http://localhost:5000/auth/login", UserInputs)
    .then((response) => {
      toast.success(response.data.message, {
        position: "top-center",
      });
      console.log(response.data);
      const d = new Date();
      d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
      let expires = "expires="+d.toUTCString();
      document.cookie = `token=${response.data.token}; ${expires};`;
      Navigate("/MOHdashboard")
    })
    .catch((error) => {
      toast.error(error.response.data.message, {
        position: "bottom-right",
      })
      console.log(error);
    })
    .finally(() => {
      hideSpinner();
    })
  };

  const formData1 = [
    { heading: "Email Address", placeholder: "Enter Your email Address", name: "Email", type: "email", id: "Email"},
    { heading: "Password", placeholder: "Your Password", name: "password", type: "password", id: "password"},
  ];

  return (
    <>
    <ToastContainer />
      <div className="flex">
        <div className=" bg-NavyBlue basis-1/2 h-screen flex items-center justify-center">
          <img className=" w-[492px] h-[477px]" src={loginImg} alt="login" />
        </div>
        <div className=" bg-white basis-1/2 h-screen px-20 pt-40">
          <h1 className="text-4xl text-center pb-10">Login for Account</h1>
          <div className="pb-10 flex justify-center">
            <form onSubmit={handlesubmit}>
              <InputField dataArr={formData1} inputChange = {handleChange} />
              <div className="flex justify-center pt-5">
                <Bluebutton name="Log In" stat = {true} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
