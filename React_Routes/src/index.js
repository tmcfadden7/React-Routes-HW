import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

// your code goes he
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Home extends Component{
  render(){
    return(
      // your code goes here
      <Router>
   <div>
     <ul>
       <li>
         <Link to="/">Home</Link>
       </li>
       <li>
         <Link to="/Happy">Happy</Link>
       </li>
       <li>
         <Link to="/Sleepy">Sleepy</Link>
       </li>
       <li>
         <Link to="/Guilty">Guilty</Link>
       </li>
     </ul>

     <hr />

     <Route exact path="/" component={Home} />
     <Route path="/Happy" component={Happy} />
     <Route path="/Sleepy" component={Sleepy} />
     <Route path="/Guilty" component={Guilty} />
   </div>
 </Router>
);
      const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    </div>
    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
