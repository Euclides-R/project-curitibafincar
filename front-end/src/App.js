import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, SignUp, Simulation, ResetPass } from "./pages";
import { Companies, NewCom, ProposalsReceived, AllProposals, AdminHome } from './pages/admin';
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
          <Route exact path='/allproposals' component={AllProposals} />  
          <Route exact path='/Companies' component={Companies} />
          <Route exact path='/newcom' component={NewCom} />
          <Route exact path='/resetPass' component={ResetPass} />
          <Route exact path='/signUp' component={SignUp} />
          <Route exact path='/simulation' component={Simulation} />
          <Route exact path='/proposalsreceived' component={ProposalsReceived} />
        </DefaultLayout>
      </Router>
    </AuthProvider>
  );
};
