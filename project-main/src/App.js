import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, SignUp, ResetPass, Simulation } from "./pages";
import { NewFin, ListFin } from './pages/admin';
import { DefaultLayout } from "./layouts";

export default function App() {
  return (
    <Router>
      <DefaultLayout>
        <Route exact path='/' component={Home} />
        <Route exact path='/resetPass' component={ResetPass} />
        <Route exact path='/signUp' component={SignUp} />
        <Route exact path='/simulation' component={Simulation} />        
        <Route exact path='/newfin' component={NewFin} />        
        <Route exact path='/listfin' component={ListFin} />        
      </DefaultLayout>
    </Router>
  );
};
