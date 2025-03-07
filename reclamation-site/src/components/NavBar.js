import React from "react";
import { Menu, Search, Settings, Sun, Moon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "../redux/state";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSidebarCollapsed = useSelector((state) => state.isSidebarCollapsed);
  const isDarkMode = useSelector((state) => state.isDarkMode);

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black dark:px-4 dark:py-3">
      {/* Barre de recherche et menu */}
      <div className="flex items-center gap-8">
        {!isSidebarCollapsed ? null : (
          <button onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
            <Menu className="h-8 w-8 dark:text-white" />
          </button>
        )}

        <div className="relative flex h-main w-[200px]">
          <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Icônes et profil */}
      <div className="flex items-center">
        {/* Dark Mode */}
        <button
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className={`rounded p-2 ${isDarkMode ? "dark:hover:bg-gray-700" : "hover:bg-gray-100"}`}
        >
          {isDarkMode ? <Sun className="h-6 w-6 cursor-pointer dark:text-white" /> : <Moon className="h-6 w-6 cursor-pointer dark:text-white" />}
        </button>

        {/* Paramètres */}
        <button
          onClick={() => navigate("/settings")}
          className={`h-main w-main rounded p-2 ${isDarkMode ? "dark:hover:bg-gray-700" : "hover:bg-gray-100"}`}
        >
          <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
        </button>

        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>

        {/* Profil */}
        <button onClick={() => navigate("/profile")} className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 hover:border-gray-500">
          <img src={"/chaima.png"} alt="Profile" className="w-full h-full object-cover" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
