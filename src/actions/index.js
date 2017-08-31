import axios from 'axios';
export const NEWSEARCH_TERM = 'NEWSEARCH_TERM';
export const SEARCH_VIDEOS = 'SEARCH_VIDEOS';
export const LOADMORE_VIDEOS = 'LOADMORE_VIDEOS';
const YT_URL = 'https://www.googleapis.com/youtube/v3/search';
const YT_KEY = 'AIzaSyCOlLwYLUw3POTv23jvkbZOTQlnKK-O77Y';

export function newSearchTerm(searchTerm) {
  return {
    type: NEWSEARCH_TERM,
    payload: searchTerm
  };
}
export function searchVideos(searchTerm) {
  const videos = axios.get(YT_URL, {
    params: {
      part: 'snippet',
      key: YT_KEY,
      q: searchTerm,
      type: 'video',
      maxResults: 2
    }
  });
  return {
    type: SEARCH_VIDEOS,
    payload: videos
  };
}

export function loadMoreVideos(searchTerm, nextPageToken) {
  console.log('load more call', searchTerm, nextPageToken);
  const videos = axios.get(YT_URL, {
    params: {
      part: 'snippet',
      key: YT_KEY,
      q: searchTerm,
      type: 'video',
      pageToken: nextPageToken,
      maxResults: 2
    }
  });
  return {
    type: LOADMORE_VIDEOS,
    payload: videos
  };
}
