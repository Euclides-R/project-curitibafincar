import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, SignUp, Simulation, ResetPass } from "./pages";
import { Financings, ListFin, NewFin, ProposalsReceived } from './pages/admin';
import { DefaultLayout } from "./layouts";

import Private from './routes/private/Private';

import { AuthProvider } from './hooks/auth';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <DefaultLayout>
          <Route exact path='/' component={Home} />
          <Route exact path='/resetPass' component={ResetPass} />
          <Route exact path='/signUp' component={SignUp} />
          <Private exact path='/simulation' component={Simulation} />
          <Private exact path='/newfin' component={NewFin} />
          <Private exact path='/listfin' component={ListFin} />
          <Private exact path='/proposalsreceived' component={ProposalsReceived} />    
          <Private exact path='/financings' component={Financings} />    
        </DefaultLayout>
      </Router>
    </AuthProvider>
  );
};
