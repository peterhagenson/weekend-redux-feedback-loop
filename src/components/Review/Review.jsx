import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



function Review() {
    return (
        <Router>
            <Route path="/review" exact>
                <h1>Review</h1>
            </Route>
        </Router>
    )
}

export default Review;