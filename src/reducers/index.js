import { combineReducers } from 'redux';

import messages from './messages';
import table from './table';
import playerTurn from './playerTurn';

export default combineReducers({
  messages,
  table,
  playerTurn
});
