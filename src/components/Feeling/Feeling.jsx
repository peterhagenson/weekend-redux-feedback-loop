// import axios from 'axios';
import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// create onclicks that add to state variable, dispatch variable to reducer




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
                <form onSubmit={(event) => dispatchFeeling(event)}>
                    <h3>How are you feeling today?</h3>
                    <input
                        type="number" min="0" max="10"
                        placeholder="Feeling?"
                        onChange={addFeeling}
                        required
                    />
                    {/* <Link to="/understanding"> */}
                    <button type="submit" >Next</button>
                    {/* </Link> */}
                </form>

            </Route>
        </Router >
    )
}

export default Feeling;