import Baby from "../assets/baby.png";
import Midwife from "../assets/Midwife.png";
import Location from "../assets/Location.png";
import HosDashImg from "../assets/HosDashImg.png";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useOverlay } from "./context/OverlayContext";
import { useSelector } from "react-redux";
import Chart from "chart.js/auto";

function DashboardHome() {
  const MOHId = JSON.parse(localStorage.getItem("MOHId"));
  const { showSpinner, hideSpinner } = useOverlay();
  const [chartLabels, setChartLabels] = useState([
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ]);
  const [chartData1, setChartData1] = useState([]);
  const [chartData2, setChartData2] = useState([]);
  const [birthHeadCircumferenceData, setBirthHeadCircumferenceData] = useState([]);
  const [birthWeightData, setBirthWeightData] = useState([]);
  const [birthHeightData, setBirthHeightData] = useState([]);
  const [maleBirthData, setMaleBirthData] = useState([]);
  const [femaleBirthData, setFemaleBirthData] = useState([]);
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartRef3 = useRef(null);
  const chartInstanceRef1 = useRef(null);
  const chartInstanceRef2 = useRef(null);
  const chartInstanceRef3 = useRef(null);
  const [DashHeadData, setDashHeadData] = useState({
    babyCount: "",
    locationCount: "",
    midwifeCount: "",
  });



  useEffect(() => {
    if (chartInstanceRef1.current) {
      chartInstanceRef1.current.destroy();
    }
    if (chartInstanceRef2.current) {
      chartInstanceRef2.current.destroy();
    }
    if (chartInstanceRef3.current) {
      chartInstanceRef3.current.destroy();
    }

    const ctx1 = chartRef1.current ? chartRef1.current.getContext("2d") : null;
    const ctx2 = chartRef2.current ? chartRef2.current.getContext("2d") : null;
    const ctx3 = chartRef3.current ? chartRef3.current.getContext("2d") : null;

    if (ctx1) {
      chartInstanceRef1.current = new Chart(ctx1, {
        type: "bar",
        data: {
          labels: chartLabels,
          datasets: [
            {
              label: "count",
              data: chartData1,
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
              data: maleBirthData,
              backgroundColor: "rgb(75, 192, 192)",
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
            {
              label: "Female",
              data: femaleBirthData,
              backgroundColor: "rgb(255, 159, 64)",
              fill: false,
              borderColor: "rgb(255, 159, 64)",
              tension: 0.1,
            },
          ],
        },
      });
    }

    if (ctx3) {
      chartInstanceRef3.current = new Chart(ctx3, {
        type: "line",
        data: {
          labels: chartLabels,
          datasets: [
            {
              label: "Weight (g)",
              data: birthWeightData,
              backgroundColor: "rgb(153, 102, 255)",
              fill: false,
              borderColor: "rgb(153, 102, 255)",
              tension: 0.1,
            },
            {
              label: "Height (cm)",
              data: birthHeightData,
              backgroundColor: "rgb(255, 159, 64)",
              fill: false,
              borderColor: "rgb(255, 159, 64)",
              tension: 0.1,
            },
            {
              label: "Head Circumference (cm)",
              data: birthHeadCircumferenceData,
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
      if (chartInstanceRef3.current) {
        chartInstanceRef3.current.destroy();
      }
    };
  }, [chartLabels, chartData1]);

  useEffect(() => {
    showSpinner();
    axios
      .get(`http://localhost:5000/moh/getDashboardData/${MOHId}`)
      .then((response) => {
        console.log(response);
        setDashHeadData(response.data);
        setChartData1(response.data.birthMonthData);
        setBirthHeadCircumferenceData(response.data.birthHeadCircumferenceData);
        setBirthWeightData(response.data.birthWeightData);
        setBirthHeightData(response.data.birthHeightData);
        setMaleBirthData(response.data.maleBirthData);
        setFemaleBirthData(response.data.femaleBirthData);

      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hideSpinner();
      });
  }, []);

  return (
    <div className="bg-white p-8">
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="flex items-center bg-light-pink border border-margin-blue rounded-lg p-4 w-full shadow-md">
          <img src={Midwife} alt="Midwife" className="w-[50px] h-[50px]" />
          <div className="ml-4 text-base font-semibold text-blueF">
            Total Midwives
          </div>
          <div className="ml-12 text-5xl font-bold text-blue-900">{DashHeadData.midwifeCount}</div>
        </div>

        <div className="flex items-center bg-light-pink border border-margin-blue rounded-lg p-4 w-full shadow-md">
          <img src={Baby} alt="Baby" className="w-[50px] h-[50px]" />
          <div className="ml-4 text-base font-semibold text-blueF">
            Total Babies
          </div>
          <div className="ml-12 text-5xl font-bold text-blue-900">{DashHeadData.babyCount}</div>
        </div>

        <div className="flex items-center bg-light-pink border border-margin-blue rounded-lg p-4 w-full shadow-md">
          <img src={Location} alt="Location" className="w-[50px] h-[50px]" />
          <div className="ml-4 text-base font-semibold text-blueF">
            Total Locations
          </div>
          <div className="ml-12 text-5xl font-bold text-blue-900">{DashHeadData.locationCount}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-light-pink border border-margin-blue rounded-lg w-[100%] h-[300px] p-2 shadow-md col-span-1">
          <p className="text-blue-900 font-bold">Birth overview</p>
          <canvas ref={chartRef1}  className="p-5"/>
        </div>

        <div className="bg-light-pink border border-margin-blue rounded-lg w-[100%] h-[300px] p-2 shadow-md col-span-1">
          <p className="text-blue-900 font-bold">Gender Overview</p>
          <canvas ref={chartRef2} className="p-5"/>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-light-pink border border-margin-blue rounded-lg w-[100%] h-[300px] p-2 shadow-md col-span-1">
          <p className="text-blue-900 font-bold">Weight overview</p>
          <canvas ref={chartRef3} className="p-5"/>
        </div>

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

export default DashboardHome;