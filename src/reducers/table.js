export default function table (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_TABLE':
      return action.payload;
    case 'RESET_TABLE':
      return action.payload;
    // case 'MARK_BOX':
    //   return action.payload;
    default:
      return state;
  }
}
