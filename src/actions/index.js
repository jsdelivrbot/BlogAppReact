import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const APY_KEY = '?key=njanvjneruavnrjvnvebbibirueuvaeu';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${APY_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
