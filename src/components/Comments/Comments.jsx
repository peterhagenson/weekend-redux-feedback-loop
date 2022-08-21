import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';



function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [comments, setComments] = useState('');

    const addComments = (event) => {
        setComments({
            comments: event.target.value
        })
    }

    const dispatchComments = (event) => {
        event.preventDefault();
        console.log(comments);
        dispatch({
            type: "ADD_COMMENTS",

            payload: comments
        })
        history.push('/review');
    }



    return (
        <Router>
            <Route path="/comments" exact>
                <form onSubmit={(event) => dispatchComments(event)}>
                    <h3>Any comments you want to leave?</h3>
                    <TextField type="text" size="small" placeholder="Comments?" onChange={addComments} />
                    <Button variant="outlined" type="submit" >Next</Button>
                </form>
            </Route>
            <Link underline="hover" href="#/support">Back</Link>
        </Router>
    )
}

export default Comments;

