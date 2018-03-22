
import * as api from '../utils/api'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_POST = 'GET_ALL_POST'
export const GET_ALL_COMMENT = 'GET_ALL_COMMENT'

export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'

export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'

export const ADD_VOTE_TO_POST = 'ADD_VOTE_TO_POST'
export const ADD_VOTE_TO_COMMENT = 'ADD_VOTE_TO_COMMENT'


// action creators to get category


 export const getAllCategory = categories => ({
    type: GET_ALL_CATEGORIES,
    categories
  });

 export const fetchAllCategories = () => dispatch => (
    api
      .getAllCategories()
      .then(categories => dispatch(getAllCategory(categories)))
  );
  
 
 // action creators to get comments
export function getAllComments(comments){
    return{
     type : GET_ALL_COMMENT,
     comments,
    }
 }

 // action creators to get posts
export const getAllPost = (posts)  => {
    return {
      type: GET_ALL_POST,
      posts,
    }
  }


 


// action creators for posts
export function addPost (post) {
    return {
      type: ADD_POST,
      post,
    }
  }
  export function deletePost ({id}){
    return{
        type : DELETE_POST,
        id,
    }
} 

export function editPost ({id, post}){
    return{
        type : DELETE_POST,
        id,
       post,
    }
}

// action creators for comments
export function addNewComment ({ comment}) {
    return {
      type: ADD_NEW_COMMENT,
      comment,
    }
  }
  
export function deleteComment ({id}){
    return{
        type : DELETE_COMMENT,
        id,
    }
}  

export function editComment ({id, comment}){
    return{
        type : EDIT_COMMENT,
        id,
        comment,
    }
}

// action creators for add vote to post 

export function addVoteToPost ({id, post}){
    return{
        type : ADD_VOTE_TO_POST,
        id,
        post,
    }
}

// action creators for add vote to comment 

export function addVoteToComment ({id, comment}){
    return{
        type : ADD_VOTE_TO_POST,
        id,
        comment,
    }
}
