function Clinics() {
  return (
    <div className="w-full text-Ash font-poppins">
      <div>
        <div className="pb-5">
          <button className="bg-NavyBlue text-white p-2 rounded-xl">Schedule a new date</button>
        </div>
        <table className="border-2 w-full">
          <thead>
            <tr>
              <th className="w-[10%] border-2 p-2">Date</th>
              <th>Special Notes</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            <tr className="border-2 hover:bg-gray-200">
              <td className="border-2 p-2">12/12/2021</td>
              <td>Check up</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Clinics;
