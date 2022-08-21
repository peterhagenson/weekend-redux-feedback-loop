import React from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';


function Support() {

    let [support, setSupport] = useState('')

    const dispatch = useDispatch();
    const history = useHistory();


    const addSupport = (event) => {
        setSupport({
            ...support,
            support: event.target.value
        })
    }

    const dispatchSupport = (event) => {
        event.preventDefault();
        console.log('test');
        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        });
        history.push('/comments')
    }
    return (

        <Router>
            <Route path="/support" exact>
                <form onSubmit={(event) => dispatchSupport(event)}>
                    <h3>How well are you being supported?</h3>
                    <TextField type="number" size="small" min="0" max="10"
                        placeholder="Support?" onChange={addSupport} required />
                    <Button variant="outlined" type="submit" >Next</Button>
                </form>
            </Route>
            <Link underline="hover" href="#/understanding">Back</Link>
        </Router>

    )
}

export default Support