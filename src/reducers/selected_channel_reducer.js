export default function (state, action) {
  if (state === undefined) {
    return ['general'];
  }

  switch(action.type) {
    case 'SET_CHANNEL':
      return action.payload;
    default:
      return state;
  }
}

