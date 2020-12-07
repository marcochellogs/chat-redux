import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMessages } from '../actions'
import Message from './message.jsx';
import MessageForm from './message_form.jsx';


class MessageList extends Component {

  componentWillMount(){
    this.props.getMessages(this.props.selectedChannel);
  }

  render() {
    return(
      <div>
        {this.props['messages'].map((message) => <Message message={message} key={message.time} />)}
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages: getMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    messages: state.messages,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
