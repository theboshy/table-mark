import React from 'react';
import logo from './logo.svg';
import {Card} from './components/card/card.component';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {LoginPage} from "./pages/login/login";

function App() {
  return (
      <>
      <Router>
        <Route path="/game" exact component={Card}/>
      </Router>
      <LoginPage ></LoginPage>
      </>
  );
}

export default App;
