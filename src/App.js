import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SingleRoom from './ReUsable/SingleRoom';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Portfolio' component={Home} />
        <Route exact path="/Portfolio/:slug" component={SingleRoom}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
