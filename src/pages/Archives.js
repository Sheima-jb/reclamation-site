import React, { useState } from "react";
import { FaSearch, FaSort, FaFileAlt } from "react-icons/fa";

const reclamations = [
  {
    id: 1,
    date: "2023-10-01",
    type: "Carte Bancaire",
    statut: "Terminée",
    description: "Problème de retrait d'argent",
  },
  {
    id: 2,
    date: "2023-10-05",
    type: "Paiement",
    statut: "En Cours",
    description: "Paiement non débité",
  },
  {
    id: 3,
    date: "2023-10-10",
    type: "Monétique",
    statut: "Nouvelle",
    description: "Erreur de transaction",
  },
  {
    id: 4,
    date: "2023-10-15",
    type: "Financement",
    statut: "Terminée",
    description: "Demande de prêt refusée",
  },
];

const Archives = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedReclamations = [...reclamations].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  const filteredReclamations = sortedReclamations.filter((reclamation) =>
    reclamation.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-6xl bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Archive des Réclamations</h1>

        {/* Barre de recherche */}
        <div className="flex items-center mb-6">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Rechercher une réclamation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tableau des réclamations */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th
                  className="p-3 text-left text-sm font-semibold text-gray-700 cursor-pointer"
                  onClick={() => requestSort("date")}
                >
                  Date <FaSort className="inline-block ml-1" />
                </th>
                <th
                  className="p-3 text-left text-sm font-semibold text-gray-700 cursor-pointer"
                  onClick={() => requestSort("type")}
                >
                  Type <FaSort className="inline-block ml-1" />
                </th>
                <th
                  className="p-3 text-left text-sm font-semibold text-gray-700 cursor-pointer"
                  onClick={() => requestSort("statut")}
                >
                  Statut <FaSort className="inline-block ml-1" />
                </th>
                <th className="p-3 text-left text-sm font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody>
              {filteredReclamations.map((reclamation) => (
                <tr key={reclamation.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-700">{reclamation.date}</td>
                  <td className="p-3 text-sm text-gray-700">{reclamation.type}</td>
                  <td className="p-3 text-sm text-gray-700">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        reclamation.statut === "Terminée"
                          ? "bg-green-100 text-green-700"
                          : reclamation.statut === "En Cours"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {reclamation.statut}
                    </span>
                  </td>
                  <td className="p-3 text-sm text-gray-700">{reclamation.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination (optionnelle) */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-700">
            Affichage de 1 à {filteredReclamations.length} sur {reclamations.length} réclamations
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
              Précédent
            </button>
            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archives;