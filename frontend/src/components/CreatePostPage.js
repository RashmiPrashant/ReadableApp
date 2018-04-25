import React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { fetchAddPost } from '../actions';

const CreatePostPage = props => (
  <div>
    <PostForm
      onSubmit={post => {
        props.dispatch(fetchAddPost(post));
      }}
    />
  </div>
);

export default connect()(CreatePostPage);