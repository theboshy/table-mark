import React from 'react';
import logo from './logo.svg';
import {Card} from './components/card/card.component';
import './App.css';
import {LoginPage} from "./pages/login/login";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {CreateUserPage} from "./pages/createUser/createUser";
import {PageNotFound} from "./pages/pageNotFound/pageNotFound";


function App() {
  return (
      <>
      <BrowserRouter >
            <Switch>
                <Route exact path="/game" component={Card}/>
                <Route exact path='/' component={LoginPage}/>
                <Route exact path='/createUser' component={CreateUserPage}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;
