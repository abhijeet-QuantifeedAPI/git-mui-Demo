import React from 'react';
import './App.css';
import Login from '../Components/Login';
import Home from '../Components/Home';
import {makeStyles, CssBaseline} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from '../Components/ProtectedRoute';


function App() {
 
  return (
    <> 
      <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/Home">
          <Home />
        </ProtectedRoute>
        <Route exact path="/">
          <Redirect exact from="/" to="Home" />
        </Route>
        <Route path="*">
          <Redirect from="/" to="Home" />
        </Route>
      </Switch>
    </Router>
   <CssBaseline />  
   </>
  );
}

export default App;
 