import InputField from "../components/InputField";
import RegisterImg from "../assets/register.svg";
import Bluebutton from "../components/Bluebutton";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useOverlay } from "../components/context/OverlayContext";
import { ToastContainer, toast } from "react-toastify";
function SignUp() {

  const [UserInputs, setUserInputs] = useState({
    MOH_Name: "",
    Type: "",
    District: "",
    Email: "",
    password: "",
    cfpassword: ""
  });
  const {showSpinner, hideSpinner} = useOverlay();
  const Navigate = useNavigate();
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  const handleChange = (e) => {
    setUserInputs({ ...UserInputs, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    showSpinner();
    axios.post("http://localhost:5000/auth/register", UserInputs)
    .then((response) => {
      toast.success(response.data.message, {
        position: "top-center",
      });
      console.log(response.data);
      Navigate("/login")
    })
    .catch((error) => {
      toast.error(error.response.data.message, {
        position: "bottom-right",
      });
      console.log(error);
    })
    .finally(() => {
      hideSpinner();
    });
  };

  const formData2 = [
    { heading: "Email Address", placeholder: "Enter Your email Address", id: "Email", name: "Email", type: "email"},
    { heading: "Password", placeholder: "Your Password", id: "password", name: "password", type: "password"},
    { heading: "Confirm Password", placeholder: "Confirm Your Password", id: "cfpassword", name: "cfpassword", type: "password"}
  ];

  return (
    <>
    <ToastContainer />
      <div className="lg:flex flex-row">
        <div className=" bg-NavyBlue lg:basis-1/2 lg:h-screen flex items-center justify-center">
          <img className=" w-[50%] lg:w-[492px] py-10 " src={RegisterImg} alt="login" />
        </div>
        <div className=" bg-white lg:basis-1/2 h-screen px-20 py-20">
          <p className="text-4xl text-center pb-10">Sign Up for Account</p>
          <form className="pb-10 flex-row w-full " onSubmit={handlesubmit}>
            <div className="flex space-x-10 items-center justify-center">
            <div className="">
            <div className="py-3 space-y-3">
            <label className="text-neutral-700 text-lg font-medium font-poppins" htmlFor="MOH_Name">MOH Name</label><br/>
            <input type="text" name="MOH_Name" id="MOH_Name" placeholder="MOH Name" className="w-[275px] h-[50px] px-3 bg-neutral-100 border border-zinc-300" onChange={handleChange}/>
            </div>
            <div className="py-3 space-y-3">
            <label className="text-neutral-700 text-lg font-medium font-poppins" htmlFor="Type">Type</label><br/>
            <select name="Type" id="Type" className="w-[275px] h-[50px] px-3 bg-neutral-100 border border-zinc-300">
              <option disabled>Select</option>
              <option value="GOV">GOV</option>
              <option value="PVT">PVT</option>
            </select>
            </div>
            <div className="py-3 space-y-3">
            <label className="text-neutral-700 text-lg font-medium font-poppins" htmlFor="password">Password</label><br/>
            <input type="text" name="password" id="password" placeholder="password" className="w-[275px] h-[50px] px-3 bg-neutral-100 border border-zinc-300" onChange={handleChange}/>
            </div>
            
            </div>

            <div className="">
            <div className="py-3 space-y-3">
            <label className="text-neutral-700 text-lg font-medium font-poppins" htmlFor="District">District</label><br/>
            <input type="District" name="District" id="District" placeholder="District" className="w-[275px] h-[50px] px-3 bg-neutral-100 border border-zinc-300" onChange={handleChange}/>
            </div>
            <div className="py-3 space-y-3">
            <label className="text-neutral-700 text-lg font-medium font-poppins" htmlFor="Email">Email</label><br/>
            <input type="text" name="Email" id="Email" placeholder="Email" className="w-[275px] h-[50px] px-3 bg-neutral-100 border border-zinc-300" onChange={handleChange}/>
            </div>
            <div className="py-3 space-y-3">
            <label className="text-neutral-700 text-lg font-medium font-poppins" htmlFor="cfpassword">Confirm Password</label><br/>
            <input type="text" name="cfpassword" id="cfpassword" placeholder="cfpassword" className="w-[275px] h-[50px] px-3 bg-neutral-100 border border-zinc-300" onChange={handleChange}/>
            </div>
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
