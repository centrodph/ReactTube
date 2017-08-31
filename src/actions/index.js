export const SEARCH_VIDEOS = 'SEARCH_VIDEOS';
const YT_URL = 'https://www.googleapis.com/youtube/v3/search';
const YT_KEY = 'AIzaSyCOlLwYLUw3POTv23jvkbZOTQlnKK-O77Y';
import axios from 'axios';

export function searchVideos(searchTerm) {
  const videos = axios.get(YT_URL, {
    params: {
      part: 'snippet',
      key: YT_KEY,
      q: searchTerm,
      type: 'video',
      maxResults: 20
    }
  });
  return {
    type: SEARCH_VIDEOS,
    payload: videos
  };
}
