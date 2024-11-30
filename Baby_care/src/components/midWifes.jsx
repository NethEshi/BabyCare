import React, { useState } from "react";
import AddMidWife from "./overlays/addMidWife";

function MidWifes() {
    const [midWifeList, setMidWifeList] = useState([]);
    const [overlay, setOverlay] = useState(false);

    const handleOverlay = () => {
        setOverlay(!overlay);
    };
  return (
    <>  
        {overlay && <AddMidWife toggleVisibility={handleOverlay} />}
        <div className="pt-16 px-20">
            <div className="flex justify-end font-semibold pb-5">
            <button
              className=" rounded-full bg-NavyBlue text-white font-bold font-poppins p-3 hover:scale-105 "
              onClick={handleOverlay}
            >
              Register a New Midwife
            </button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Register ID</th>
                  <th className="border px-4 py-2 text-left">License No</th>
                  <th className="border px-4 py-2 text-left">
                    Name
                  </th>
                  <th className="border px-4 py-2 text-left">Designation</th>
                  <th className="border px-4 py-2 text-left">Area</th>
                  <th className="border px-4 py-2 text-left">Email</th>
                  <th className="border px-4 py-2 text-left">Phone</th>
                </tr>
              </thead>
              <tbody>
                {midWifeList.map((item, index) => {
                  return (
                    <tr
                      className="hover:bg-gray-200"
                      onClick={""}
                      key={index}
                    >
                      <td className="border px-4 py-2">{item.ID}</td>
                      <td className="border px-4 py-2">{item.Name}</td>
                      <td className="border px-4 py-2">
                        {item.Gender}
                      </td>
                      <td className="border px-4 py-2">{item.Gender}</td>
                      <td className="border px-4 py-2">{item.ParentName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
    </>
  );
}

export default MidWifes;