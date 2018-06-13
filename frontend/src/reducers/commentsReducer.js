import {
    GET_ALL_COMMENTS,
    ADD_NEW_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    ADD_VOTE_TO_COMMENT,
} from '../actions'

function commentsReducer (state = [], action){
    switch(action.type){
      case GET_ALL_COMMENTS :  
        return action.comments;
      case ADD_NEW_COMMENT :
        return [...state, action.comment];
      case DELETE_COMMENT :
        return state.filter(comment => comment.id !== action.commentId);
      case EDIT_COMMENT :
        return [...state, ...action.comment];
      //case ADD_VOTE_TO_COMMENT :
        //return [...state, ...action.comment];
      case ADD_VOTE_TO_COMMENT :
        return state.map( comment => { if(comment.id === action.commentId) { return action.comment } return comment })
      default :
      return state
    }

}

export default commentsReducer