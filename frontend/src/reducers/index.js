import { combineReducers } from 'redux'

import {
    GET_ALL_CATEGORIES,
    GET_ALL_POST,
    GET_ALL_COMMENT,
    ADD_POST,
    DELETE_POST,
    EDIT_POST,
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
        return {
          ...state,
          [post.id]:{
            ...post
          }
        }
        case EDIT_POST :
        return { 
          ...state,
          [id]: {
            ...state[id],
            ...post
          }
        }
        case DELETE_POST :
        return {
          ...state,
        [id]: {
          [post]: null,
        }
        }
        case ADD_VOTE_TO_POST :
        return {
        }
        default :
        return state
    }
  }


  function comments (state = {}, action){
    const {comment , comments ,id } = action;

      switch(action.type){
        case GET_ALL_COMMENT :  
        return {
        }
        case ADD_NEW_COMMENT :
        return {
          ...state,
          [comment.id]:{
            ...comment
          }
        }
        case DELETE_COMMENT :
        delete state[id]
        return {
          ...state,
        }
        case EDIT_COMMENT :
        return {
          ...state,
          [id]:{ 
            ...state[id],
            ...comment
          }
        }
        case ADD_VOTE_TO_COMMENT :
        return {
        }
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