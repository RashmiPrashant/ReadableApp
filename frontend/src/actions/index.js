
import * as api from '../utils/api'
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const GET_ALL_POST = 'GET_ALL_POST'
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENTS'

export const GET_POSTS_BY_CATEGORIES = 'GET_POSTS_BY_CATEGORIES'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const GET_POST = 'GET_POST'
export const ADD_VOTE_TO_POST = 'ADD_VOTE_TO_POST'

export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
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
  
 
 
 // action creators to get posts
export const getAllPosts = (posts)  => {
    return {
      type: GET_ALL_POST,
      posts,
    }
  }

export const fetchAllPosts = () => dispatch =>
  api.getAllPosts().then(posts => dispatch(getAllPosts(posts)));

  // get posts by categories 
  export const getPostsByCategories = posts => ({
    type: GET_POSTS_BY_CATEGORIES,
    posts
  });

  export const fetchPostsByCategories = category => dispatch =>
  api.getPostsByCategories(category)
    .then(posts => dispatch(getPostsByCategories(posts)));



// action creators for posts
export const addPost = post => ({
    type: ADD_POST,
    post
  });

export const fetchAddPost = post => dispatch =>
  api.addPost(post).then(post => dispatch(addPost(post)));


// get single post detials 

export const getPost = post => ({
    type: GET_POST,
    post
  });
  
export const fetchPost = postId => dispatch =>
    api.getPost(postId).then(post => dispatch(getPost(post)));

export const deletePost = postId => ({
    type: DELETE_POST,
    postId
  });
  
export const fetchDeletePost = postId => dispatch =>
    api.deletePost(postId).then(() => dispatch(deletePost(postId)));


export const editPost = post => ({
    type: EDIT_POST,
    post
    });
      
export const fetchEditPost = (postId, post) => dispatch =>
    api.editPost(postId, post).then(post => dispatch(editPost(post)));


// action creators for add vote to post 
export const addVoteToPost = post => ({
    type: ADD_VOTE_TO_POST,
    post
  });
  
  export const fetchAddVoteToPost = (postId, option) => dispatch =>
    api.addVoteToPost(postId, option).then(post => dispatch(addVoteToPost(post)));
 
// action creators to get comments
export const getAllComments = comments => ({
    type: GET_ALL_COMMENTS,
    comments
  });

export const fetchAllComments = postId => dispatch =>
  api
    .getAllComments(postId)
    .then(comments => dispatch(getAllComments(comments)));



// action creators for comments
export function addNewComment ({ comment}) {
    return {
      type: ADD_NEW_COMMENT,
      comment,
    }
  }

  export const fetchAddNewComment = comment => dispatch =>
  api.addNewComment(comment).then(comment => dispatch(addNewComment(comment)));

  export const editComment = comment => ({
    type: EDIT_COMMENT,
    comment
  });
  
  export const fetchEditComment = (commentId, comment) => dispatch =>
    api
      .editComment(commentId, comment)
      .then(comment => dispatch(editComment(comment)));
  
  export const deleteComment = commentId => ({
    type: DELETE_COMMENT,
    commentId
  });
  
  export const fetchDeleteComment = commentId => dispatch =>
    api.deleteComment(commentId).then(() => dispatch(deleteComment(commentId)));


    // action creators for add vote to comment 

export const addVoteToComment = comment => ({
    type: ADD_VOTE_TO_POST,
    comment
  });
  
  export const fetchAddVoteToComment = (commentId, option) => dispatch =>
    api
      .addVoteToComment(commentId, option)
      .then(comment => dispatch(addVoteToComment(comment)));
  



