import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
                    <input type="number" min="0" max="10" placeholder="Understanding?" onChange={addUnderstanding}
                        required
                    />
                    <button type="submit">Next</button>
                </form>
            </Route>
            <Link to="/">Back</Link>
        </Router>
    )

}

export default Understanding;