import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '../contexts/themeContext';
import InterceptorsFn from "./interceptor";
import { bodyOverflowHiddenFn } from "../components/common/global";
import NotFound from '../components/common/notFound.jsx';
import Landing from '../components/landing/landing.jsx';
import HomeContatiner from '../containers/home/homeContainer';
import LoginContatiner from '../containers/login/loginContainer';
import Ranking from '../components/ranking/ranking';
import RewardZoneContatiner from "../containers/rewardZone/rewardZoneContainer";
import GameDetailsContainer from "../containers/gameDetails/gameDetailsContainer";
import UserRewardsContatiner from "../containers/userRewards/userRewardsContainer";
import LeaderBoardContatiner from "../containers/leaderboard/leaderboardContainer";
import TransactionHistoryContainer from "../containers/transactionHistory/transactionHistoryContainer";
import NotificationContainer from "../containers/notification/notificationContainer";
import StatusContainer from "../containers/status/statusContainer";
import CustomerSavingsContatiner from '../containers/CustomerSavings/CustomerSavingsContainer';


export default function AppRoute() {
  InterceptorsFn();
  bodyOverflowHiddenFn();
  return (
    <ThemeProvider>
      <div id="app-route-container">
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/" component={HomeContatiner}/> */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={LoginContatiner} />
            <Route exact path="/ranking" component={Ranking} />
            <Route exact path="/rewardzone" component={RewardZoneContatiner} />
            <Route exact path="/gamedetail" component={GameDetailsContainer} />
            <Route exact path="/userrewards" component={UserRewardsContatiner} />
            <Route exact path="/leaderboard" component={LeaderBoardContatiner} />
            <Route exact path="/transactionhistory" component={TransactionHistoryContainer} />
            <Route exact path="/customersavings" component={CustomerSavingsContatiner} />
            <Route exact path="/notification" component={NotificationContainer} />
            <Route exact path="/status" component={StatusContainer} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
