import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'react-responsive-modal/styles.css';
import './assets/css/mvp.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRoute from './routes/route';
import './i18next'
import RouteContatiner from './containers/routeContainer';


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(<div>loading</div>)}>
    <Provider store={store}>
      <RouteContatiner />
    </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
