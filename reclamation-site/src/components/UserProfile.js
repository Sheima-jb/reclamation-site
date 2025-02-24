
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { Box, Typography, Paper, Button, TextField } from "@mui/material";

const UserProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user || {
    firstName: "",
    lastName: "",
    email: "",
    rib: "",
    phone: "",
    gmail: ""
  });

  if (!user) {
    return <Typography variant="h6" textAlign="center">Aucun utilisateur connecté.</Typography>;
  }

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);
  const handleGoHome = () => navigate("/home");

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={3} sx={{ padding: 4, width: 400, textAlign: 'center' }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>Profil Utilisateur</Typography>

        {isEditing ? (
          <>
            <TextField fullWidth variant="outlined" label="Prénom" value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} sx={{ mb: 2 }} />

            <TextField fullWidth variant="outlined" label="Nom" value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} sx={{ mb: 2 }} />

            <TextField fullWidth variant="outlined" label="Email" value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} sx={{ mb: 2 }} />

            <TextField fullWidth variant="outlined" label="RIB" value={formData.rib}
              onChange={(e) => setFormData({ ...formData, rib: e.target.value })} sx={{ mb: 2 }} />

            <TextField fullWidth variant="outlined" label="Téléphone" value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })} sx={{ mb: 2 }} />

            <Button variant="contained" sx={{ mt: 2, bgcolor: "#B71C1C", "&:hover": { bgcolor: "#9A1313" } }} onClick={handleSave}>
              Enregistrer
            </Button>
          </>
        ) : (
          <>
            <Typography><strong>Prénom :</strong> {user.firstName}</Typography>
            <Typography><strong>Nom :</strong> {user.lastName}</Typography>
            <Typography><strong>Email :</strong> {user.email}</Typography>
            <Typography><strong>RIB :</strong> {user.rib}</Typography>
            <Typography><strong>Téléphone :</strong> {user.phone}</Typography>

            <Button
              variant="contained"
              sx={{ mt: 2, mr: 2, bgcolor: "#B71C1C", "&:hover": { bgcolor: "#9A1313" } }}
              onClick={handleEdit}
            >
              Modifier Profil
            </Button>

            <Button
              variant="contained"
              sx={{ mt: 2, bgcolor: "#1E88E5", "&:hover": { bgcolor: "#1565C0" } }}
              onClick={handleGoHome}
            >
              Adresser une réclamation
            </Button>

          </>
        )}
      </Paper>
    </Box>
  );
};

export default UserProfile;
