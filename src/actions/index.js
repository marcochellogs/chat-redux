// TODO: add and export your own actions

export function setChannel(channel) {

  return {
    type: 'SET_CHANNEL',
    payload: channel
  }
}

export function getMessages(channel) {

  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: 'GET_MESSAGES', payload: promise
  }
}

export function sendMessage(channel, author, content) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { author, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: 'SEND_MESSAGE',
    payload: promise
  };
}
