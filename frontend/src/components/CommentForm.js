import React from 'react';
import {connect} from 'react-redux';
import { fetchAddNewComment } from '../actions';
import AddComment from './AddComment';
import PropTypes from 'prop-types';

const CommentForm = props => {
    return (
      <AddComment
        parentPostId={props.parentId}
        onSubmit={comment => {
          props.dispatch(fetchAddNewComment(comment));
        }}
      />
    );
  };
  

  CommentForm.propTypes = { 
     parentId: PropTypes.string.isRequired 
   }; 
    
  export default connect()(CommentForm);
  