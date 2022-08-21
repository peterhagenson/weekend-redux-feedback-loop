import React from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';
import { useEffect } from 'react'
import axios from 'axios';

function Admin() {

    useEffect(() => {
        getFeedback()
    }, [])

    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/admin'
        }).then((response) => {
            console.log(response);
            console.log(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <Router>
            <Route>
                <h1> test</h1>
            </Route>
        </Router>

    )
}

export default Admin;