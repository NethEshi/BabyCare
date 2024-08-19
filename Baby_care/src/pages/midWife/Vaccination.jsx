import FeatherIcon from "feather-icons-react";
import React, { useState } from "react";
function Vaccination() {
    const [isEdit, setIsEdit] = useState(false);
    const [isSave, setIsSave] = useState(false);
    const [vaccinationData, setVaccinationData] = useState({
        
    });
    const [toggleVisibility, setToggleVisibility] = useState({
        AtBirth: false,
        TwoMonth: false,
        FourMonth: false,
        SixMonth: false,
        NineMonth: false,
        EighteenMonth: false,
        ThreeYeares: false,
        FiveYeares : false,
        TenYeares: false,
        JapaneseEncephalitis : false,
        Other : false,
    });
    const handleToggleVisibility = (e) => {
        const { name } = e.currentTarget;
        setToggleVisibility((prevState) => ({
          ...prevState,
          [name]: !prevState[name],
        }));
        console.log(name);
      };
  return (
    <>
    <div className="w-full text-Ash font-poppins relative">
      <div className="bg-light-pink p-4 border-2 rounded-xl space-y-3">

        <div className="bg-white border-2 rounded-xl">
          <div className="flex justify-between py-2 px-5">
            <div>
              <h1 className="text-left text-2xl">At Birth</h1>
              {toggleVisibility.AtBirth && (
                <div className="flex space-x-5">
                  <p className="text-xs">{"10 Oct, 2000  |   04:08 AM"}</p>
                  <button><FeatherIcon icon="edit" color="blue" /></button>
                  <button><FeatherIcon icon="save" color="blue" /></button>
                </div>
              )}
            </div>
            <button name="AtBirth" id="AtBirth" onClick={handleToggleVisibility}>
              <FeatherIcon icon="chevron-down" className={`${toggleVisibility.AtBirth? "rotate-up" : "rotate-down"}`} />
            </button>
          </div>
            {toggleVisibility.AtBirth && (<div className="">
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
                    <div className=" border-2 relative rounded-xl flex justify-center">
                        <textarea type="text" name="AtBirthComment" id="AtBirthComment" placeholder={"text"} className="w-[99%] h-[99%] rounded-xl"/>
                    </div>
                </div>
            </div>)}
          </div>

          <div className="bg-white border-2 rounded-xl">
          <div className="flex justify-between py-2 px-5">
            <div>
              <h1 className="text-left text-2xl">2 Months Completed</h1>
              {toggleVisibility.TwoMonth && (
                <div className="flex space-x-5">
                  <p className="text-xs">{"10 Oct, 2000  |   04:08 AM"}</p>
                  <button><FeatherIcon icon="edit" color="blue" /></button>
                  <button><FeatherIcon icon="save" color="blue" /></button>
                </div>
              )}
            </div>
            <button name="TwoMonth" id="TwoMonth" onClick={handleToggleVisibility}>
              <FeatherIcon icon="chevron-down" className={`${toggleVisibility.TwoMonth? "rotate-up" : "rotate-down"}`} />
            </button>
          </div>
            {toggleVisibility.TwoMonth && (<div className="">
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
                    <div className=" border-2 relative rounded-xl flex justify-center">
                        <textarea type="text" name="AtBirthComment" id="AtBirthComment" placeholder={"text"} className="w-[99%] h-[99%] rounded-xl"/>
                    </div>
                </div>
            </div>)}
          </div>

          <div className="bg-white border-2 rounded-xl">
          <div className="flex justify-between py-2 px-5">
            <div>
              <h1 className="text-left text-2xl">4 Months Completed</h1>
              {toggleVisibility.FourMonth && (
                <div className="flex space-x-5">
                  <p className="text-xs">{"10 Oct, 2000  |   04:08 AM"}</p>
                  <button><FeatherIcon icon="edit" color="blue" /></button>
                  <button><FeatherIcon icon="save" color="blue" /></button>
                </div>
              )}
            </div>
            <button name="FourMonth" id="FourMonth" onClick={handleToggleVisibility}>
              <FeatherIcon icon="chevron-down" className={`${toggleVisibility.FourMonth? "rotate-up" : "rotate-down"}`} />
            </button>
          </div>
            {toggleVisibility.FourMonth && (<div className="">
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
                    <div className=" border-2 relative rounded-xl flex justify-center">
                        <textarea type="text" name="AtBirthComment" id="AtBirthComment" placeholder={"text"} className="w-[99%] h-[99%] rounded-xl"/>
                    </div>
                </div>
            </div>)}
          </div>

          <div className="bg-white border-2 rounded-xl">
          <div className="flex justify-between py-2 px-5">
            <div>
              <h1 className="text-left text-2xl">6 Months Completed</h1>
              {toggleVisibility.SixMonth && (
                <div className="flex space-x-5">
                  <p className="text-xs">{"10 Oct, 2000  |   04:08 AM"}</p>
                  <button><FeatherIcon icon="edit" color="blue" /></button>
                  <button><FeatherIcon icon="save" color="blue" /></button>
                </div>
              )}
            </div>
            <button name="SixMonth" id="SixMonth" onClick={handleToggleVisibility}>
              <FeatherIcon icon="chevron-down" className={`${toggleVisibility.SixMonth? "rotate-up" : "rotate-down"}`} />
            </button>
          </div>
            {toggleVisibility.SixMonth && (<div className="">
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
                    <div className=" border-2 relative rounded-xl flex justify-center">
                        <textarea type="text" name="AtBirthComment" id="AtBirthComment" placeholder={"text"} className="w-[99%] h-[99%] rounded-xl"/>
                    </div>
                </div>
            </div>)}
          </div>


        </div>
      </div>
    </>
  );
}

export default Vaccination;
