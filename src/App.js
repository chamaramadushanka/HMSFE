import React from 'react';
import LoginForm from './Components/Loginform';
import Layout from './Components/Layout';
import Auth from './Components/Auth/Auth';
import NavBar from "./Components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Components/Profile";
import history from "./utils/history";

import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
} from "react-router-dom";

function App() {
      const { loading } = useAuth0();
      const { isAuthenticated} = useAuth0();

      if (loading) {
            return <div>Loading...</div>;
      }


      return (
            // <div className="App">
            //       {/* Don't forget to include the history module */}
            //       <Router history={history}>
            //             <header>
            //                   <NavBar />
            //             </header>
            //             <Switch>
            //                   <Route path="/" exact />
            //                   <PrivateRoute path="/profile" component={Profile} />
            //             </Switch>
            //       </Router>
            // </div>
            // <Router>
            //       <Route exact path="/Loginform" component={LoginForm}></Route>
            //       <Route  path="/" component={Layout}></Route>
            // </Router>

            <div className="loginpage">
            <Router>
            <Route exact path="/Loginform" component={LoginForm}></Route>
            </Router>
            {isAuthenticated && 
                  <Router>
                  <Route path="/" component={Layout}></Route>
                  </Router>
                  }
            </div>
      );
}
export default App;
