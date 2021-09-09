import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, SignUp, ResetPass } from "./pages";
import { DefaultLayout } from "./layouts";

export default function App() {
  return (
    <Router>
      <DefaultLayout>
        <Route exact path='/' component={Home} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path='/ResetPass' component={ResetPass} />   
      </DefaultLayout>
    </Router>
  );
};
