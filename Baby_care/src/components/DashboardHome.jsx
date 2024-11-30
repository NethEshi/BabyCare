import Baby from "../assets/baby.png";
import Midwife from "../assets/Midwife.png";
import Location from "../assets/Location.png";
import HosDashImg from "../assets/HosDashImg.png";

function DashboardHome() {
  return (
    <div className="bg-white min-h-screen p-8">

      <div className="grid grid-cols-3 gap-6 mb-8">

        <div className="flex items-center bg-light-pink border border-margin-blue rounded-lg p-4 w-full shadow-md">
          <img src={Midwife} alt="Midwife" className="w-[50px] h-[50px]" />
          <div className="ml-4 text-base font-semibold text-blueF">Total Midwives</div>
          <div className="ml-12 text-5xl font-bold text-blue-900">17</div>
        </div>

        <div className="flex items-center bg-light-pink border border-margin-blue rounded-lg p-4 w-full shadow-md">
          <img src={Baby} alt="Baby" className="w-[50px] h-[50px]" />
          <div className="ml-4 text-base font-semibold text-blueF">Total Babies</div>
          <div className="ml-12 text-5xl font-bold text-blue-900">25</div>
        </div>

        <div className="flex items-center bg-light-pink border border-margin-blue rounded-lg p-4 w-full shadow-md">
          <img src={Location} alt="Location" className="w-[50px] h-[50px]" />
          <div className="ml-4 text-base font-semibold text-blueF">Total Locations</div>
          <div className="ml-12 text-5xl font-bold text-blue-900">40</div>
        </div>
      </div>


      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-light-pink border border-margin-blue rounded-lg w-[100%] h-[250px] flex items-center justify-center shadow-md col-span-1">
          <p className="text-blue-900 font-bold">Birth overview</p>
        </div>

        <div className="bg-light-pink border border-margin-blue rounded-lg w-[100%] h-[250px] flex items-center justify-center shadow-md col-span-1">
          <p className="text-blue-900 font-bold">Gender Overview</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-light-pink border border-margin-blue rounded-lg w-[100%] h-[250px] flex items-center justify-center shadow-md col-span-1">
          <p className="text-blue-900 font-bold">Weight overview</p>
        </div>

        <div className="bg-white border border-white rounded-lg w-[100%] h-[250px] flex items-center justify-center col-span-1">
          <img src={HosDashImg} alt="HosDashImg" className="w-[240px] h-[260px]" />
        </div>
      </div>


    </div>
  );
}

export default DashboardHome;
