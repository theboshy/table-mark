import React from 'react';
import './App.css';
import {LoginPage} from "./pages/login/login";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {CreateUserPage} from "./pages/createUser/createUser";
import {PageNotFound} from "./pages/pageNotFound/pageNotFound";
import {InputScore} from "./pages/inputScore/inputScore";
import {TableGame} from "./pages/tableGame/tableGame";
import {Keys} from "./keys";


function App() {
  return (
      <>
      <BrowserRouter >
            <Switch>
                <Route exact path={Keys.INPUT_SCORE} component={InputScore}/>
                <Route exact path={Keys.LOGIN} component={LoginPage}/>
                <Route exact path={Keys.CREATE_USER} component={CreateUserPage}/>
                <Route exact path={Keys.TABLE_GAME} component={TableGame}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;
