export default function (state, action) {
  if (state === undefined) {
    return [];
  }

  switch(action.type) {
    case 'GET_MESSAGES':
      return action.payload.messages;
    case 'SEND_MESSAGE':
      return action.payload;
    default:
      return state;
  }
}
