import axios from "axios";
import loginImg from "../../assets/loginImg.png";
import Bluebutton from "../../components/Bluebutton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOverlay } from "../../components/context/OverlayContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ParentLogin() {
  const Navigate = useNavigate();
  const [otp, setOtp] = useState({
    OTP: "",
  });
  const [Email, setEmail] = useState({
    Email: "",
  });
  const [passSet, setPassSet] = useState({
    Email: "",
    Password: "",
    cfPassword: "",
  });
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });
  const [visiBility, setVisiBility] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const toggleVisibility = () => {
    setVisiBility(!visiBility);
  };
  const togglePassSetVisibility = () => {
    setPassSetVisible(!passSetVisible);
  }
  const toggleLoginVisible = () => {
    setLoginVisible(!loginVisible);
  }
  const [passSetVisible, setPassSetVisible] = useState(false);
  const handleOtpChnage = (e) => {
    setOtp({ ...otp, [e.target.name]: e.target.value });
  };
  const { showSpinner, hideSpinner } = useOverlay();

  const handlesubmitOTP = (e) => {
    e.preventDefault();
    showSpinner();
    let data = { Email: Email.Email, otp: otp.OTP };
    axios
      .post("http://localhost:5000/otp/parentOTPValidate", data)  
      .then((response) => {
        console.log(response.data);
        toast.success("Success Notification !", {
          position: "top-center",
        });
        togglePassSetVisibility();
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

  const handleEmailChnage = (e) => {
    setEmail({ ...Email, [e.target.name]: e.target.value });
  };

  const handlePassSet = (e) => {
    setPassSet({ ...passSet, [e.target.name]: e.target.value });
    if (passSet.Email === "") {
      setPassSet({ ...passSet, Email: Email.Email });
    }
  }

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    if (loginData.Email === "") {
      setLoginData({ ...loginData, Email: Email.Email });
    }
  };

  const handlesubmitEmail = (e) => {
    e.preventDefault();
    showSpinner();
    axios
      .post("http://localhost:5000/auth/getparentemail", Email)
      .then((response) => {
        if (response.data.parentAcc.Password === "PassNotSet") {
          toggleVisibility();
          console.log(response.data);
          showSpinner();
          axios
            .post("http://localhost:5000/otp/parentOTPsend", Email)
            .then((response) => {
              console.log(response.data);
              toast.success("OTP Sent ! Check your Email", {
                position: "top-center",
              });

            })
            .catch((error) => {
              console.log(error);
              toast.error(error.response.data.message, {
                position: "bottom-right",
              });
            })
            .finally(() => {
              hideSpinner();
            });
        } else {
          toggleLoginVisible();
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message, {
          position: "bottom-right",
        });
      })
      .finally(() => {
        hideSpinner();
      });
  };

  const submitPassword = (e) => {
    e.preventDefault();
    showSpinner();
    axios.post("http://localhost:5000/auth/parentpasswordset", passSet)
    .then((response) => {
      console.log(response.data);
      toast.success(response.data.message, {
        position: "top-center",
      });
      toggleLoginVisible();
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "bottom-right",
      });
    })
    .finally(() => {
      hideSpinner();
    });
  }

  const submitLoginData = (e) => {
    e.preventDefault();
    showSpinner();
    axios.post("http://localhost:5000/auth/parentlogin", loginData)
    .then((response) => {
      console.log(response.data);
      toast.success(response.data.message, {
        position: "top-center",
      });
      const d = new Date();
      d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
      let expires = "expires="+d.toUTCString();
      document.cookie = `token=${response.data.token}; ${expires};`;
      localStorage.setItem("BabyId", JSON.stringify(response.data.BabyId));
      localStorage.setItem("MOHType", JSON.stringify(response.data.MOHType));
      localStorage.setItem("MOHId", JSON.stringify(response.data.MOHId));
      Navigate("/parentDashboard");
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "bottom-right",
      });
    })
    .finally(() => {
      hideSpinner();
    });

  }

  return (
    <>
      <div className="flex">
        <div className=" bg-NavyBlue basis-1/2 h-screen flex items-center justify-center">
          <img
            className=" w-[50%] lg:w-[492px] py-10 "
            src={loginImg}
            alt="login"
          />
        </div>
        <div className=" bg-white basis-1/2 h-screen px-20 pt-40">
          <h1 className="text-4xl text-center pb-10">Login for Account</h1>
          <div className="pb-10 flex-row justify-center">
            {(!visiBility && !loginVisible) && (
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
                      Next
                    </button>
                  </div>
                </form>
              </div>
            )}
            {(visiBility && !passSetVisible && !loginVisible ) && (
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
                    <Bluebutton name="SEND" stat={true} />
                  </div>
                </form>
              </div>
            )}
            {(passSetVisible && !loginVisible ) &&
             ( <form onSubmit={submitPassword} className=" grid grid-rows-4 place-content-center" >
                <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="name"
                >
                  Email
                </label>
                <br />
                <input
                  className="w-[275px] h-[50px] px-3 bg-neutral-100 border border-zinc-300"
                  type="text"
                  name="Email"
                  id="Email"
                  value={Email.Email}
                  disabled
                />
                </div>
                <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="name"
                >
                  Password
                </label>
                <br />
                <input
                  className="w-[275px] h-[50px] px-3 bg-neutral-100 border border-zinc-300"
                  type="password"
                  name="Password"
                  id="Password"
                  placeholder="Enter password"
                  onChange={handlePassSet}
                />
                </div>
                <div>
                                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="name"
                >
                  Password
                </label>
                <br />
                <input
                  className="w-[275px] h-[50px] px-3 bg-neutral-100 border border-zinc-300"
                  type="password"
                  name="cfPassword"
                  id="cfPassword"
                  placeholder="Enter confirm password"
                  onChange={handlePassSet}
                />
                </div>
                <div className="flex justify-center pt-5">
                  <Bluebutton name="submit" stat={true} />
                </div>
              </form>)
            }

            {loginVisible && (
              <form onSubmit={submitLoginData} className=" grid grid-rows-3 place-content-center">
                <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="name"
                >
                  Email
                </label>
                <br />
                <input
                  className="w-[275px] h-[50px] px-3 bg-neutral-100 border border-zinc-300"
                  type="text"
                  name="Email"
                  id="Email"
                  placeholder="Enter Email"
                  value={Email.Email}
                />
                </div>
                <div>
                <label
                  className="text-neutral-700 text-lg font-medium font-poppins"
                  htmlFor="name"
                >
                  Password
                </label>
                <br />
                <input
                  className="w-[275px] h-[50px] px-3 bg-neutral-100 border border-zinc-300"
                  type="password"
                  name="Password"
                  id="Password"
                  placeholder="Enter Password"
                  onChange={handleLoginChange}
                />
                </div>
                <div className="flex justify-center pt-5">
                    <Bluebutton name="submit" stat={true} />
                  </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ParentLogin;
