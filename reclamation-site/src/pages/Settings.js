import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  FaUser,
  FaBell,
  FaList,
  FaUsers,
  FaChartLine,
  FaLock,
  FaPlug,
  FaCog,
} from "react-icons/fa";

// Composants pour chaque sous-page des paramètres
const ProfileSettings = () => <div>Gérer votre profil utilisateur ici.</div>;
const NotificationSettings = () => <div>Configurer vos préférences de notification ici.</div>;
const ClaimTypeSettings = () => <div>Gérer les types de réclamations ici.</div>;
const AgentSettings = () => <div>Gérer les agents et leurs permissions ici.</div>;
const ReportSettings = () => <div>Configurer les rapports et analytiques ici.</div>;
const SecuritySettings = () => <div>Gérer les paramètres de sécurité ici.</div>;
const IntegrationSettings = () => <div>Configurer les intégrations ici.</div>;

// Routes pour les paramètres
const settingsRoutes = [
  {
    path: "profile",
    name: "Profil Utilisateur",
    icon: <FaUser />,
    component: <ProfileSettings />,
  },
  {
    path: "notifications",
    name: "Notifications",
    icon: <FaBell />,
    component: <NotificationSettings />,
  },
  {
    path: "claim-types",
    name: "Types de Réclamations",
    icon: <FaList />,
    component: <ClaimTypeSettings />,
  },
  {
    path: "agents",
    name: "Gestion des Agents",
    icon: <FaUsers />,
    component: <AgentSettings />,
  },
  {
    path: "reports",
    name: "Rapports et Analytiques",
    icon: <FaChartLine />,
    component: <ReportSettings />,
  },
  {
    path: "security",
    name: "Sécurité",
    icon: <FaLock />,
    component: <SecuritySettings />,
  },
  {
    path: "integrations",
    name: "Intégrations",
    icon: <FaPlug />,
    component: <IntegrationSettings />,
  },
];

// Composant principal pour la section "Settings"
const Settings = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar pour les paramètres */}
      <div className="w-64 bg-[#8B0000] text-white p-4">
        <h2 className="text-lg font-bold mb-6">Paramètres</h2>
        <ul className="space-y-2">
          {settingsRoutes.map((route, index) => (
            <li key={index}>
              <Link
                to={route.path}
                className="flex items-center p-2 hover:bg-red-900 rounded-lg transition duration-200"
              >
                <span className="mr-2">{route.icon}</span>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contenu des paramètres */}
      <div className="flex-1 p-6">
        <Routes>
          {settingsRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
          <Route index element={<div>Sélectionnez une option de paramètres.</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Settings;