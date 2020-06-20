import React from 'react';
import logo from './logo.svg';
import {Card} from './components/card/card.component';
import './App.css';
import {LoginPage} from "./pages/login/login";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {CreateUserPage} from "./pages/createUser/createUser";
import {PageNotFound} from "./pages/pageNotFound/pageNotFound";
import {TableGame} from "./pages/tableGame/tableGame";
import {LevelSelectorPage} from "./pages/level-selector/levelSelector";


function App() {
  return (
      <>
      <BrowserRouter >
            <Switch>
                <Route exact path="/game" component={TableGame}/>
                <Route exact path='/' component={LoginPage}/>
                <Route exact path='/createUser' component={CreateUserPage}/>
                <Route exact path='/lvlSelector' component={LevelSelectorPage}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;
