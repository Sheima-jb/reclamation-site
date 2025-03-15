import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const savedUser = localStorage.getItem(email);
        if (savedUser) {
            alert(`Un lien de réinitialisation a été envoyé à ${email}`);
            navigate('/AuthForm');
            // Ici, intégrer un service d'envoi d'email comme Nodemailer ou SendGrid
        } else {
            alert("Aucun compte trouvé avec cet email.");
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f0f0f0">
            <Paper elevation={3} sx={{ padding: 4, width: 400, textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Réinitialisation du mot de passe
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Entrez votre email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        sx={{ mb: 3 }}
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        Envoyer le lien de réinitialisation
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default ForgotPassword;