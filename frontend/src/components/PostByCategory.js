import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchPostsByCategories} from '../actions'
import PageNotFound from './PageNotFound';
import Post from './Post';
import PropTypes from "prop-types";

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

  PostByCategory.propTypes = { 
   posts: PropTypes.array.isRequired 
};
export default connect(mapStateToProps, { fetchPostsByCategories })(PostByCategory);