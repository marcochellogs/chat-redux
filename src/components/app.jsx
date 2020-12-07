import React from 'react';
import ChannelsList from '../containers/channel_list.jsx'
import MessageList from '../containers/message_list.jsx'

const App = () => {
  return (
    <div className="app">
      <ChannelsList />
      <MessageList />
    </div>
  );
};

export default App;
