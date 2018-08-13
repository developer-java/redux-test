import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import store from './store';
import {ConnectedRouter} from 'react-router-redux';
import AppRoute from './router';

const history = createHistory();

ReactDOM.render(
   <div>
       <Provider store={store}>
           <ConnectedRouter history={history}>
               <AppRoute />
           </ConnectedRouter>
       </Provider>
   </div>,
    document.getElementById('root')
);
registerServiceWorker();