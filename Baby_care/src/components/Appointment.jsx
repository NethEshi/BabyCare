

function Appointment() {
  return (
    <div>
      <div className="p-2">
      <label
              htmlFor="designation"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Designation
            </label>
            <select
                  className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
                  id="Designation"
                  name="Designation"
                  defaultValue=""
                  onChange={handleChange}
                  value={formData.Designation}
                >
                  <option value="" disabled>
                    Select Designation
                  </option>
                  <option value={"super visionary public health midwife"}>super visionary public health midwife</option>
                  <option value={"public health midwife"}>public health midwife</option>
                  <option value={"special grade midwife"}>special grade midwife </option>
            </select>
      </div>
    </div>
  );
}

export default Appointment;