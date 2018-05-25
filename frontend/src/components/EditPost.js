import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { fetchEditPost } from '../actions';

class EditPost extends Component {
  render() {
      alert("in edit page !!!")
    const post = this.props.posts.filter(
        post => post.id === this.props.match.params.id
      );
      const matchedPost = { ...post[0] };
    return (
      <div>
          <PostForm
            postInfo={matchedPost}
            onSubmit={content => {
              this.props.fetchEditPost(content.id, content);
            }}
          />
      </div>
         
    );
  }
}
const mapStateToProps = ({ posts }) => ({
    posts
  });
  
export default connect(mapStateToProps, { fetchEditPost })(EditPost);