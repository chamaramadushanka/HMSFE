import React from 'react';
import LoginForm from './Components/Loginform';
import Layout from './Components/Layout';
import Auth from './Components/Auth/Auth';
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
} from "react-router-dom";

function App() {
      return (
            <Router>
                  <Route exact path="/Loginform" component={LoginForm}></Route>
                  <Route  path="/" component={Layout}></Route>
            </Router>
      );
}
export default App;
