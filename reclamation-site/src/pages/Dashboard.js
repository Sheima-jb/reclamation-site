import React from "react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaRegCheckCircle, FaSpinner, FaTimesCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const dataBar = [
  { name: "Nouvelle", value: 12 },
  { name: "En cours", value: 8 },
  { name: "Traitée", value: 15 },
  { name: "Rejetée", value: 5 },
];

const dataPie = [
  { name: "Traitée", value: 15 },
  { name: "En cours", value: 8 },
  { name: "Rejetée", value: 5 },
];

const COLORS = ["#4CAF50", "#FFC107", "#F44336"];

const Table = ({ complaints }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded-lg">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-2 px-4 text-left">Date</th>
          <th className="py-2 px-4 text-left">Type</th>
          <th className="py-2 px-4 text-left">Statut</th>
        </tr>
      </thead>
      <tbody>
        {complaints.map((complaint, index) => (
          <tr key={index} className="border-b">
            <td className="py-2 px-4">{complaint.date}</td>
            <td className="py-2 px-4">{complaint.type}</td>
            <td className="py-2 px-4 flex items-center">
              {complaint.status === "Traitée" && <FaRegCheckCircle className="text-green-500 mr-2" />}
              {complaint.status === "En cours" && <FaSpinner className="text-yellow-500 mr-2" />}
              {complaint.status === "Rejetée" && <FaTimesCircle className="text-red-500 mr-2" />}
              {complaint.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Dashboard = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    setComplaints([
      { date: "2025-02-20", type: "Carte Bancaire", status: "Traitée" },
      { date: "2025-02-18", type: "Paiement", status: "En cours" },
      { date: "2025-02-15", type: "Financement", status: "Rejetée" },
    ]);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Tableau de Bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-gray-600">Total Réclamations</p>
          <p className="text-2xl font-bold">40</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-gray-600">Réclamations En cours</p>
          <p className="text-2xl font-bold">8</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-gray-600">Réclamations Traitées</p>
          <p className="text-2xl font-bold">15</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Statistiques des Réclamations</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataBar}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#0088FE" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Répartition des Réclamations</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={dataPie} dataKey="value" cx="50%" cy="50%" outerRadius={100}>
                {dataPie.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-bold mb-4">Historique des Réclamations</h2>
        <Table complaints={complaints} />
      </div>
    </div>
  );
};

export default Dashboard;
