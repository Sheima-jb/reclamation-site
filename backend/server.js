require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("✅ Connecté à MongoDB"));
db.on("error", (err) => console.error("Erreur MongoDB:", err));

// Modèles Mongoose
const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  profileImage: String,
  role: String, // "user" ou "admin"
  reclamations: [
    {
      title: String,
      status: String,
    },
  ],
});

const User = mongoose.model("User", UserSchema);

// 📌 Route pour récupérer un utilisateur par email
app.get("/users/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 Route pour récupérer toutes les réclamations (admin)
app.get("/reclamations", async (req, res) => {
  try {
    const users = await User.find({});
    const reclamations = users.flatMap((user) =>
      user.reclamations.map((rec) => ({
        ...rec._doc,
        user: user.name,
      }))
    );
    res.json(reclamations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 Route pour ajouter une réclamation
app.post("/users/:email/reclamations", async (req, res) => {
  try {
    const { title, status } = req.body;
    const user = await User.findOneAndUpdate(
      { email: req.params.email },
      { $push: { reclamations: { title, status } } },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));

module.exports = app;