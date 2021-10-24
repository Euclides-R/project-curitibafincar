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
          <Route exact path='/simulation' component={Simulation} />
          <Route exact path='/newfin' component={NewFin} />
          <Route exact path='/listfin' component={ListFin} />
          <Route exact path='/proposalsreceived' component={ProposalsReceived} />    
          <Route exact path='/financings' component={Financings} />    
        </DefaultLayout>
      </Router>
    </AuthProvider>
  );
};
