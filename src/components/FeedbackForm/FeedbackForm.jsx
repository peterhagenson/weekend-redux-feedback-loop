// import axios from 'axios';
import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function FeedbackForm() {
    return (
        <Router>
            <>
                <form>
                    <Route path="/feeling" exact>
                        <h3>How are you feeling today?</h3>
                        <input type="text" />
                        <Link to="/understanding">
                            <button type="submit" >Next</button>
                        </Link>
                    </Route>

                    <Route path="/understanding" exact>
                        <h3>How well are you understanding the content?</h3>
                        <input type="text" />
                        <Link to="/support">
                            <button type="submit">Next</button>
                        </Link>
                    </Route>

                    <Route path="/support" exact>
                        <h3>How well are you being supported?</h3>
                        <input type="text" />
                        <Link to="/comments">
                            <button type="submit">Next</button>
                        </Link>
                    </Route>
                    <Route path="/comments" exact>
                        <h3>Any comments you want to leave?</h3>
                        <input type="text" />
                        <Link to="/review">
                            <button type="submit">Next</button>
                        </Link>
                    </Route>
                </form>
            </>
        </Router>
    )
}

export default FeedbackForm;