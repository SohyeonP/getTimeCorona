import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Tap_menu from "./Tap_menu";
import Logo from './logo';
import './css/App.css';
import Home from "./Home";
import Info from "./Info";
import Mail from "./Mail";
import News from './News';



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Logo />
          {/* <div className="App-title">{message}</div> */}
        </header>
        <Tap_menu />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/info" component={Info} />
            <Route path="/contact" component={Mail} />
            <Route path="/news" component={News} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
