import React, {Component} from 'react';
import {Router, Switch, Route} from "react-router-dom";
import Home from './components/Home.js';
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import history from './history';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/experience" exact component={Experience}/>
                    <Route path="/projects" exact component={Projects}/>
                    <Route path="/awards" exact component={Awards}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
