import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Backend} from "../utils/Backend";

export default function WordAddButton({newWord, setWords, setError, setSuccess, setLoading}) {

    const addNewWord = (newWord) => {
        setLoading(true);
        Backend.add(newWord)
            .then(() => {
                setError(null);
                setWords( prevWords => [...prevWords, newWord]);
                setLoading(false);
                setSuccess(true);
            })
            .catch((e) => {
                setError(e.message);
                setLoading(false);
            });
    }

    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => addNewWord(newWord)}>Add the word</Button>
        </Stack>
    );
}