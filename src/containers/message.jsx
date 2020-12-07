import React, { Component } from "react";

class Message extends Component {
  render() {
    return(
      <div>
        <p>{this.props.message.user}</p>
        <p>{this.props.message.time}</p>
        <p>{this.props.message.content}</p>
      </div>
    );
  }
}

export default Message;
