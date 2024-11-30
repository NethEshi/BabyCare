import React, { useRef } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chart from "chart.js/auto";

function BMI() {
  const [formData, setFormData] = useState({});
  const [babyData, setBabyData] = useState({});
  const [ChartLabels, setChartLabels] = useState([]);
  const [ChartWeights, setChartWeights] = useState([]);
  const [ChartHeights, setChartHeights] = useState([]);
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartRef3 = useRef(null);
  const chartInstanceRef1 = useRef(null);
  const chartInstanceRef2 = useRef(null);
  const chartInstanceRef3 = useRef(null);
  const babyID = useSelector((state) => state.baby.selectedBaby.ID);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/weight_height/getWeightHeight/${babyID}`)
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        setBabyData(data);
        setChartLabels(data.weight_height.Dates);
        setChartWeights(data.weight_height.Weights);
        setChartHeights(data.weight_height.Heights);
      }).catch((error) => {
          console.log(error);
          setBabyData(error.response.data);
        });
  }, []);

  useEffect(() => {
    if (!ChartLabels) {
      setChartData(false);
      return;
    }
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

    if (!ctx1 || !ctx2 || !ctx3) return;
    chartInstanceRef1.current = new Chart(ctx1, {
      type: "line",
      data: {
        labels: ChartLabels,
        datasets: [
          {
            label: "Weight",
            data: ChartWeights,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    });

    chartInstanceRef2.current = new Chart(ctx2, {
      type: "line",
      data: {
        labels: ChartLabels,
        datasets: [
          {
            label: "Height",
            data:  ChartHeights,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    });

    chartInstanceRef3.current = new Chart(ctx3, {
      type: "line",
      data: {
        labels: ChartLabels,
        datasets: [
          {
            label: "BMI",
            data: ChartHeights.map((height, index) => { return ChartWeights[index] / (height * height) }),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    })
    console.log(ChartWeights);
    console.log(ChartLabels);
    console.log(ChartHeights);
    return () => {
      if (chartInstanceRef1.current) {
        chartInstanceRef1.current.destroy();
      }
      if (chartInstanceRef2.current) {
        chartInstanceRef2.current.destroy();
      }
      if (chartInstanceRef3.current) {
        chartInstanceRef3.current.destroy();
    };
  };
  }, [ChartLabels, ChartWeights]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      ID: babyID,
      Dates: getTodayDate(),
    };

    setFormData(updatedFormData);
    console.log();

    if (babyData.newBaby === true) {
      axios
        .post(
          `http://localhost:5000/weight_height/addWeightHeight`,
          updatedFormData
        )
        .then((response) => {
          console.log(response.data);
          setBabyData(response.data);
          setChartLabels(response.data.weight_height.Dates);
          setChartWeights(response.data.weight_height.Weights);
          setChartHeights(response.data.weight_height.Heights);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .put(
          `http://localhost:5000/weight_height/updateWeightHeight`,
          updatedFormData
        )
        .then((response) => {
          console.log(response.data);
          setBabyData(response.data);
          setChartLabels(response.data.weight_height.Dates);
          setChartWeights(response.data.weight_height.Weights);
          setChartHeights(response.data.weight_height.Heights);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleAddWeight_Height = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const getTodayDate = () => {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    return date;
  };
  const formReset = () => {
    setFormData({
      ID: "",
      Weights: [],
      Heights: [],
      Date: [],
    });
  };
  return (
    <>
      <div className="px-[2%] w-[100%] text-Ash">
        <form>
          <div className="flex space-x-5 w-[100%]">
            <div className="bg-light-pink p-5 border-2 rounded-xl w-full">
              <div className="bg-white border-2 rounded-xl p-2">
                <label htmlFor="Weights">Weight (g)</label>
                <br />
                <input
                  type="number"
                  name="Weights"
                  id="Weights"
                  onChange={handleAddWeight_Height}
                  className="w-full"
                />
              </div>
            </div>
            <div className="bg-light-pink p-5 border-2 rounded-xl w-full">
              <div className="bg-white border-2 rounded-xl p-2">
                <label htmlFor="Heights">Height (cm)</label>
                <br />
                <input
                  type="number"
                  name="Heights"
                  id="Heights"
                  onChange={handleAddWeight_Height}
                  className="w-full"
                />
              </div>
            </div>
            <div className="space-y-5">
              <button
                className=" bg-NavyBlue px-20 w-full py-2 text-white border-2 rounded-xl hover:scale-110"
                onClick={handleOnSubmit}
              >
                Add
              </button>
              <button
                className=" bg-white px-20 py-2 border-2 rounded-xl hover:scale-110"
                onClick={formReset}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
        {ChartHeights.length != 0 && <div className="">
        <div className="w-[50%] flex">
          <canvas ref={chartRef1} />
          <canvas ref={chartRef2} />
        </div>
        <div className="w-full flex justify-center items-center ">
        <canvas ref={chartRef3} />
        </div>
        </div>}
        {ChartHeights.length === 0 && <div className="flex justify-center items-center h-[50vh]">
          <h1 className="text-3xl font-semibold text-Ash">No Data Available</h1>
          </div>}
      </div>
    </>
  );
}

export default BMI;
