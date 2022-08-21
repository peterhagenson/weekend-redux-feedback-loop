// import axios from 'axios';
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#388e3c',
            spacing: 4,

        },
        secondary: {
            main: '#ffc107',
        },
    },
});

// create onclicks that add to state variable, dispatch variable to reducer


// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
// );

function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();

    let [feeling, setFeeling] = useState('')

    const addFeeling = (event) => {
        console.log(feeling)
        if (event.target.value) {
            setFeeling({
                feeling: event.target.value
            })
        } else {
            alert('error'
            )
        }
    }

    const dispatchFeeling = (event) => {
        event.preventDefault();
        console.log('test');
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        });
        history.push('/understanding')
    }

    return (

        <Router>

            <Route path='/' exact>
                <ThemeProvider theme={theme}>
                    <Card sx={{ width: 500 }} variant="outlined" className="card">
                        <CardContent >
                            <form onSubmit={(event) => dispatchFeeling(event)}>
                                <h3>How are you feeling today?</h3>
                                {/* <TextField
                                size="small"
                                type="number" min="0" max="10"
                                label="Feeling?"
                                variant="standard"
                                onChange={addFeeling}
                                required
                            /> */}
                                <Rating
                                    name="simple-controlled"
                                    max={5}
                                    // value={feeling}
                                    onChange={addFeeling}
                                />


                                <Button sx={{ m: 2 }} variant="outlined" type="submit" >Next</Button>


                            </form>
                        </CardContent>
                    </Card >
                </ThemeProvider>
            </Route>

        </Router >

    )
}

export default Feeling;