import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling.jsx'
import Understanding from '../Understanding/Understanding.jsx'
import Support from '../Support/Support.jsx'
import Review from '../Review/Review.jsx'
import Comments from '../Comments/Comments.jsx'
import { HashRouter as Router, Route, } from 'react-router-dom';


function App() {



  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route path="/">
          <Feeling />
        </Route>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>

        <Review />
      </div>
    </Router>
  );
}

export default App;
