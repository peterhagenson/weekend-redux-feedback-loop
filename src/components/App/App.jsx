import React from 'react';
//import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling.jsx'
import Understanding from '../Understanding/Understanding.jsx'
import Support from '../Support/Support.jsx'
import Review from '../Review/Review.jsx'
import Comments from '../Comments/Comments.jsx'
import Success from '../Success/Success.jsx'
import { HashRouter as Router, Route, } from 'react-router-dom';
import Link from '@mui/material/Link';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/roboto";
import Typography from "@mui/material"





function App() {



  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Link underline="hover" href="#/" className='navLink'>Feeling</Link>
          <Link underline="hover" href="#/understanding" className='navLink'>Understanding</Link>
          <Link underline="hover" href="#/support" className='navLink'>Support</Link>
          <Link underline="hover" href="#/comments" className='navLink'>Comments</Link>
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
        <Route path="/review">
          <Review />
        </Route>
        <Route>
          <Success path="/success" />
        </Route>

      </div>
    </Router>
  );
}

export default App;
