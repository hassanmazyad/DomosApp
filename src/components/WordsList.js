import React, {useEffect, useState} from 'react';
import {Backend} from "../utils/Backend";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemButton from '@mui/material/ListItemButton';

function WordsList({words}) {

    return (
        <Paper style={{maxHeight: 300, overflow: 'auto'}}>
            <List>
                {words?.map((word, index) =>
                    <ListItem key={index}>
                        <ListItemButton>
                            {word}
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Paper>
    );
}

export default WordsList;
