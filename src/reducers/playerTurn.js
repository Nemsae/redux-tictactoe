export default function playerTurn (state = '', action) {
  switch (action.type) {
    case 'RECEIVE_PLAYER_TURN':
      return action.payload;
    case 'CHANGE_PLAYER':
      return action.payload;
    default:
      return state;
  }
}
