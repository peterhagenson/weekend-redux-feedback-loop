import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import axios from 'axios';



function Review() {

    const history = useHistory();

    const surveyResponse = useSelector(store => store.surveyResponse)

    const toServer = () => {
        console.log(surveyResponse)
        let feedbackToServer = {
            feeling: surveyResponse.feeling.feeling,
            understanding: surveyResponse.understanding.understanding,
            support: surveyResponse.support.support,
            comments: surveyResponse.comments.comments
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
                <h1>Feeling: {surveyResponse.feeling.feeling}</h1>
                <h1>Understanding: {surveyResponse.understanding.understanding}</h1>
                <h1>Support: {surveyResponse.support.support}</h1>
                <h1>Comments: {surveyResponse.comments.comments}</h1>
                <Button onClick={toServer} variant="outlined" type="submit" >Next</Button>
            </Route>
            <div>
                <Link underline="hover" href="#/comments">Back</Link>
            </div>
        </Router >

    )
}

export default Review;