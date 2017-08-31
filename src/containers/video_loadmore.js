import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMoreVideos } from '../actions';
class LoadMoreVideos extends Component {
  loadMoreHandler(event) {
    event.preventDefault();
    this.props.loadMoreVideos(
      this.props.currentsearch,
      this.props.nextPageToken
    );
  }
  render() {
    return <button onClick={this.loadMoreHandler.bind(this)}>Load More</button>;
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadMoreVideos }, dispatch);
}
function mapStateToProps(state) {
  return {
    nextPageToken: state.nextPageToken,
    currentsearch: state.currentsearch
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoadMoreVideos);
