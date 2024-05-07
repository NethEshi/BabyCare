import DashNav from "../components/DashNav";
import DashboardSideBar from "../components/DashboardSideBar";
import { useState, useEffect } from "react";
import AddBaby from "./AddBaby";
import axios from "axios";

function MidwifeDashboard() {
  const [babyList, setBabyList] = useState([]);
  const [overlay, setOverlay] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/baby/getBaby")
      .then((response) => {
        console.log(response.data);
        setBabyList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [overlay]);
  const handleOverlay = () => {
    setOverlay(!overlay);
  };

  const calculateAge = (DOB) => {
    const dob = new Date(DOB);
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);
    const months = age_dt.getUTCMonth() + 1;
    return months;
  }

  return (
    <>
      <div className="flex relative">
        <div className="w-1/6">
          <DashboardSideBar />
        </div>
        <div className=" w-5/6">
          {!overlay && (
            <>
              <div className="px-5 py-3">
                <DashNav />
              </div>
              <hr />
              <div className=" flex justify-center pt-20">
                <table className="">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2">Index</th>
                      <th className="border px-4 py-2">Name</th>
                      <th className="border px-4 py-2">Age</th>
                      <th className="border px-4 py-2 ">Gender</th>
                      <th className="border px-4 py-2">Mother Name</th>
                    </tr>
                  </thead>
                  <tbody>
                {babyList.map((baby, index) => {
                    return (
                        <tr key={index}>
                            <td className="border px-4 py-2">{baby.ID}</td>
                            <td className="border px-4 py-2">{baby.Name}</td>
                            <td className="border px-4 py-2">{calculateAge(baby.DOB)}</td>
                            <td className="border px-4 py-2">{baby.Gender}</td>
                            <td className="border px-4 py-2">{baby.ParentName}</td>
                        </tr>
                    )
                })
            }
                  </tbody>
                </table>
              </div>
              <div className=" absolute bottom-[10%] right-[5%]">
                <button
                  className="border border-zinc-300 text-black font-bold font-poppins p-1 hover:scale-105 "
                  onClick={handleOverlay}
                >
                  + Add Baby
                </button>
              </div>
            </>
          )}
          {overlay && <AddBaby toggleVisibility={handleOverlay} />}
        </div>
      </div>
    </>
  );
}

export default MidwifeDashboard;
