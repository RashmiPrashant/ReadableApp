import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEditPost } from '../actions';
import PostForm from './PostForm';


class EditPost extends Component{
    render(){

        const post = this.props.posts.filter(
            post => post.id === this.props.match.params.id
          );
          const matchedPost = { ...post[0] };

        return(
            <div>
                <span>I am in edit form !!!</span>
                <PostForm
                    postInfo={matchedPost}
                    onSubmit={content => {
                    this.props.fetchEditPost(content.id, content);
                    this.props.history.push('/');
                    }}
                />
                </div>
        )
    }
}

export default EditPost