import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';

// import Box from '@mui/material/Box';



// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//     </Box>
// );

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();

    let [understanding, setUnderstanding] = useState('')


    const addUnderstanding = (event) => {
        setUnderstanding({
            understanding: event.target.value
        })
    }

    const dispatchUnderstanding = (event) => {
        event.preventDefault();
        console.log('test');
        dispatch({
            type: 'ADD_UNDERSTANDING',

            payload: understanding
        });
        history.push('/support')
    }

    return (

        <Router>
            <Route path='/understanding' exact>
                <Card sx={{ width: 500, mb: 4 }} className="card">
                    <CardContent>
                        <form onSubmit={(event) => dispatchUnderstanding(event)}>
                            <h3>How well are you understanding the content?</h3>
                            {/* <TextField type="number" size="small" variant="standard" min="0" max="10" label="Understanding?" onChange={addUnderstanding}
                                required /> */}
                            <Rating
                                name="simple-controlled"
                                max={5}
                                // value={feeling}
                                onChange={addUnderstanding}
                            />
                            <Button variant="outlined" sx={{ m: 2 }} type="submit" >Next</Button>
                        </form>
                    </CardContent>
                </Card>
                <Link underline="hover" href="#/">Back</Link>
            </Route>
        </Router>


    )

}

export default Understanding;