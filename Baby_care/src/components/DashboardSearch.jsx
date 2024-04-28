import profile from "../assets/profile.png";



function DashboardSearch() {
  return (
    <>
      <form class="w-96 h-1 mx-auto">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-NavyBlue border border-gray-300 rounded-3xl bg-gray-50 focus:ring-Blue focus:border-Blue"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-Blue hover:bg-Bluefocus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      <div>
        <img
          class="w-10 h-10 p-1 rounded-full ring-2 ring-NavyBlue cursor-pointer"
          src={profile}
          alt="profile"
        />
      </div>

    </>
  );
}

export default DashboardSearch;
