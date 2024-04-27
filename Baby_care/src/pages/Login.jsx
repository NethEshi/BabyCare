import InputField from "../components/InputField";
import loginImg from "../assets/login.svg";
import Bluebutton from "../components/Bluebutton";
import { useState } from "react";

function SignUp() {

  const [UserInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInputs({ ...UserInputs, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", UserInputs);
  };

  const formData1 = [
    { heading: "Email Address", placeholder: "Enter Your email Address", name: "email", type: "email", id: "email"},
    { heading: "Password", placeholder: "Your Password", name: "password", type: "password", id: "password"},
  ];

  return (
    <>
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
