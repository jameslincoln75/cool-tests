import {
  POSTS_ADD,
  POSTS_RETRIEVED
} from "../actions/types";

const initialState = {
  feedItems: [],
  newItem: null,
};


export default function (state = initialState, action) {
  switch (action.type) {
    case POSTS_RETRIEVED:
      return {
        feedItems: action.payload
      };

    case POSTS_ADD:
      console.log(action.payload);
      return {
        ...state,
        newItem: action.payload
      };

    default:
      return state;
  }
}