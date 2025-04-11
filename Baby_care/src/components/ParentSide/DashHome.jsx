import Baby from "../../assets/Baby.png";
import Midwife from "../../assets/Midwife.png";
import Location from "../../assets/Location.png";
import HosDashImg from "../../assets/prentDash.svg";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useOverlay } from "../../components/context/OverlayContext";
import { useSelector } from "react-redux";
import Chart from "chart.js/auto";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { getSelectedBaby } from "../../actions/baby";

function DashHome() {
    const MOHType = JSON.parse(localStorage.getItem("MOHType"));
    const BabyId = JSON.parse(localStorage.getItem("BabyId"));
    console.log(BabyId)
    const { showSpinner, hideSpinner } = useOverlay();
    const [DOB, setDOB] = useState("");
    const dispatch = useDispatch();
    const [ID, setID] = useState("");
    const [chartLabels, setChartLabels] = useState([
      "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ]);
    const [birthWeightData, setBirthWeightData] = useState([]);
    const [birthHeightData, setBirthHeightData] = useState([]);
    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);
    const chartInstanceRef1 = useRef(null);
    const chartInstanceRef2 = useRef(null);

    useEffect(() => {
      if (chartInstanceRef1.current) {
        chartInstanceRef1.current.destroy();
      }
      if (chartInstanceRef2.current) {
        chartInstanceRef2.current.destroy();
      }
  
      const ctx1 = chartRef1.current ? chartRef1.current.getContext("2d") : null;
      const ctx2 = chartRef2.current ? chartRef2.current.getContext("2d") : null;
  
      if (ctx1) {
        chartInstanceRef1.current = new Chart(ctx1, {
          type: "bar",
          data: {
            labels: chartLabels,
            datasets: [
              {
                label: "weight (g)",
                data: birthWeightData,
                backgroundColor: "rgb(75, 192, 192)",
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          },
        });
      }
  
      if (ctx2) {
        chartInstanceRef2.current = new Chart(ctx2, {
          type: "line",
          data: {
            labels: chartLabels,
            datasets: [
              {
                label:"height (cm)",
                data: birthHeightData,
                backgroundColor: "rgb(75, 192, 192)",
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          },
        });
      }
  
      return () => {
        if (chartInstanceRef1.current) {
          chartInstanceRef1.current.destroy();
        }
        if (chartInstanceRef2.current) {
          chartInstanceRef2.current.destroy();
        }
      };
    }, [chartLabels, birthHeightData]);
  
    useEffect(() => {
      showSpinner();
      axios
        .get(`http://localhost:5000/baby/getBabyByID/${BabyId}`)
        .then((response) => {
          console.log(response.data);
          dispatch(getSelectedBaby(response.data));
          setID(response.data.ID);
          setDOB(response.data.DOB);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          hideSpinner();
        });
    }, []);

    useEffect(() => {
        if (!ID) {
            return;
        }
        showSpinner();
        console.log(ID)
        axios.get(`http://localhost:5000/baby/getBabyData/${ID}`)
        .then((response) =>{
            console.log(response.data);
            setBirthWeightData(response.data.weightsByMonth);
            setBirthHeightData(response.data.heightsByMonth);

        })
        .catch((error) => {
            console.log(error);
            toast.error(error.response.data.message, {
                position: "bottom-right",
            })
        })
        .finally(() => {
            hideSpinner();
        })
    }, [ID])

    const calculateAgeInMonths = (dob) => {
      const birthDate = new Date(dob);
      const currentDate = new Date();
      const yearsDifference = currentDate.getFullYear() - birthDate.getFullYear();
      const monthsDifference = currentDate.getMonth() - birthDate.getMonth();
      return yearsDifference * 12 + monthsDifference;
    };

    useEffect(() => {
      if (!DOB || !birthWeightData) {
        return;
      }
      showSpinner();
      let data = {
        weights : birthWeightData,
        age : calculateAgeInMonths(DOB)
      }
      axios.post("http://localhost:4600/predict", data)
      .then((response) => {
        console.log(response.data);
        const condition = response.data.condition;
        let toastType = toast.warning;

        if (condition === "Normal Weight") {
          toastType = toast.success;
        } else if (condition === "Underweight" || condition === "Severely Underweight") {
          toastType = toast.error;
        } else if (condition === "Overweight" || condition === "Obese") {
          toastType = toast.info;
        }
        const roundedWeight = response.data.next_month_weight.toFixed(2);
        toastType("Next month predicted Weight: " + roundedWeight + "g/ condition : " + condition, {
          position: "bottom-right",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message, {
          position: "bottom-right",
        })
      })
      .finally(() => {
        hideSpinner();
      })
    }, [birthHeightData]);
  return (
    <div className="bg-white p-8 space-y-20">
      <ToastContainer/>
    <div className="grid grid-cols-2 gap-8 mb-8">
      <div className="bg-light-pink border border-margin-blue rounded-lg w-[100%] h-[300px] p-2 shadow-md col-span-1">
        <p className="text-blue-900 font-bold">Weight  Overview</p>
        <canvas ref={chartRef1}  className="p-5"/>
      </div>

      <div className="bg-light-pink border border-margin-blue rounded-lg w-[100%] h-[300px] p-2 shadow-md col-span-1">
        <p className="text-blue-900 font-bold">Height  Overview</p>
        <canvas ref={chartRef2} className="p-5"/>
      </div>
    </div>

    <div className="">
      <div className="bg-white border border-white rounded-lg w-[100%] h-[300px] flex items-center justify-center col-span-1">
        <img
          src={HosDashImg}
          alt="HosDashImg"
          className="w-[540px] h-[560px] flex justify-center items-center"
        />
      </div>
    </div>
  </div>
  );
}

export default DashHome;