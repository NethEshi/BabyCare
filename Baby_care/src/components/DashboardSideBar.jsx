import Baby from "../assets/Baby.svg";
import Setting from "../assets/Setting.svg";
import LogOut from "../assets/LogOut.svg";

function DashboardSideBar() {
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      ></button>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-44 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-NavyBlue">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg  hover:bg-Blue "
              >
                <img className="Baby" src={Baby} alt="Baby" />
                <span class="ms-3">Babies</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg hover:bg-Blue"
              >
                <img className="Setting" src={Setting} alt="setting" />
                <span class="flex-1 ms-3 whitespace-nowrap">Setting</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg hover:bg-Blue"
              >
                <img className="LogOut" src={LogOut} alt="LogOut" />
                <span class="flex-1 ms-3 whitespace-nowrap">Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default DashboardSideBar;
