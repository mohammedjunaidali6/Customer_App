import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InterceptorsFn from "./interceptor";
import NotFound from '../components/common/notFound.jsx';
import Landing from '../components/landing/landing.jsx';
import HomeContatiner from '../containers/home/homeContainer';
import LoginContatiner from '../containers/login/loginContainer';
import Ranking from '../components/ranking/ranking';
import RewardZoneContatiner from "../containers/rewardZone/rewardZoneContainer";
import GameDetailsContainer from "../containers/gameDetails/gameDetailsContainer";
import UserRewardsContatiner from "../containers/userRewards/userRewardsContainer";

export default function AppRoute() {
  InterceptorsFn();
  return (
    <div id="app-route-container">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={HomeContatiner}/> */}
          <Route exact path="/" component={Landing}/>
          <Route exact path="/login" component={LoginContatiner}/>
          <Route exact path="/ranking" component={Ranking}/>
          <Route exact path="/rewardzone" component={RewardZoneContatiner}/>
          <Route exact path="/gamedetail" component={GameDetailsContainer}/>
          <Route exact path="/userrewards" component={UserRewardsContatiner}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
