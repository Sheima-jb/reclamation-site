import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, Link } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rib, setRib] = useState('');
    const [phone, setPhone] = useState('');
    const handleLogout = () => {
        localStorage.removeItem("userToken"); // Remove the user token or session
        navigate("/AuthForm"); // Redirect to the AuthForm page
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isSignUp) {
            // Création d'un compte
            const newUser = { firstName, lastName, email, rib, phone, password };
            localStorage.setItem(email, JSON.stringify(newUser)); // Sauvegarde par email
            alert('Compte créé avec succès ! Connectez-vous.');
            setIsSignUp(false);
        } else {
            // Connexion
            const savedUser = localStorage.getItem(email);
            if (savedUser) {
                const userData = JSON.parse(savedUser);
                if (userData.password === password) {
                    localStorage.setItem('loggedInUser', JSON.stringify(userData)); // Stocke l'utilisateur connecté
                    navigate('/UserProfile'); // Redirige vers UserProfile
                } else {
                    alert('Mot de passe incorrect !');
                }
            } else {
                alert('Aucun compte trouvé avec cet email.');
            }
        }
    };
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f0f0f0">
            <Paper elevation={3} sx={{ padding: 4, width: 350, textAlign: 'center' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {isSignUp ? 'Inscription' : 'Connexion'}
                </Typography>

                <form onSubmit={handleSubmit}>
                    {isSignUp && (
                        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                            <TextField fullWidth variant="outlined" placeholder="Prénom" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                            <TextField fullWidth variant="outlined" placeholder="Nom" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        </Box>
                    )}

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <EmailIcon />
                        <TextField fullWidth variant="outlined" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <LockIcon />
                        <TextField fullWidth variant="outlined" type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </Box>

                    {isSignUp && (
                        <>
                            <TextField fullWidth variant="outlined" placeholder="RIB" value={rib} onChange={(e) => setRib(e.target.value)} required sx={{ mb: 2 }} />
                            <TextField fullWidth variant="outlined" placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} required sx={{ mb: 2 }} />
                        </>
                    )}

                    <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }} type="submit">
                        {isSignUp ? 'Créer un compte' : 'Se connecter'}
                    </Button>

                    <Typography variant="body2" sx={{ mt: 2 }}>
                        {isSignUp ? "Déjà un compte ?" : "Pas de compte ?"}
                        <Link onClick={() => setIsSignUp(!isSignUp)} sx={{ cursor: 'pointer', ml: 1 }}>
                            {isSignUp ? 'Se connecter !' : 'Créer un compte !'}
                        </Link>
                    </Typography>
                </form>
            </Paper>
        </Box>
    );
};

export default AuthForm;