import React, { useState } from "react";
import InputField from "../components/InputField";
import Bluebutton from "../components/Bluebutton";
import cross from "../assets/cross.png";
import axios from "axios";

function AddBaby({toggleVisibility}) {

    const formData1 = [
        { heading: "ID", placeholder: "Enter Baby ID", id: "ID", name:"ID", type:"text"},
        { heading: "Gender", placeholder: "Gender", id: "Gender", name: "Gender", type: "text"},
        { heading: "Parent/Guardian Name", placeholder: "Enter Name", id: "ParentName", name: "ParentName", type: "text"}
    ];
    const formData2 = [
        { heading: "Full Name", placeholder: "Enter Full Name", id: "Name", name: "Name", type: "text"},
        { heading: "Date of Birth", placeholder: "Enter DOB", id: "DOB", name: "DOB", type: "Date"},
        { heading: "Parent/Guardian Email", placeholder: "Enter Email", id: "ParentEmail", name: "ParentEmail", type: "email"},
    ];
    const [formData, setFormData] = useState({
        ID : "",
        Name : "",
        Gender : "",
        DOB : "",
        ParentName : "",
        ParentEmail : "",  
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post("http://localhost:5000/baby/addBaby", formData)
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
    <div className=" z-50 pt-10 relative">
        <div className=" absolute right-[5%] top-[10%]">
            <button className="" onClick={toggleVisibility}>
                <div className="w-[40px] hover:scale-110">
                <img src={cross} alt="close" />
                </div>
            </button>
        </div>
        <h1 className=" text-center text-4xl font-semibold">Add Baby</h1>
        <form className="pb-10 flex-row w-full " onSubmit={handlesubmit}>
            <div className="flex space-x-10 items-center justify-center">
            <div className="">
            <InputField dataArr={formData1} inputChange = {handleChange}/>
            </div>
            <div className="">
            <InputField dataArr={formData2} inputChange = {handleChange}/>
            </div>
            </div>
          <div className="flex justify-center pt-5">
            <Bluebutton name ="Register" stat = {true}/>
          </div>
          </form>
    </div>
    </>
  );
}

export default AddBaby;
