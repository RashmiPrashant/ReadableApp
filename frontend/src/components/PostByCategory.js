import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { fetchPostsByCategories} from '../actions'
import PageNotFound from './PageNotFound';
import AllPosts from './AllPosts';
import Post from './Post';

class PostByCategory extends Component {

    componentDidMount() {
        this.props.fetchPostsByCategories(this.props.match.params.category);
      }

    render(){
        const { posts } = this.props;
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


const mapStateToProps = ({ posts }) => ({
    posts
  });

export default connect(mapStateToProps, { fetchPostsByCategories })(PostByCategory);
