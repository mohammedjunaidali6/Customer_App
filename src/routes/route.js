import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InterceptorsFn from "./interceptor";
import NotFound from '../components/common/notFound.jsx';
import Landing from '../components/landing/landing.jsx';
import HomeContatiner from '../containers/home/homeContainer';
import LoginContatiner from '../containers/login/loginContainer';

export default function AppRoute() {
  InterceptorsFn();
  return (
    <div id="app-route-container">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={HomeContatiner}/> */}
          <Route exact path="/" component={Landing}/>
          <Route exact path="/login" component={LoginContatiner}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
