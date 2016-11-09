export default function messages (state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_MESSAGES':
      return action.payload;
    default:
      return state;
  }
}
