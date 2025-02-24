import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaArchive, FaCog, FaSignOutAlt, FaBars, FaUser, FaBell, FaList, FaUsers, FaChartLine, FaLock, FaPlug } from "react-icons/fa";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true); // Pour ouvrir/fermer la sidebar
    const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Pour ouvrir/fermer la liste déroulante des paramètres
    const navigate = useNavigate();

    // Fonction pour gérer la déconnexion
    const handleLogout = () => {
        localStorage.removeItem("userToken");
        navigate("/LoginForm");
    };

    // Animation pour afficher/masquer le texte
    const showAnimation = {
        hidden: { width: 0, opacity: 0, transition: { duration: 0.5 } },
        show: { opacity: 1, width: "auto", transition: { duration: 0.5 } },
    };

    // Fonction pour toggle la sidebar
    const toggle = () => setIsOpen(!isOpen);

    // Sous-routes pour les paramètres
    const settingsRoutes = [
      
        
        
       
        
        {
            path: "/settings/security",
            name: "Sécurité",
            icon: <FaLock size={16} />,
        },
       
    ];

    return (
        <>
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-screen bg-[#8B0000] text-white shadow-lg flex flex-col justify-between transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
                {/* Partie supérieure (Logo + Menu) */}
                <div>
                    {/* Bouton pour rétracter le menu */}
                    <div className="top_section flex justify-between items-center p-4">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1 variants={showAnimation} initial="hidden" animate="show" exit="hidden" className="logo">
                                    {/* Insérer ici le texte ou le logo si besoin */}
                                </motion.h1>
                            )}
                        </AnimatePresence>
                        <div className="bars cursor-pointer" onClick={toggle}>
                            <FaBars size={24} />
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="flex justify-center my-6">
                        <img src="logoATB.png" alt="Logo ATB" className={`transition-all duration-300 ${isOpen ? "w-10" : "w-8"}`} />
                    </div>

                    {/* Liens de navigation */}
                    <Box className="flex flex-col space-y-6 mt-10">
                        <Link to="/dashboard" className="flex items-center p-3 hover:bg-red-900 rounded-lg">
                            <FaHome size={20} />
                            {isOpen && <span className="ml-3">Tableau de bord</span>}
                        </Link>
                        <Link to="/archives" className="flex items-center p-3 hover:bg-red-900 rounded-lg">
                            <FaArchive size={20} />
                            {isOpen && <span className="ml-3">Archives</span>}
                        </Link>

                        {/* Bouton Paramètres avec liste déroulante */}
                        <div className="relative">
                            <button
                                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                                className="flex items-center p-3 w-full hover:bg-red-900 rounded-lg"
                            >
                                <FaCog size={20} />
                                {isOpen && <span className="ml-3">Paramètres</span>}
                            </button>

                            {/* Liste déroulante des paramètres */}
                            {isSettingsOpen && (
                                <div className="ml-6 mt-2 space-y-2">
                                    {settingsRoutes.map((route, index) => (
                                        <Link
                                            key={index}
                                            to={route.path}
                                            className="flex items-center p-2 hover:bg-red-800 rounded-lg"
                                        >
                                            {route.icon}
                                            {isOpen && <span className="ml-3">{route.name}</span>}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Box>
                </div>

                {/* Bouton de déconnexion en bas */}
                <div className="p-4">
                    <button
                        onClick={handleLogout}
                        className="flex items-center p-3 w-full hover:bg-red-900 rounded-lg"
                    >
                        <FaSignOutAlt size={20} />
                        {isOpen && <span className="ml-3">Déconnexion</span>}
                    </button>
                </div>
            </div>

            {/* Contenu principal (décalé en fonction de la sidebar) */}
            <div className={`transition-all duration-300 ${isOpen ? "ml-64" : "ml-20"} p-6`}>
                {/* Contenu principal ici */}
            </div>
        </>
    );
};

export default Sidebar;