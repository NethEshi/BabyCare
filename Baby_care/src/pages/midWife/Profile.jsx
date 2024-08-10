import { useSelector } from "react-redux";
import { useState } from "react";
function Profile() {
  const selectedBaby = useSelector((state) => state.baby.selectedBaby);
  const [formData, setFormData] = useState({
    DOB:"test"
  });

  return (
    <div className=" h-[75%] overflow-scroll">
      <div className="grid grid-cols-2 px-5 font-poppin space-x-5">
        <div className="bg-light-pink p-5 ">
          <div className="bg-white rounded-xl flex-row p-2">
            <div className="text-lg font-semibold">Birthday</div>
            <div>
              <input type="text" value={formData.DOB}  onChange={(e) => setFormData({ ...formData, DOB: e.target.value })}/>
            </div>
          </div>
          <br />
          <div className="bg-white rounded-xl flex-row p-2">
            <div className="text-lg font-semibold">Birth Weight (g)</div>
            <div>
              <input type="text" value={formData.birthWight} onChange={(e) => setFormData({...formData, birthWight: e.target.value})} />
            </div>
          </div>
          <br />
          <div className="bg-white rounded-xl flex-row p-2">
            <div className="text-lg font-semibold">Head Circumference at Birth (cm)</div>
            <div>
              <input type="text" placeholder={`${selectedBaby.BirthHeight}`} />
            </div>
          </div>
          <br />
          <div className="bg-white rounded-xl flex-row p-2">
            <div className="text-lg font-semibold">Baby’s Length at Birth (cm)</div>
            <div>
              <input type="text" placeholder={`${selectedBaby.ParentName}`} />
            </div>
          </div>
          <br />
          <div className="bg-white rounded-xl flex-row p-2">
            <div className="text-lg font-semibold">Name of mother</div>
            <div>
              <input
                type="text"
                placeholder={`${selectedBaby.ParentContact}`}
              />
            </div>
          </div>
          <br />
          <div className="bg-white rounded-xl flex-row p-2">
            <div className="text-lg font-semibold">Age</div>
            <div>
              <input type="text" placeholder={`${selectedBaby.ParentEmail}`} />
            </div>
          </div>
          <br />
          <div className="bg-white rounded-xl flex-row p-2">
            <div className="text-lg font-semibold">Address</div>
            <div>
              <input type="text" placeholder={`${selectedBaby.Address}`} />
            </div>
          </div>
          <br />
          <div className="bg-white rounded-xl flex-row p-2">
            <div className="text-lg font-semibold">Email Address</div>
            <div>
              <input type="text" placeholder={`${selectedBaby.City}`} />
            </div>
          </div>
          <br />
          <div className="bg-white rounded-xl flex-row p-2">
            <div className="text-lg font-semibold">Name of the MidWife</div>
            <div>
              <input type="text" placeholder={`${selectedBaby.State}`} />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-light-pink p-5">
            <div className="bg-white rounded-xl flex-row p-2">
              <div className="text-lg font-semibold">Health Medical Officer Section</div>
              <div>
                <input type="text" placeholder={`${selectedBaby.DOB}`} />
              </div>
            </div>
            <br />
            <div className="bg-white rounded-xl flex-row p-2">
              <div className="text-lg font-semibold">
                Family Health Medical Officer Section
              </div>
              <div>
                <input type="text" placeholder={`${selectedBaby.DOB}`} />
              </div>
            </div>
            <br />
            <div className="bg-white rounded-xl flex-row p-2">
              <div className="text-lg font-semibold">Date of Settlement</div>
              <div>
                <input type="text" placeholder={`${selectedBaby.DOB}`} />
              </div>
            </div>
            <br />
            <div className="bg-white rounded-xl flex-row p-2">
              <div className="text-lg font-semibold">Registered ID</div>
              <div>
                <input type="text" placeholder={`${selectedBaby.ID}`} />
              </div>
            </div>
          </div>
          <br />
          <div className="bg-light-pink p-5 flex align-middle justify-between">
            <div className="text-lg font-semibold">Health Condition</div>
            <div className=" space-x-5">
              <label htmlFor="Normal">Normal</label>
              <input
                type="radio"
                id="Normal"
                name="Health Condition"
                value="Normal"
              />
            </div>
            <div className=" space-x-5">
              <label htmlFor="Need Special Attention">
                Need Special Attention
              </label>
              <input
                type="radio"
                id="Need Special Attention"
                name="Health Condition"
                value="Need Special Attention"
              />
            </div>
            <br />
          </div>
          <br />
          <div className="bg-light-pink p-5 flex align-middle justify-between">
            <div className="text-lg font-semibold">Vitamin K</div>
            <div className=" space-x-5">
              <label htmlFor="Normal">Given</label>
              <input type="radio" id="Given" name="Vitamin K" value="Given" />
            </div>
            <div className=" space-x-5">
              <label htmlFor="Need Special Attention">Not Given</label>
              <input
                type="radio"
                id="Not Given"
                name="Vitamin K"
                value="Not Given"
              />
            </div>
            <br />
          </div>
          <p className="p-5 font-semibold text-3xl">Breast milk Feeding</p>
          <div className="bg-light-pink p-5 flex align-middle justify-between">
            <div className="text-lg font-semibold">Posture</div>
            <div className=" space-x-5">
              <label htmlFor="Normal">Correct</label>
              <input type="radio" id="Correct" name="Posture" value="Correct" />
            </div>
            <div className=" space-x-5">
              <label htmlFor="Need Special Attention">Incorrect</label>
              <input
                type="radio"
                id="Incorrect"
                name="Posture"
                value="Incorrect"
              />
            </div>
            <br />
          </div>
          <br />
          <div className="bg-light-pink p-5 flex align-middle justify-between">
            <div className="text-lg font-semibold">Relation</div>
            <div className=" space-x-5">
              <label htmlFor="Normal">Correct</label>
              <input
                type="radio"
                id="Correct"
                name="Relation"
                value="Correct"
              />
            </div>
            <div className=" space-x-5">
              <label htmlFor="Need Special Attention">Incorrect</label>
              <input
                type="radio"
                id="Incorrect"
                name="Relation"
                value="Incorrect"
              />
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
