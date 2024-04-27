import InputField from "../components/InputField";
import RegisterImg from "../assets/register.svg";
import Bluebutton from "../components/Bluebutton";
import { useState } from "react";

function SignUp() {

  const [UserInputs, setUserInputs] = useState({
    hospitalName: "",
    type: "",
    district: "",
    email: "",
    password: "",
    cfpassword: ""
  });

  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  const handleChange = (e) => {
    setUserInputs({ ...UserInputs, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", UserInputs);
  };

  const formData1 = [
    { heading: "Hospital Name", placeholder: "Hospital Name", id:"hospitalName", name:"hospitalName", type:"text"},
    { heading: "Type", placeholder: "GOV/PVT", id: "type", name: "type", type: "text"},
    { heading: "Password", placeholder: "Your Password", id: "password", name: "password", type: "password"}
  ];
  const formData2 = [
    { heading: "District", placeholder: "District", id:"district", name:"district", type:"text"},
    { heading: "Email Address", placeholder: "Enter Your email Address", id: "email", name: "email", type: "email"},
    { heading: "Confirm Password", placeholder: "Confirm Your Password", id: "cfpassword", name: "cfpassword", type: "password"}
  ];

  return (
    <>
      <div className="flex">
        <div className=" bg-NavyBlue basis-1/2 h-screen flex items-center justify-center">
          <img className=" w-[492px] h-[477px]" src={RegisterImg} alt="login" />
        </div>
        <div className=" bg-white basis-1/2 h-screen px-20 py-20">
          <p className="text-4xl text-center pb-10">Sign Up for Account</p>
          <form className="pb-10" onSubmit={handlesubmit}>
            <div className="flex space-x-20">
            <div className="">
            <InputField dataArr={formData1} inputChange = {handleChange}/>
            </div>
            <div className="">
            <InputField dataArr={formData2} inputChange = {handleChange}/>
            </div>
            </div>
          <div className="flex justify-center space-x-5 pb-5">
            <input className="w-[25px] h-[28.99px] border border-neutral-600" type="checkbox" onClick={handleCheck}/>
            <p className="text-neutral-700 text-lg font-medium font-poppins">
            I accept all <span className=" text-LBlue">terms and condition</span>
              </p>
            </div>
          <div className="flex justify-center">
            <Bluebutton name ="Register" stat = {check}/>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
