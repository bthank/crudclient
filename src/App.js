import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {Route,Switch} from "react-router-dom";
import GetAll from './GetAll';
import Create from './Create';
import Get from './Get';
import Update from './Update';
import Delete from './Delete';

class App extends Component {
  return (
    <div className="App">

    /* Use Switch to route all the url patterns our app will accept to React components */
      <Switch>
        <Route path="/" component={GetAll}/>
        <Route path="/Get" component={Get}/>
        <Route path="/Create" component={Create}/>
        <Route path="/Update" component={Update}/>
        <Route path="/Delete" component={Delete}/>
      </Switch>

    </div>
  );
}

export default App;
