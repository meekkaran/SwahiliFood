import React from 'react';
import ReactDOM  from "react-dom"
import Navbar from './components/Navbar';
import "./App.css"
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Showcase from './components/Showcase';

import Home from './pages/Home';
import About from './pages/About';


const App = () =>{
    return(
        <Router>
        <div> 
            <Navbar />
            <div className="main">
                <Route exact path="/" component={Home}/>
                <Route exact path="/" component={About}/>
                <Showcase/>
            </div>
        </div>
        </Router>
    )
};

ReactDOM.render(<App/>,document.getElementById("root")); 