import React, { Component } from "react";
import { connect } from 'react-redux';

class MessageForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.sendMessage(this.props.selectedChannel, this.props.currentUser, 'ciao');
    this.setState({ value: '' }); // Reset message input
  }

  render() {
    return(
      <form action="">
        <input type="text"></input>
        <input type="submit" value="Submit" onSubmit={this.handleSubmit}></input>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { sendMessage: sendMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser,
  }
}

export default MessageForm;
