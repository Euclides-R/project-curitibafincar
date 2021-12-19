import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, SignUp, Simulation, ResetPass } from "./pages/public";
import { Companies, NewCom, ProposalsReceived, AdminHome } from './pages/admin';
import { DefaultLayout } from "./layouts";

import Private from './routes/private/Private';

import { AuthProvider } from './hooks/auth';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <DefaultLayout>
          <Route exact path='/' component={Home} />
          <Route exact path='/adminhome' component={AdminHome} />
          <Route exact path='/companies' component={Companies} />
          <Route exact path='/newcom' component={NewCom} />
          <Route exact path='/reset-pass' component={ResetPass} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/simulation' component={Simulation} />
          <Route exact path='/proposals-received' component={ProposalsReceived} />
        </DefaultLayout>
      </Router>
    </AuthProvider>
  );
};
