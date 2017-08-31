import React from 'react';

import SearchBar from '../containers/search';
import VideoList from '../containers/video_list';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <SearchBar />
      <VideoList />
    </div>
  );
};

export default App;
