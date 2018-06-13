import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { fetchEditPost } from '../actions';
import PageNotFound from './PageNotFound'
import PropTypes from 'prop-types';

class EditPost extends Component {
  render() {
    const post = this.props.posts.filter(
        post => post.id === this.props.match.params.id
      );
      const matchedPost = { ...post[0] };
    return (
      <div>
        {Object.keys(matchedPost).length > 0 ? (
          <PostForm
            postInfo={matchedPost}
            onSubmit={content => {
              this.props.fetchEditPost(content.id, content);
              this.props.history.push('/');
            }}
          />
        ) : (
        <PageNotFound />
        )}   
      </div>
         
    );
  }
}

EditPost.propTypes = { 
  posts: PropTypes.array.isRequired 
};


const mapStateToProps = ({ posts }) => ({
    posts
  });
  
export default connect(mapStateToProps, { fetchEditPost })(EditPost);