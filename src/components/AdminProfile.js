import { useEffect, useState } from "react";
import axios from "axios";

const AdminProfile = () => {
  const [reclamations, setReclamations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/reclamations")
      .then((response) => setReclamations(response.data))
      .catch((error) => console.error("Erreur:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Tableau de bord Admin</h2>
      <h3>Toutes les réclamations :</h3>
      <ul>
        {reclamations.map((rec, index) => (
          <li key={index}>
            {rec.title} - <strong>{rec.status}</strong> (par {rec.user})
            <button style={{ marginLeft: "10px" }}>Modifier</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProfile;
