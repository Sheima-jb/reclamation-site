import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const ReclamationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour envoyer la réclamation
        console.log('Réclamation soumise:', { name, email, subject, message });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <Typography variant="h4" gutterBottom>
                Soumettre une Réclamation
            </Typography>
            <TextField
                fullWidth
                label="Nom"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Objet"
                variant="outlined"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" type="submit">
                Soumettre
            </Button>
        </Box>
    );
};

export default ReclamationForm;