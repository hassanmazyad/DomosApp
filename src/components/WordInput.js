import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function WordInput({setNewWord, error}) {
    return (
        <Box
            alignItems="center"
            justifyContent="center"
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
                <TextField
                    error={error}
                    id="filled-error-helper-text"
                    label="new word"
                    helperText={error}
                    variant="filled"
                    onChange={(e) => setNewWord(e.target.value)}
                />
        </Box>
    );
}