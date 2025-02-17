import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Paper, List, ListItem, ListItemText, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [reclamations, setReclamations] = useState([]);
    const [newReclamation, setNewReclamation] = useState('');

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (!loggedUser) {
            navigate('/auth');
        } else {
            setUser(loggedUser);
            setReclamations(JSON.parse(localStorage.getItem(`reclamations_${loggedUser.email}`)) || []);
        }
    }, [navigate]);

    const handleAddReclamation = () => {
        if (newReclamation.trim() !== '') {
            const updatedReclamations = [...reclamations, { text: newReclamation, status: 'En cours' }];
            setReclamations(updatedReclamations);
            localStorage.setItem(`reclamations_${user.email}`, JSON.stringify(updatedReclamations));
            setNewReclamation('');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/auth');
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f8f9fa">
            <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
                {user ? (
                    <>
                        <Typography variant="h5" gutterBottom>Bienvenue, {user.firstName} {user.lastName} !</Typography>
                        <Typography variant="body1">Email : {user.email}</Typography>
                        <Typography variant="body1">RIB : {user.rib}</Typography>
                        <Typography variant="body1">Téléphone : {user.phone}</Typography>

                        <Typography variant="h6" sx={{ mt: 2 }}>Vos réclamations :</Typography>
                        <List>
                            {reclamations.map((rec, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={rec.text} secondary={`Statut: ${rec.status}`} />
                                </ListItem>
                            ))}
                        </List>

                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Nouvelle réclamation"
                            value={newReclamation}
                            onChange={(e) => setNewReclamation(e.target.value)}
                            sx={{ mt: 2 }}
                        />
                        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleAddReclamation}>
                            Ajouter une réclamation
                        </Button>

                        <Button variant="outlined" color="error" fullWidth sx={{ mt: 2 }} onClick={handleLogout}>
                            Se déconnecter
                        </Button>
                    </>
                ) : null}
            </Paper>
        </Box>
    );
};

export default UserProfile;
