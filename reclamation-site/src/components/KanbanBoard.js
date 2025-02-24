import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineRefresh, HiOutlineCheckCircle, HiOutlinePlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const initialTasks = {
  "Nouvelles": ["Réclamation 1", "Réclamation 2"],
  "En Cours": ["Réclamation 3"],
  "Terminées": ["Réclamation 4"],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 p-6">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-[#8B0000] mb-8">Tableau de Bord des Réclamations</h1>

      {/* Conteneur des cartes */}
      <div className="flex justify-between gap-6 w-full max-w-7xl mt-10 overflow-x-auto">
        {Object.entries(tasks).map(([status, items], index) => (
          <motion.div
            key={status}
            className="bg-white p-6 rounded-xl shadow-2xl border-t-4 flex-1 min-w-[30%] transition-transform hover:scale-105 hover:shadow-3xl"
            style={{ borderTopColor: index === 0 ? "#8B0000" : index === 1 ? "#1E3A8A" : "#065F46" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* En-tête de la carte */}
            <div className="flex items-center gap-4 mb-4">
              {index === 0 && <HiOutlineMail className="text-[#8B0000] text-3xl" />}
              {index === 1 && <HiOutlineRefresh className="text-[#1E3A8A] text-3xl" />}
              {index === 2 && <HiOutlineCheckCircle className="text-[#065F46] text-3xl" />}
              <h2 className="text-xl font-semibold text-gray-700 capitalize">{status}</h2>
            </div>

            {/* Nombre de réclamations */}
            <p className="text-2xl font-bold mb-4" style={{ color: index === 0 ? "#8B0000" : index === 1 ? "#1E3A8A" : "#065F46" }}>
              {items.length} réclamations
            </p>

            {/* Boutons interactifs */}
            {index === 0 && (
              <motion.button
                className="flex items-center gap-2 px-4 py-2 text-white bg-[#8B0000] rounded-lg hover:bg-[#6A0000] transition-all duration-300 ease-in-out"
                onClick={() => navigate("/reclamation")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiOutlinePlusCircle /> Déposer une réclamation
              </motion.button>
            )}
            {index === 1 && (
              <motion.button
                className="mt-4 px-4 py-2 text-white bg-[#1E3A8A] rounded-lg hover:bg-[#1D4ED8] transition-all duration-300 ease-in-out"
                onClick={() => navigate("/voir-reclamations")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir les réclamations en cours
              </motion.button>
            )}
            {index === 2 && (
              <motion.button
                className="mt-4 px-4 py-2 text-white bg-[#065F46] rounded-lg hover:bg-[#047857] transition-all duration-300 ease-in-out"
                onClick={() => navigate("/voir-reclamations-terminees")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir les réclamations terminées
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;