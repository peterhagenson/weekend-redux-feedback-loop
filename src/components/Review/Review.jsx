import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
                <Card sx={{ width: 500, mb: 4 }} className="card">
                    <CardContent>
                        <h1>Review Your Feedback</h1>
                        <h2>Feeling: {surveyResponse.feeling.feeling}</h2>
                        <h2>Understanding: {surveyResponse.understanding.understanding}</h2>
                        <h2>Support: {surveyResponse.support.support}</h2>
                        <h2>Comments: {surveyResponse.comments.comments}</h2>
                        <Button onClick={toServer} variant="outlined" type="submit" >Next</Button>
                    </CardContent>
                </Card>
            </Route>

            <Link underline="hover" href="#/comments">Back</Link>

        </Router >

    )
}

export default Review;