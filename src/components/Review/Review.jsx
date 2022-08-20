import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import axios from 'axios';



function Review() {

    const history = useHistory();

    const understanding = useSelector(store => store.understanding)
    const feeling = useSelector(store => store.feeling)
    const support = useSelector(store => store.support)
    const comments = useSelector(store => store.comments)

    const toServer = () => {
        let feedbackToServer = {
            feeling: feeling.feeling,
            understanding: understanding.understanding,
            support: support.support,
            comments: comments.comments
        }
        console.log(feedbackToServer)
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackToServer
        }).then((response) => {
            console.log('response from server', response);
        }).catch((err) => {
            console.error(err)
        })
        history.push('/success');
    }


    return (
        <Router>
            <Route path="/review" exact>
                <h1>Review Your Feedback</h1>
                <h1>Feeling: {feeling.feeling}</h1>
                <h1>Understanding: {understanding.understanding}</h1>
                <h1>Support: {support.support}</h1>
                <h1>Comments: {comments.comments}</h1>
                <button onClick={toServer}>Submit</button>
            </Route>
        </Router >
    )
}

export default Review;