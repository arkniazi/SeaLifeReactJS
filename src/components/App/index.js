import React, {Component} from 'react';
import '../../App.css'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Home from '../Screens/Home';
import Landing from '../Screens/Landing';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import About from '../Screens/About';
import Cause from '../Screens/Cause';
import Contact from '../Screens/Contact';


const App = ()=>(   
    <div className="App">
    <Router >
        <Route exact path={ROUTES.LANDING} component={Landing}/>
        <Route path={ROUTES.HOME} component={Home}/>
        <Route path={ROUTES.ABOUT} component={About}/>
        <Route path={ROUTES.CAUSE} component={Cause}/>
        <Route path={ROUTES.CONTACT} component={Contact}/>        
    </Router>
    </div>
)

export default App;