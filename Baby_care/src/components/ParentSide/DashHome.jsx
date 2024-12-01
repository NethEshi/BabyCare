import Baby from "../../assets/baby.png";
import Midwife from "../../assets/Midwife.png";
import Location from "../../assets/Location.png";
import HosDashImg from "../../assets/HosDashImg.png";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useOverlay } from "../../components/context/OverlayContext";
import { useSelector } from "react-redux";
import Chart from "chart.js/auto";

function DashHome() {
    const MOHType = JSON.parse(localStorage.getItem("MOHType"));
    const { showSpinner, hideSpinner } = useOverlay();
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
                label: "count",
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
                label:"Male",
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
      //showSpinner();
    //   axios
    //     .get(`http://localhost:5000/moh/getDashboardData/${MOHId}`)
    //     .then((response) => {
    //       console.log(response);
    //       setDashHeadData(response.data);
    //       setChartData1(response.data.birthMonthData);
    //       setBirthHeadCircumferenceData(response.data.birthHeadCircumferenceData);
    //       setBirthWeightData(response.data.birthWeightData);
    //       setBirthHeightData(response.data.birthHeightData);
    //       setMaleBirthData(response.data.maleBirthData);
    //       setFemaleBirthData(response.data.femaleBirthData);
  
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    //     .finally(() => {
    //       hideSpinner();
    //     });
    }, []);
  return (
    <div className="bg-white p-8">

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

    <div className="grid grid-cols-1 gap-6">
      <div className="bg-white border border-white rounded-lg w-[100%] h-[300px] flex items-center justify-center col-span-1">
        <img
          src={HosDashImg}
          alt="HosDashImg"
          className="w-[240px] h-[260px]"
        />
      </div>
    </div>
  </div>
  );
}

export default DashHome;