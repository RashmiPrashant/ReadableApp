import React from 'react';
import {connect} from 'react-redux';
import { fetchAddNewComment , fetchPost  } from '../actions';
import AddComment from './AddComment';

const CommentForm = props => {
    return (
      <AddComment
        parentPostId={props.parentId}
        onSubmit={comment => {
          props.dispatch(fetchAddNewComment(comment));
          props.dispatch(fetchPost(props.parentId));
        }}
      />
    );
  };
  
  export default connect()(CommentForm);
  