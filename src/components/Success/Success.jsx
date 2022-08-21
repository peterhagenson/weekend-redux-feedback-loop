import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Success() {

    const history = useHistory();
    const dispatch = useDispatch();

    const resetReducers = () => {
        dispatch({
            type: 'CLEAR'
        })
        history.push('/')
    }


    return (

        <Router>
            <Route path="/success" exact>
                <h1>Submission Successful!</h1>
                <Button variant="outlined" onClick={resetReducers}>Leave Another Review</Button>


            </Route>
        </Router>
    )
}

export default Success;