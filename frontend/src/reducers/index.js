import { combineReducers } from 'redux'

import {
    GET_ALL_CATEGORIES,
    GET_ALL_POST,
    GET_ALL_COMMENTS,
    ADD_POST,
    DELETE_POST,
    EDIT_POST,
    GET_POST,
    ADD_NEW_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    ADD_VOTE_TO_POST,
    ADD_VOTE_TO_COMMENT,
    GET_POSTS_BY_CATEGORIES
  } from '../actions'



  function posts (state = {}, action) {
    const {post  ,id } = action;

    switch (action.type) {
        case GET_ALL_POST :  
          return action.posts;
        case GET_POSTS_BY_CATEGORIES:
          return action.posts;
        case ADD_POST :
          return [...state, action.post];
        case EDIT_POST :
          return [...state, action.post];
        case GET_POST :
          return action.post;
        case DELETE_POST :
          return state.filter(post => post.id !== action.postId);
        case ADD_VOTE_TO_POST :
          return [...state, action.post];
        default :
          return state
    }
  }


  function comments (state = [], action){
      switch(action.type){
        case GET_ALL_COMMENTS :  
          return action.comments;
        case ADD_NEW_COMMENT :
          return [...state, action.comment];
        case DELETE_COMMENT :
          return state.filter(comment => comment.id !== action.commentId);
        case EDIT_COMMENT :
          return [...state, ...action.comment];
        case ADD_VOTE_TO_COMMENT :
          return [...state, ...action.comment];
        default :
        return state
      }

  }
  
  const initialCategoriesState = [];
  function categories(state = initialCategoriesState , action){
      switch(action.type){
          case GET_ALL_CATEGORIES:
            return action.categories
          default :
            return state
        }
      }

      export default combineReducers({
        comments,
        posts,
        categories,
      })