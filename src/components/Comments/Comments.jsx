import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



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
                <Card sx={{ width: 500, mb: 4 }} className="card">
                    <CardContent>
                        <form onSubmit={(event) => dispatchComments(event)}>
                            <h3>Any comments you want to leave?</h3>
                            <TextField multiline label="Comments" sx={{ width: 300 }} variant="standard" type="text" size="small" onChange={addComments} />
                            <Button variant="outlined" sx={{ m: 2 }} type="submit" >Next</Button>
                        </form>
                    </CardContent>
                </Card>
                <Link underline="hover" href="#/support">Back</Link>
            </Route>

        </Router>
    )
}

export default Comments;

