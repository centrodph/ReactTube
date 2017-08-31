import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoItem from '../components/video_item';

class VideoList extends Component {
  onSelectVideoHandler(video) {
    console.log('Video Selected', video);
  }
  renderList() {
    return this.props.videos.map(video => {
      return (
        <div
          key={video.id.videoId}
          onClick={this.onSelectVideoHandler.bind(this, video)}
        >
          <VideoItem video={video} />
        </div>
      );
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
