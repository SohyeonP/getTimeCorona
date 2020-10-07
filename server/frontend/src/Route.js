import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import Home from "./App";
import Info from "./Info";
import Mail from "./Mail";


const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/info" component={Info} />
      <Route path="/contact" component={Mail} />
    </div>
  )
}

export default Routes;