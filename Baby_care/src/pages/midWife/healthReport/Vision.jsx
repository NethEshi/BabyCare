function Vision() {
  return (
    <>
      <div className="w-full font-poppins text-Ash px-5">

        
        <div>
          <div className=" w-full bg-NavyBlue ">
          <h1 className=" text-white p-1 text-center">First week of birth</h1>
        </div>
        <div className="grid grid-cols-2 px-2">
          <div className="space-y-2 pt-3">
            <p>1. Does the baby direct its eyes towards the light?</p>
            <div className=" flex space-x-10">
              <div>
                <input
                  type="radio"
                  name="firstWeekTowardsLight"
                  id="yes"
                  value="yes"
                />
                <label for="yes">Yes</label>
              </div>
              <div>
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
          <p>2. Does the baby look at your face well?</p>
            <div className=" flex space-x-10">
              <div>
                <input
                  type="radio"
                  name="firstWeeklookAtFace"
                  id="yes"
                  value="yes"
                />
                <label for="yes">Yes</label>
              </div>
              <div>
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


    </div>
    </>
  );
}

export default Vision;
