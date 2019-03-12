import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import Play from "./components/play";
import HowToPlay from "./components/howToPlay";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/how-to-play" component={HowToPlay} />
          <Route path="/play" component={Play} />
          <Route path="/home" component={Home} />;
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

export default App;
