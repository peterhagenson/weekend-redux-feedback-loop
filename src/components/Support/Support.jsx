import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Support() {

    let [support, setSupport] = useState({ support: " " })


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
        history.push('/support')
    }
    return (

        <Router>
            <Route path="/support" exact>
                <form onSubmit={(event) => dispatchSupport(event)}>
                    <h3>How well are you being supported?</h3>
                    <input type="text"
                        placeholder="Support?" onChange={addSupport} />
                    <button type="submit">Next</button>
                </form>
            </Route>
        </Router>

    )
}

export default Support