import {
  GET_ERRORS,
  POSTS_RETRIEVED,
} from './types'
import Fetcher from "../Fetcher";

// random number for ids
let randomNumber = () => {
  return Math.floor(Math.random() * 99) + 1
};


// add a new post
export const addPost = (msg) => dispatch => {
  let endpoint = '/feed';
  let id = randomNumber();
  let newObj = {
    id: id,
    user: `User ${id}`,
    value: msg,
    timestamp: Math.round((new Date()).getTime() / 1000),
    timeZoneOffset: new Date().getTimezoneOffset(),
    likes: 0
  };


  Fetcher.post(endpoint, newObj)
  .then(res => {
    dispatch(getFeedItems());
  }).catch(err => dispatch({
    type: GET_ERRORS,
    payload: err.message
  }))
};


// get posts
export const getFeedItems = () => dispatch => {
  let endpoint = '/feed';
  Fetcher.get(endpoint)
  .then(res => {
    dispatch({
      type: POSTS_RETRIEVED,
      payload: res.data
    });
  }).catch(err => dispatch({
    type: GET_ERRORS,
    payload: err.message
  }))
};