import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firstReducer from '../reducers/first/firstReducer';
import HomeReducer from '../reducers/home/homeReducer';
import LoginReducer from '../reducers/login/loginReducer';
import RewardZoneReducer from "../reducers/rewardZone/rewardZoneReducer";
import GameDetailsReducer from "../reducers/gameDetails/gameDetailsReducer";
import UserRewardsReducer from "../reducers/userRewards/userRewardsReducer";
import LeaderBoardReducer from "../reducers/leaderboard/leaderboardReducer";
import TransactionHistoryReducer from "../reducers/transactionHistory/transactionHistoryReducer";

function saveToSessionStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('ssoState', serializedState);
  } catch(e) {
    console.log(e);
  }
}

function loadFromSessionStorage(state) {
  try {
    const serializedState = sessionStorage.getItem('ssoState');
    if(serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch(e) {
    console.log(e);
    return undefined;
  }
}

const reducer = combineReducers({
  First: firstReducer,
  HomeReducer: HomeReducer,
  LoginReducer: LoginReducer,
  RewardZoneReducer: RewardZoneReducer,
  GameDetailsReducer: GameDetailsReducer,
  UserRewardsReducer: UserRewardsReducer,
  LeaderBoardReducer: LeaderBoardReducer,
  TransactionHistoryReducer: TransactionHistoryReducer
});

// To persist your Store use sessionStorage after hard reoad
// const persistedStore = loadFromSessionStorage();
// const store = createStore(reducer, persistedStore, compose(applyMiddleware(thunk)));
// store.subscribe(() => saveToSessionStorage(store.getState()));

// Store without persist after hard reoad
const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
