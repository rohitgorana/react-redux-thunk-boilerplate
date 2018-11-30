import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import EnsureAuth from './components/EnsureAuth'


class App extends Component{

  render(){
    const { classes } = this.props;
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <EnsureAuth>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </EnsureAuth>
      </div>
    );
  }
}



export default App;
