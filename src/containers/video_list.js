import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoItem from '../components/video_item';

class VideoList extends Component {
  renderList() {
    return this.props.videos.map(video => {
      return <VideoItem key={video.id.videoId} video={video} />;
    });
  }
  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}
//function mapDispatchToProps(dispatch) {}
function mapStateToProps(state) {
  return { videos: state.videoList };
}
export default connect(mapStateToProps, null)(VideoList);
