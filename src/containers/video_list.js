import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoItem from '../components/video_item';
import { selectVideo } from '../actions';

class VideoList extends Component {
  onSelectVideoHandler(video) {
    this.props.selectVideo(video);
  }
  renderList() {
    return this.props.videos.map(video => {
      return (
        <div
          className="collection-item"
          key={video.id.videoId}
          onClick={this.onSelectVideoHandler.bind(this, video)}
        >
          <VideoItem video={video} />
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return (
      <div className="collection">
        {this.renderList()}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectVideo }, dispatch);
}
function mapStateToProps(state) {
  return { videos: state.videoList };
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
