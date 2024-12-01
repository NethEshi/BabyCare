import DashNav from "../ParentSide/DashNavParent";
import DashboardSideBar from "../ParentSide/DashboardSideBarParent";
import { useState } from "react";
import * as _ from "underscore";
import { Outlet } from "react-router-dom";

function ParentDashboard() {
  const [searchList, setSearchList] = useState([]);

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
      <div className="flex h-screen">
          <div className="w-1/6">
            <DashboardSideBar />
          </div>
        <div className="w-5/6 flex flex-col">
          <div className="px-5 py-3">
            <DashNav handleSearch={handleSearch} serachEnable={true} />
          </div>
          <hr />
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default ParentDashboard;
