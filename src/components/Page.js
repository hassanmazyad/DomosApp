import * as React from 'react';
import Box from '@mui/material/Box';
import WordInput from "./WordInput";
import WordAddButton from "./WordAddButton";
import WordsList from "./WordsList";
import {useEffect, useState} from "react";
import {Backend} from "../utils/Backend";
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';

export default function Page() {
    const [words, setWords] = useState([]);
    const [newWord, setNewWord] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        Backend.list().then((response) => {
            setWords(response);
            setLoading(false);
        });
    },[])

    useEffect(() => {
        setTimeout(() => {
            setSuccess(false);
        }, 2000);
    },[success])

    return (
        <Box
            mt={10}
            justifyContent="center"
            alignItems="center"
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box mt={5}>
                <WordInput setNewWord={setNewWord} error={error}/>
            </Box>
            <Box mt={5}>
                <WordAddButton newWord={newWord} setWords={setWords} setError={setError} setSuccess={setSuccess} setLoading={setLoading}/>
            </Box>
            {loading && <Box mt={5} sx={{width: '30%'}}>
                <LinearProgress/>
            </Box>}
            {words && <Box mt={5}>
                <WordsList words={words}/>
            </Box>}
            {success && <Box mt={5}>
                <Alert severity="success">the new word has been added</Alert>
            </Box>}

        </Box>
    );
}