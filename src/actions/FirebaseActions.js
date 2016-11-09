import { database } from '../firebaseApp';

// const messagesRef = database.ref('messages');
const tableRef = database.ref('table');
const playerTurnRef = database.ref('playerTurn');

function receiveTable (table) {
  // console.log('table: ', table);
  return {
    type: 'RECEIVE_TABLE',
    payload: table
  };
}

function receivePlayerTurn (playerTurn) {
  // console.log('playerTurn: ', playerTurn);
  return {
    type: 'RECEIVE_PLAYER_TURN',
    payload: playerTurn
  };
}

export function startListeningToTable () {
  return (dispatch) => {
    tableRef.off();
    tableRef.on('value', (snap) => {
      // console.log('snap: ', snap.val());
      let table = snap.val();

      dispatch(receiveTable(table));
    });
  };
}

export function startListeningToPlayerTurn () {
  return (dispatch) => {
    playerTurnRef.off();
    playerTurnRef.on('value', (snap) => {
      // console.log('snap of PlayerTurn: ', snap.val());
      let playerTurn = snap.val();

      dispatch(receivePlayerTurn(playerTurn));
    });
  };
}

export function resetGame () {
  let emptyTable = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
  };

  tableRef.set(emptyTable);

  return {
    type: 'RESET_TABLE',
    payload: emptyTable
  };
}

export function playBox (turn) {
  playerTurnRef.set(turn);
  return {
    type: 'CHANGE_PLAYER',
    payload: turn
  };
}

export function markBox (mark, key) {
  console.log('mark in actions: ', mark, 'key in actions: ', key);
  let keyRef = tableRef.child(key);
  keyRef.set(mark);
  // return {
  //   tpe: 'MARK_BOX',
  //   payload: '?'
  // };
}
