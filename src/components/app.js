import React from 'react';

import SearchBar from '../containers/search';
import VideoList from '../containers/video_list';
import LoadMoreVideos from '../containers/video_loadmore';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <SearchBar />
      <LoadMoreVideos />
      <VideoList />
    </div>
  );
};

export default App;
