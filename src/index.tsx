import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from './layout/AdminLayout';
// import Auth from './layouts/Auth';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" component={AdminLayout} />
      {/* <Route path="/auth" component={Auth} /> */}
      <Redirect from="*" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
