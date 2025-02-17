import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AuthForm from "./components/AuthForm"; // Ensure you have a Login.js file
import SplashScreen from "./components/SplashScreen"; // Import SplashScreen
import Home from "./components/Home"; // Import Home if needed
import UserProfile from "./components/UserProfile";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the splash screen for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <SplashScreen /> // Show splash screen
        ) : (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<AuthForm />} /> {/* Redirect to AuthForm on start */}
              <Route path="/auth" element={<AuthForm />} /> {/* Route for the login page */}
              <Route path="/home" element={<Home />} /> {/* Route for Home if needed */}
              <Route path='/userProfile' element={<UserProfile />} />

            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;