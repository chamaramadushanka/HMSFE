import React from 'react';
import LoginForm from './Components/Loginform';
import Layout from './Components/Layout';
import Parent from './Tests/Parent';
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
                  <Route path="/" component={Layout}></Route>
                  <Route path="/Parent" component={Parent}></Route>
            </Router>
      );
}
export default App;
