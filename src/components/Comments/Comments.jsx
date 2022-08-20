import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



function Comments() {

    const dispatch = useDispatch();
    ////const useHistory = useHistory();

    const [comments, setComments] = useState(' ');

    const addComments = (event) => {
        setComments({

            comments: event.target.value
        })
    }

    const dispatchComments = () => {
        console.log(comments);
        dispatch({
            type: "ADD_COMMENTS",
            payload: comments
        })
    }



    return (
        <Router>
            <Route path="/comments" exact>
                <form onSubmit={(event) => dispatchComments(event)}>
                    <h3>Any comments you want to leave?</h3>
                    <input type="text" placeholder="Comments?" onChange={addComments} />
                    <button type="submit">Next</button>
                </form>
            </Route>
        </Router>
    )
}

export default Comments;

