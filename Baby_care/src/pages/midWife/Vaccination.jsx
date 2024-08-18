import FeatherIcon from "feather-icons-react";
import React, { useState } from "react";
function Vaccination() {
    const [isEdit, setIsEdit] = useState(false);
    const [isSave, setIsSave] = useState(false);
    const [vaccinationData, setVaccinationData] = useState({
        
    });

  return (
    <>
      <div className="w-full  text-Ash font-poppins relative">
        <div className="bg-light-pink p-4 border-2 rounded-xl">
          <div className="bg-white border-2 rounded-xl">
            <div className="flex justify-between py-2 px-5">
            <div>
              <h1 className="text-left text-2xl ">At Birth</h1>
              <div className=" flex space-x-5">
              <p className="text-xs">{"10 Oct, 2000  |   04:08 AM"}</p>
              <button><FeatherIcon icon="edit" color="blue"/></button>
              {<button><FeatherIcon icon="save" color="blue"/></button>}
              </div>
              </div>
              <button>
                <FeatherIcon icon="chevron-down" className="" />
              </button>
            </div>
            {<div className="">
                <div className="grid grid-cols-2 gap-5 p-5">
                    <div className="space-y-5">
                        <div className="border-2 p-2 rounded-lg">
                            <p>Date</p>
                            <p className="text-xs">{"16th Oct 2000"}</p>
                        </div>
                        <div className="border-2 p-2 rounded-lg">
                            <p>Batch No</p>
                            <p className="text-xs">{"E4 20664"}</p>
                        </div>
                        <div className="border-2 p-2 rounded-lg">
                            <p>B. C.G. Scar</p>
                            <p className="text-xs">{"Yes"}</p>
                        </div>
                    </div>
                    <div className=" border-2 relative">
                        <textarea type="text" name="AtBirthComment" id="AtBirthComment" placeholder={"text"} className="w-full h-full text-left align-text-top"/>
                    </div>
                </div>
            </div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Vaccination;
