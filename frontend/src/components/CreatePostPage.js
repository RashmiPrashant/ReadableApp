import React from "react";
import { connect } from "react-redux";
import CreatePostForm from "./CreatePostForm";
import { fetchAddPost } from '../actions';

const CreatePostPage = props => (
  <div>
    <CreatePostForm
      onSubmit={post => {
        props.dispatch(fetchAddPost(post));
      }}
    />
  </div>
);

export default connect()(CreatePostPage);