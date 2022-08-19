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

    let [feeling, setFeeling] = useState({ feeling: " " })

    const addFeeling = (event) => {
        console.log(feeling)
        setFeeling({
            ...feeling,
            feeling: event.target.value
        })

    }



    const addSupport = (event) => {
        setResponses({
            ...responses,
            support: event.target.value
        })
    }

    const addComments = (event) => {
        setResponses({
            ...responses,
            comments: event.target.value
        })
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
            <>

                <Route path='/' exact>
                    <form onSubmit={(event) => dispatchFeeling(event)}>
                        <h3>How are you feeling today?</h3>
                        <input
                            type="text"
                            placeholder="Feeling?"
                            onChange={addFeeling}
                        />
                        {/* <Link to="/understanding"> */}
                        <button type="submit" >Next</button>
                        {/* </Link> */}
                    </form>

                </Route>




                <Route path="/comments" exact>
                    <h3>Any comments you want to leave?</h3>
                    <input type="text" placeholder="Comments?" onChange={addComments} />
                    <Link to="/review">
                        <button type="submit">Next</button>
                    </Link>
                </Route>

            </>
        </Router >
    )
}

export default Feeling;