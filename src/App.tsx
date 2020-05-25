import React from 'react';
import logo from './logo.svg';
import {Card} from './components/card/card.component';
import './App.css';
import {LoginPage} from "./pages/login/login";
import {BrowserRouter, Route, Switch, Redirect, useHistory, HashRouter} from 'react-router-dom';

export const App = (props: any) => {
    const history = useHistory();
  return <>
    <BrowserRouter >
            <Switch>
                <Route exact path={'./game'} component={Card}/>
                <Route exact path={'./login'} component={LoginPage}/>
            </Switch>
        </BrowserRouter>
          <button onClick={() =>  './login'}>Login</button>
      </>
}

