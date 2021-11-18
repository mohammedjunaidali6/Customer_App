import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '../contexts/themeContext';
import InterceptorsFn from "./interceptor";
import { bodyOverflowHiddenFn } from "../components/common/global";
import NotFound from '../components/common/notFound.jsx';
import LoginContatiner from '../containers/login/loginContainer';
import RewardZoneContatiner from "../containers/rewardZone/rewardZoneContainer";
import GameDetailsContainer from "../containers/gameDetails/gameDetailsContainer";
import UserRewardsContatiner from "../containers/userRewards/userRewardsContainer";
import LeaderBoardContatiner from "../containers/leaderboard/leaderboardContainer";
import TransactionHistoryContainer from "../containers/transactionHistory/transactionHistoryContainer";
import NotificationContainer from "../containers/notification/notificationContainer";
import StatusContainer from "../containers/status/statusContainer";
import CustomerSavingsContatiner from '../containers/CustomerSavings/CustomerSavingsContainer';
import LandingContainer from '../containers/landingContainer';
// import LoadingContainer from '../containers/loadingContainer';
import Ranking from '../components/ranking/ranking';
import Loader from '../components/common/Spinner/spinner';
import Exception from '../components/Exception';
import TopCustomerSavingsContatiner from '../containers/CustomerSavings/TopCustomerSavingsContainer';
import TournamentsContainer from '../components/Tournaments/tournamentContainer';

export default function AppRoute(props) {
  // console.log('***',props);
  
  InterceptorsFn();
  bodyOverflowHiddenFn();
  return (
    <ThemeProvider>
      <div id="app-route-container">
        <BrowserRouter>
          <Loader show={props.showLoader} />
          <Switch>
            {/* <Route exact path="/" component={HomeContatiner}/> */}
            {/* <Route exact path="/auth" component={LoadingContainer} /> */}
            <Route exact path="/" component={LandingContainer} />
            <Route exact path="/login" component={LoginContatiner} />
            <Route exact path="/ranking" component={Ranking} />
            <Route exact path="/rewardzone" component={RewardZoneContatiner} />
            <Route exact path="/gamedetail" component={GameDetailsContainer} />
            <Route exact path="/userrewards" component={UserRewardsContatiner} />
            <Route exact path="/tournaments" component={TournamentsContainer} />
            <Route exact path="/leaderboard" component={LeaderBoardContatiner} />
            <Route exact path="/transactionhistory" component={TransactionHistoryContainer} />
            <Route exact path="/topcustomersavings" component={TopCustomerSavingsContatiner} />
            <Route exact path="/customersavings" component={CustomerSavingsContatiner} />
            <Route exact path="/notification" component={NotificationContainer} />
            <Route exact path="/status" component={StatusContainer} />
            <Route path="*" component={NotFound} />
            <Route path="error" component={Exception} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
