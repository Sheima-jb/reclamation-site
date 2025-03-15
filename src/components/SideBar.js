import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaArchive,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaUser,
  FaBell,
  FaList,
  FaUsers,
  FaChartLine,
  FaLock,
  FaPlug,
  FaAngleDown,
  FaChartBar,
} from "react-icons/fa";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/LoginForm");
  };

  const toggle = () => setIsOpen(!isOpen);

  const settingsRoutes = [
    {
      path: "/settings/security",
      name: "Sécurité",
      icon: <FaLock size={16} />,
    },
  ];

  return (
    <div className={`top-10 left-5 h-full min-h-screen bg-white text-gray-900 shadow-lg flex flex-col transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      <div className="top_section flex justify-between items-center p-4 border-b">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="text-xl font-bold"></h1>
            </motion.div>
          )}
        </AnimatePresence>


        <div className="cursor-pointer" onClick={toggle}>
          <FaBars size={24} />
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <Link to="/dashboard" className="flex items-center p-3 hover:bg-gray-200 rounded-lg">
          <FaChartBar size={20} />
          {isOpen && <span className="ml-3">Dashboard</span>}
        </Link>
        <Link to="/archives" className="flex items-center p-3 hover:bg-gray-200 rounded-lg">
          <FaArchive size={20} />
          {isOpen && <span className="ml-3">Archives</span>}
        </Link>

        <div className="relative">
          <button onClick={() => setIsSettingsOpen(!isSettingsOpen)} className="flex items-center p-3 w-full hover:bg-gray-200 rounded-lg">
            <FaCog size={20} />
            {isOpen && <span className="ml-3">Settings</span>}
            {isOpen && <FaAngleDown className="ml-auto" />}
          </button>
          {isSettingsOpen && (
            <div className="ml-6 mt-2 space-y-2">
              {settingsRoutes.map((route, index) => (
                <Link key={index} to={route.path} className="flex items-center p-2 hover:bg-gray-300 rounded-lg">
                  {route.icon}
                  {isOpen && <span className="ml-3">{route.name}</span>}
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>

      <div className="p-4 mt-auto">
        <button onClick={handleLogout} className="flex items-center p-3 w-full hover:bg-gray-200 rounded-lg">
          <FaSignOutAlt size={20} />
          {isOpen && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
