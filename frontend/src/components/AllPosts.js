import React, { Component } from 'react';
import PageNotFound from './PageNotFound';
import Post from './Post';

class AllPosts extends Component {
    render(){
        const { posts } = this.props
        return(
            <div>
                {!posts.length && (
                <PageNotFound />
                )}

                {posts.length > 0 &&
                posts.map(post => <Post key={post.id} {...post} />)}
            </div>
        )
    }
}

export default AllPosts
