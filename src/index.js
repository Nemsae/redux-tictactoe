import React from 'react';
import { render } from 'react-dom';
import { Provider }  from 'react-redux';
import Layout from './components/Layout';

import store from './store';
import { startListeningToPlayerTurn, startListeningToTable } from './actions/FirebaseActions';

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(startListeningToPlayerTurn());
store.dispatch(startListeningToTable());
