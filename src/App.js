import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { ReclamationProvider } from "./Context/ReclamationContext";
import SideBar from './components/SideBar';
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import UserProfile from "./components/UserProfile";
import Archives from "./pages/Archives";
import ReclamationForm from "./components/ReclamationForm";
import { AuthProvider } from "./Context/AuthContext";
import Settings from "./pages/Settings";
import { FaMoon, FaSun } from "react-icons/fa";
import Dashboard from "./pages/Dashboard";
import ConfirmationPage from "./components/ConfirmationPage";
import AuthForm from "./components/AuthForm";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || "/chaima.png");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  const isAuthPage = ["/login", "/signup"].includes(location.pathname);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <AuthProvider>
      <div className="flex flex-col h-screen">
        {!isAuthPage && (
          <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <img src="logoATB.png" alt="Logo" className="h-10 w-10" />
              <h1 className="text-xl font-bold">ATB Réclamations</h1>
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
              </button>

              <button onClick={() => navigate("/profile")} className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 hover:border-gray-500">
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              </button>
            </div>
          </header>
        )}

        <div className="flex flex-1">
          {!isAuthPage && <SideBar className="w-full" />}

          <div className="flex-1 p-4 overflow-auto">
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
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
