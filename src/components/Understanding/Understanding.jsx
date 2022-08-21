import React from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';

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
                <form onSubmit={(event) => dispatchUnderstanding(event)}>
                    <h3>How well are you understanding the content?</h3>
                    <TextField type="number" size="small" min="0" max="10" placeholder="Understanding?" onChange={addUnderstanding}
                        required
                    />
                    <Button variant="outlined" type="submit" >Next</Button>
                </form>
            </Route>
            <Link underline="hover" href="#/">Back</Link>
        </Router>
    )

}

export default Understanding;