import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
import { ReclamationProvider } from "./Context/ReclamationContext";
import SideBar from './components/SideBar';
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import UserProfile from "./components/UserProfile";
import Archives from "./pages/Archives";
import ReclamationForm from "./components/ReclamationForm";
import { AuthProvider } from "./Context/AuthContext";
import Settings from "./pages/Settings";
import { FaMoon, FaSun, FaSignOutAlt } from "react-icons/fa";
import Dashboard from "./pages/Dashboard";
import ConfirmationPage from "./components/ConfirmationPage";
import AuthForm from "./components/AuthForm";

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || "/chaima.png"); // Image par défaut

  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <div className={`flex min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {!isAuthPage && <SideBar />}

      <div className="flex-1">
        {!isAuthPage && (
          <header className="flex justify-end items-center p-4 border-b border-gray-200 dark:border-gray-700 space-x-4">
            {/* Bouton Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
            </button>

            {/* Photo de profil (cliquable) */}
            <button onClick={() => navigate("/profile")} className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 hover:border-gray-500">
              <img src={profileImage} alt="chaima.PNG" className="w-full h-full object-cover" />
            </button>

          </header>
        )}

        <AuthProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<AuthForm />} />
            <Route path="/signup" element={<AuthForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/reclamation" element={<ReclamationForm />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReclamationProvider>
      <Router>
        {loading ? <SplashScreen /> : <Layout />}
      </Router>
    </ReclamationProvider>
  );
}

export default App;
