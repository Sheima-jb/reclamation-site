import { createContext, useContext, useState } from "react";

const ReclamationContext = createContext();

export const ReclamationProvider = ({ children }) => {
  const [reclamations, setReclamations] = useState([]);

  const ajouterReclamation = (nouvelleReclamation) => {
    setReclamations((prev) => [...prev, nouvelleReclamation]);
  };

  return (
    <ReclamationContext.Provider value={{ reclamations, ajouterReclamation }}>
      {children}
    </ReclamationContext.Provider>
  );
};

export const useReclamations = () => useContext(ReclamationContext);
