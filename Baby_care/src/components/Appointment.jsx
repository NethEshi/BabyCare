

function Appointment() {
  return (
    <div>

     <div className="flex flex-col w-[20%] p-4">
        <label
          className="text-neutral-700 text-lg font-medium font-poppins mb-2"
          htmlFor="Gender"> Select the Doctor </label>

        <select
          className="px-3 bg-neutral-100 border border-zinc-300 rounded-lg py-2"
          id="Gender"
          name="Gender"
          defaultValue=""
        >
          <option value="" disabled> Select the doctor </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
    </div>

    <div>
    <div className="p-6 w-full overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 font-medium">Patient Number</th>
            <th className="border border-gray-300 px-4 py-2 font-medium">Patient Name</th>
            <th className="border border-gray-300 px-4 py-2 font-medium">Patient Age</th>
            <th className="border border-gray-300 px-4 py-2 font-medium">Parent Name</th>
            <th className="border border-gray-300 px-4 py-2 font-medium">Parent Number</th>
            <th className="border border-gray-300 px-4 py-2 font-medium">Parent Email</th>
            <th className="border border-gray-300 px-4 py-2 font-medium">Session</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">Shavini Nimesha</td>
            <td className="border border-gray-300 px-4 py-2">2 year</td>
            <td className="border border-gray-300 px-4 py-2">Sakunthala Adhikari</td>
            <td className="border border-gray-300 px-4 py-2">070 889 3328</td>
            <td className="border border-gray-300 px-4 py-2">sakunthala@gmail.com</td>
            <td className="border border-gray-300 px-4 py-2">Morning</td>
          </tr>
        </tbody>
      </table>
    </div>

    </div>

    </div>
  );
}

export default Appointment;