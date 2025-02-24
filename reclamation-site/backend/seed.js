const mongoose = require("mongoose");
const User = require("./server").User; // Import du modèle
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = [
  {
    email: "omarj@gmail.com",
    name: "Jendoubi omar",
    profileImage: "/images/user.png",
    role: "user",
    reclamations: [
      { title: "Problème de connexion", status: "En cours" },
      { title: "Erreur de transaction", status: "Résolu" },
    ],
  },
  {
    email: "chaimaj340@gmail.com",
    name: "jendoubi chaima",
    profileImage: "/images/chaima.PNG",
    role: "admin",
    reclamations: [
      { title: "Problème de connexion", status: "En cours" },
      { title: "Erreur de transaction", status: "Résolu" },
      { title: "Carte bloquée", status: "En attente" },
    ],
  },
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(users);
  console.log("📦 Base de données peuplée !");
  mongoose.connection.close();
};

seedDB();
