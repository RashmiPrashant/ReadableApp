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
    GET_POSTS_BY_CATEGORIES,
    SORT_BY_NEWEST_POST,
    SORT_BY_OLDEST_POST,
    SORT_BY_HIGHEST_VOTE_SCORE,
    SORT_BY_LOWEST_VOTE_SCORE
  } from '../actions'



  function posts (state = {}, action) {
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
        //case ADD_VOTE_TO_POST :
          //return [...state, action.post];
        case ADD_VOTE_TO_POST :
          return state.map( post => { if(post.id === action.postId) { return action.post } return post })
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

      const initialSortingState = {
        sortBy: 'Newest Post'
      };
      
      const sorting = (state = initialSortingState, action) => {
        switch (action.type) {
          case SORT_BY_NEWEST_POST:
            return {
              ...state,
              sortBy: 'Newest Post'
            };
          case SORT_BY_OLDEST_POST:
            return {
              ...state,
              sortBy: 'Oldest Post'
            };
          case SORT_BY_HIGHEST_VOTE_SCORE:
            return {
              ...state,
              sortBy: 'Highest Vote'
            };
          case SORT_BY_LOWEST_VOTE_SCORE:
            return {
              ...state,
              sortBy: 'Lowest Vote'
            };
          default:
            return state;
        }
      };

export default combineReducers({
  comments,
  posts,
  categories,
  sorting
      })