import React from 'react';

import SearchBar from '../containers/search';
import VideoList from '../containers/video_list';
import LoadMoreVideos from '../containers/video_loadmore';
import VideoDisplay from '../containers/video_display';
const App = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="javascript:void(0);" className="brand-logo center">
            React Tube
          </a>
        </div>
      </nav>
      <br />
      <SearchBar />

      <div className="row">
        <div className="col m9">
          <VideoDisplay />
        </div>
        <div className="col m3">
          <VideoList />
          <LoadMoreVideos />
        </div>
      </div>
    </div>
  );
};

export default App;
