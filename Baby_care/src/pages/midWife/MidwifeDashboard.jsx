import DashNav from "../../components/DashNav";
import DashboardSideBar from "../../components/midWife/DashboardSideBar";
import { useState, useEffect } from "react";
import AddBaby from "../AddBaby";
import axios from "axios";
import PageNumber from "../../components/PageNumber";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedBaby } from "../../actions/baby";
import * as _ from "underscore";
import { useNavigate } from "react-router-dom";


function MidwifeDashboard() {
  const [babyList, setBabyList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:5000/baby/getBaby")
      .then((response) => {
        console.log(response.data);
        setBabyList(response.data);
        setSearchList(response.data);
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
  };

  const viewBaby = (baby) => {
    dispatch(getSelectedBaby(baby));
    navigate("/MidwifeDashboard/BabyProfile");
  };

  const handleSearch = (e) => {
    const search = e.target.value;
    if (search !== "") {
      let res = _.filter(searchList, (baby) => {
        return _.values(_.pick(baby, "ID", "Name", "DOB"))
          .toString()
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });
      setBabyList(res);
    } else {
      setBabyList(searchList);
    }
  };

  return (
    <>
      <div className="flex relative h-screen">
        <div className="w-1/6">
          <DashboardSideBar />
        </div>
        <div className=" w-5/6 ">
          <div className="px-5 py-3">
            <DashNav handleSearch={handleSearch} serachEnable={true} />
          </div>
          <>
            <hr />
            <div className=" flex justify-center pt-20 px-20">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2 text-left">Index</th>
                    <th className="border px-4 py-2 text-left">Full Name</th>
                    <th className="border px-4 py-2 text-left">Age (in months)</th>
                    <th className="border px-4 py-2 text-left">Gender</th>
                    <th className="border px-4 py-2 text-left">Mother Name</th>
                  </tr>
                </thead>
                <tbody>
                  {babyList.map((baby, index) => {
                    return (
                      <tr className="hover:bg-gray-200" onClick={() => viewBaby(baby)} key={index}>
                        <td className="border px-4 py-2">{baby.ID}</td>
                        <td className="border px-4 py-2">{baby.Name}</td>
                        <td className="border px-4 py-2">
                          {calculateAge(baby.DOB)}
                        </td>
                        <td className="border px-4 py-2">{baby.Gender}</td>
                        <td className="border px-4 py-2">{baby.ParentName}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className=" absolute top-[10%] right-[5%]">
              <button
                className=" rounded-full bg-NavyBlue text-white font-bold font-poppins p-3 hover:scale-105 "
                onClick={handleOverlay}
              >
                Register a New Baby
              </button>
            </div>
            <div className=" absolute bottom-[5%] right-[5%]">
              <PageNumber />
            </div>
          </>
        </div>
        <div className="z-50 absolute">
          {overlay && <AddBaby toggleVisibility={handleOverlay} />}
        </div>
      </div>
    </>
  );
}

export default MidwifeDashboard;
