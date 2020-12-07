import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {
  render() {
    return(
      <div>
        <p>{this.props.channels}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps, null )(ChannelList);
