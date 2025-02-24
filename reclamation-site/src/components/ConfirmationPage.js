import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
    const navigate = useNavigate();

    // Données simulées de la réclamation (à remplacer par les données réelles)
    const reclamation = {
        numero: "#123456",
        date: "25 octobre 2023",
        type: "Problème de carte bancaire",
        description: "Carte bloquée après une transaction suspecte.",
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 p-6">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full text-center">
                {/* Titre */}
                <h1 className="text-3xl font-bold text-[#8B0000] mb-6">Votre réclamation a bien été envoyée</h1>

                {/* Message de confirmation */}
                <p className="text-gray-700 mb-6">
                    Merci ! Votre réclamation a bien été enregistrée. Notre équipe va la traiter dans les plus brefs délais.
                </p>

                {/* Résumé de la réclamation */}
                <div className="bg-gray-50 p-6 rounded-lg text-left mb-6">
                    <h2 className="text-xl font-semibold text-[#8B0000] mb-4">Résumé de votre réclamation</h2>
                    <p><strong>Numéro de réclamation :</strong> {reclamation.numero}</p>
                    <p><strong>Date de soumission :</strong> {reclamation.date}</p>
                    <p><strong>Type de réclamation :</strong> {reclamation.type}</p>
                    <p><strong>Description :</strong> {reclamation.description}</p>
                </div>

                {/* Étapes suivantes */}
                <p className="text-gray-700 mb-6">
                    Vous recevrez un email de confirmation sous 24 heures. Notre équipe vous contactera dans les 3 à 5 jours ouvrables pour vous tenir informé de l'avancement de votre réclamation.
                </p>

                {/* Boutons */}
                <div className="flex justify-center gap-4">
                    <button
                        className="bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-900 transition duration-300"
                        onClick={() => navigate("/suivi-reclamation")}
                    >
                        Suivre ma réclamation
                    </button>
                    <button
                        className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300"
                        onClick={() => navigate("/UserProfile")}
                    >
                        Retour au Profil
                    </button>
                </div>

                {/* Informations de contact */}
                <p className="text-gray-700 mt-6">
                    Si vous avez des questions, n'hésitez pas à nous contacter au{" "}
                    <strong>+216 70 123 456</strong> ou par email à{" "}
                    <strong>support@atb.com.tn</strong>.
                </p>
            </div>
        </div>
    );
};

export default ConfirmationPage;