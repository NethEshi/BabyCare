import React, { useState } from "react";

function Hearing() {
  return (
    <>
      <div className="w-full font-poppins text-Ash px-5">
        <section className=" space-y-5">

          <div>
            <div className=" w-full bg-NavyBlue ">
              <h1 className=" text-white p-1 text-center">
              Shortly after birth
              </h1>
            </div>
            <div className="grid grid-cols-1 px-2">
              <div className="space-y-2 pt-3">
                <p>1.  Does your child startle and blink at loud noises (like clapping, slamming a door)?  Or do widen eyes ?</p>
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
              By 2 months
              </h1>
            </div>
            <div className="grid grid-cols-1 px-2">
              <div className="space-y-2 pt-3">
                <p>1.  Do you pick up on sudden or continuous sounds (such as the sound of a car) and start humming quietly to them ?</p>
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
                By 4 months
              </h1>
            </div>
            <div className="grid grid-cols-2 px-5">
              <div className="space-y-2 pt-3">
                <p>1. Even if their mother or caregiver is not in sight, are they silent when they hear their sounds?  Or do you laugh a little ?</p>
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
                <p>2. Does the head or eyes turn towards the mother or caretaker when speaking from the side or behind ?</p>
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
              By 7 months
              </h1>
            </div>
            <div className="grid grid-cols-1 px-2">
              <div className="space-y-2 pt-3">
                <p>1.  Does baby turn to mother/caretaker for immediately after talking ?</p>
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
                By 9 months
              </h1>
            </div>
            <div className="grid grid-cols-2 px-5">
              <div className="space-y-2 pt-3">
                <p>1. Do you listen carefully to the familiar sounds you hear every day ?</p>
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
                <p>2. Looking for sounds from somewhere baby can't see ?</p>
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
                <p>3.  Love it when you speak to a loud tune ?</p>
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
                By 12 months
              </h1>
            </div>
            <div className="grid grid-cols-2 px-5">
              <div className="space-y-2 pt-3">
                <p>1.  Responds to own and other familiar sounds ?</p>
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
                <p>2. Do baby respond to words like “Tata” “No” without doing the corresponding action ?</p>
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

export default Hearing;