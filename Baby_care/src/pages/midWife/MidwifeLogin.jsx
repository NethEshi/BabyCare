import axios from "axios";
import loginImg from "../../assets/loginImg.png";
import Bluebutton from "../../components/Bluebutton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOverlay } from "../../components/context/OverlayContext";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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
  const { showSpinner, hideSpinner } = useOverlay();


  const handlesubmitOTP = (e) => {
    e.preventDefault();
    showSpinner();
    axios.post("http://localhost:5000/otp/validateOtp", {Email,otp})
    .then((response) => {
        console.log(response.data);
          toast.success("Success Notification !", {
          position: "top-center"
        });
        const d = new Date();
        d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = `MWtoken=${response.data.token}; ${expires};`;
        Navigate("/MidwifeDashboard");
    })
    .catch((error) => {
      toast.error(error.response.data.message, {
        position: "bottom-right"
      });
        console.log(error);
    })
    .finally(() => {
      hideSpinner();
    })
  };

  const handleEmailChnage = (e) => {
    setEmail({ ...Email, [e.target.name]: e.target.value });
  };

  const handlesubmitEmail = (e) => {
    e.preventDefault();
    showSpinner();
    axios.post("http://localhost:5000/otp/sendOtp", Email)
    .then((response) => {
      toast.success("Success Notification !", {
        position: "top-center"
      });
        console.log(response.data);
        toggleVisibility();
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "bottom-right"
      });
    })
    .finally(() => {
      hideSpinner();
    });
  };

  return (
    <>
      <div className="flex">
        <div className=" bg-NavyBlue basis-1/2 h-screen flex items-center justify-center">
          <img className=" w-[50%] lg:w-[492px] py-10 " src={loginImg} alt="login" />
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
      <ToastContainer />
    </>
  );
}

export default MidwifeLogin;
