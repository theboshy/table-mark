import React from 'react';
import logo from './logo.svg';
import {Card} from './components/card/card.component';
import './App.css';
import {LoginPage} from "./pages/login/login";
import {BrowserRouter, Route, Switch, Redirect, useHistory} from 'react-router-dom';


export const App = (props: any) => {
    const history = useHistory();
  return <>
      <BrowserRouter >
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/game'} component={Card}/>
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={LoginPage}/>
            </Switch>
        </BrowserRouter>
          <button onClick={() => window.location.href=process.env.PUBLIC_URL + '/login'}>Login</button>
      </>
}

