import{
    GET_ALL_POST,
    ADD_VOTE_TO_POST,
    ADD_POST,
    DELETE_POST,
    EDIT_POST,
    GET_POST,
    GET_POSTS_BY_CATEGORIES,
} from '../actions'


function postsReducer (state = {}, action) {
    switch (action.type) {
        case GET_ALL_POST :  
          return action.posts;
        case GET_POSTS_BY_CATEGORIES:
          return action.posts;
        case ADD_POST :
          return [...state, action.post];
        case EDIT_POST :
          return state;
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


  export default postsReducer