import React, { useState } from "react";
function Vision() {

  const[visionData, setVisionData] = useState({
    firstWeekTowardsLight: "",
    firstWeeklookAtFace: "",
    twoMonthsSounds: ""
  });

  return (
    <>
      <div className="w-full font-poppins text-Ash px-5">
        <section className=" space-y-5">
          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">
                First week of birth
              </h1>
            </div>
            <div className="grid grid-cols-2 px-2">
              <div className="space-y-2 pt-3">
                <p>1. Does the baby direct its eyes towards the light ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeekTowardsLight"
                      id="yes"
                      value="yes"
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeekTowardsLight"
                      id="no"
                      value="no"
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <p>2. Does the baby look at your face well ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeeklookAtFace"
                      id="yes"
                      value="yes"
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeeklookAtFace"
                      id="no"
                      value="no"
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">
                By 2 months
              </h1>
            </div>
            <div className="grid grid-cols-2 px-2">
              <div className="space-y-2 pt-3">
                <p>1. Does the child look at you and smile when you turn to face them ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeekTowardsLight"
                      id="yes"
                      value="yes"
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeekTowardsLight"
                      id="no"
                      value="no"
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <p>2. Then both eyes of the child move together ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeeklookAtFace"
                      id="yes"
                      value="yes"
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeeklookAtFace"
                      id="no"
                      value="no"
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">
              By 6 months
              </h1>
            </div>
            <div className="grid grid-cols-2 px-2">
              <div className="space-y-2 pt-3">
                <p>1. Does the child look around curiously ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeekTowardsLight"
                      id="yes"
                      value="yes"
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeekTowardsLight"
                      id="no"
                      value="no"
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <p>2. Does the child reach out and try to grab something ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeeklookAtFace"
                      id="yes"
                      value="yes"
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeeklookAtFace"
                      id="no"
                      value="no"
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <p>3. Do you suspect that the baby has a mole ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeeklookAtFace"
                      id="yes"
                      value="yes"
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeeklookAtFace"
                      id="no"
                      value="no"
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">
              By 10 months
              </h1>
            </div>
            <div className="grid grid-cols-1 px-2">
              <div className="space-y-2 pt-3">
                <p>1. Is the child able to pick up small objects with the help of thumb and forefinger ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="twoMonthsSounds"
                      id="yes"
                      value="yes"
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="twoMonthsSounds"
                      id="no"
                      value="no"
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">
                By 12 months
              </h1>
            </div>
            <div className="grid grid-cols-2 px-2">
              <div className="space-y-2 pt-3">
                <p>1. Does your child reach out and ask for things ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeekTowardsLight"
                      id="yes"
                      value="yes"
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeekTowardsLight"
                      id="no"
                      value="no"
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3">
                <p>2. Does the child recognize familiar people when they see them before they talk to the child ?</p>
                <div className=" flex space-x-10">
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeeklookAtFace"
                      id="yes"
                      value="yes"
                    />
                    <label for="yes">Yes</label>
                  </div>
                  <div className="space-x-5">
                    <input
                      type="radio"
                      name="firstWeeklookAtFace"
                      id="no"
                      value="no"
                    />
                    <label for="no">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}

export default Vision;
