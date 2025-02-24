// src/data.js
export const users = [
    {
      email: "",
      name: "",
      profileImage: "/images/user.png",
      password: "password123", // Add password for user
      role: "user",
      reclamations: [
        { title: "Problème de connexion", status: "En cours" },
        { title: "Erreur de transaction", status: "Résolu" },
      ],
    },
    {
      email: "",
      name: "",
      profileImage: "/images/chaima.PNG",
      password: "adminpass", // Add password for admin
      role: "admin",
      reclamations: [
        { title: "Problème de connexion", status: "En cours" },
        { title: "Erreur de transaction", status: "Résolu" },
        { title: "Carte bloquée", status: "En attente" },
      ],
    },
  ];