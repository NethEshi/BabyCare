import axios from "axios";
import loginImg from "../assets/login.svg";
import Bluebutton from "../components/Bluebutton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MidwifeLogin() {
  const Navigate = useNavigate();
  const [otp, setOtp] = useState({
    OTP: "",
  });
  const [Email, setEmail] = useState({
    Email: "",
  });
  const [visiBility, setVisiBility] = useState(false);

  const toggleVisibility = () => {
    setVisiBility(!visiBility);
  };

  const handleOtpChnage = (e) => {
    setOtp({ ...otp, [e.target.name]: e.target.value });
  };

  const handlesubmitOTP = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/auth/login", { Email, otp })
    .then((response) => {
        console.log(response.data);
        Navigate("/MOHdashboard");
    })
    .catch((error) => {
        console.log(error);
    });
  };

  const handleEmailChnage = (e) => {
    setEmail({ ...Email, [e.target.name]: e.target.value });
  };

  const handlesubmitEmail = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/auth/login", Email)
    .then((response) => {
        console.log(response.data);
        toggleVisibility();
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <div className="flex">
        <div className=" bg-NavyBlue basis-1/2 h-screen flex items-center justify-center">
          <img className=" w-[492px] h-[477px]" src={loginImg} alt="login" />
        </div>
        <div className=" bg-white basis-1/2 h-screen px-20 pt-40">
          <h1 className="text-4xl text-center pb-10">Login for Account</h1>
          <div className="pb-10 flex-row justify-center">
            {!visiBility && (
            <div className="flex justify-center">
              <form onSubmit={handlesubmitEmail}>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="name"
                >
                  Email
                </label>
                <br />
                <div className="flex">
                  <input
                    className="w-[275px] h-[50px] px-3 bg-neutral-100 border border-zinc-300"
                    type="email"
                    name="Email"
                    id="Email"
                    placeholder="Enter Your email Address"
                    onChange={handleEmailChnage}
                  />
                  <button
                    type="submit"
                    className=" text-NavyBlue font-semibold pl-10"
                  >
                    Request OTP
                  </button>
                </div>
              </form>
            </div>
            )}
            {visiBility && (
              <div className="flex justify-center">
                <form onSubmit={handlesubmitOTP}>
                  <label
                    className="text-neutral-700 text-lg font-medium font-poppins"
                    htmlFor="name"
                  >
                    OTP
                  </label>
                  <br />
                  <input
                    className="w-[275px] h-[50px] px-3 bg-neutral-100 border border-zinc-300"
                    type="text"
                    name="OTP"
                    id="OTP"
                    placeholder="Enter OTP"
                    onChange={handleOtpChnage}
                  />
                  <div className="flex justify-center pt-5">
                    <Bluebutton name="Log In" stat={true} />
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MidwifeLogin;
