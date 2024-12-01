import React from 'react';
import { useSelector } from 'react-redux';

function MidwifeProfile() {
    const selectedMidwife = useSelector((state) => state.midwife.selectedMidwife);
    console.log(selectedMidwife)
  return (
    <>
       <div className="p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Iranganee Weerakkodi</h1>
      </div>

{/* 1 */}
      <div className="flex space-x-4 p-2">
        <div className="relative w-1/2">
          <label
            htmlFor="register-id"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Register ID
          </label>
          <input
            type="text"
            id="register-id"
            className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
            placeholder="Register ID"
          />
        </div>

        <div className="relative w-1/2">
          <label
            htmlFor="license-no"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            License No
          </label>
          <input
            type="text"
            id="license-no"
            className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
            placeholder="License No"
          />
        </div>
      </div>


{/* 2 */}
      <div className="flex space-x-4 p-2">
        <div className="relative w-1/2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
            placeholder="Name"
          />
        </div>

        <div className="relative w-1/2">
          <label
            htmlFor="designation"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Designation
          </label>
          <input
            type="text"
            id="designation"
            className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
            placeholder="Designation"
          />
        </div>
      </div>


{/* 3 */}
      <div className="flex space-x-4 p-2">
        <div className="relative w-1/2">
          <label
            htmlFor="district"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            District
          </label>
          <input
            type="text"
            id="district"
            className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
            placeholder="District"
          />
        </div>

        <div className="relative w-1/2">
          <label
            htmlFor="area"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Area
          </label>
          <input
            type="text"
            id="area"
            className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
            placeholder="Area"
          />
        </div>
      </div>


{/* 4 */}
<div className="flex space-x-4 p-2">
        <div className="relative w-1/2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
            placeholder="Email"
          />
        </div>

        <div className="relative w-1/2">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
            placeholder="Phone Number"
          />
        </div>
      </div>


{/* 5 */}
<div className="flex space-x-4 p-2">
        <div className="relative w-1/2">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className="block w-full rounded-lg border border-margin bg-white p-3 text-gray-800 placeholder-gray-400 focus:border-NavyBlue focus:outline-none"
            placeholder="Address"
          />
        </div>

      </div>

    </div>
    </>
  );
}

export default MidwifeProfile;