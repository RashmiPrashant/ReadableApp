import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchAllPosts} from '../actions'
import SortPosts from '../utils/SortPosts';
import PageNotFound from './PageNotFound';
import Post from './Post';
import PropTypes from "prop-types";

class AllPosts extends Component {
    componentDidMount() {
        this.props.fetchAllPosts();
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

const mapStateToProps = ({ posts , sorting }) => ({
    posts : SortPosts(posts , sorting)
  });
  
AllPosts.propTypes = { 
   posts: PropTypes.array.isRequired 
}; 
    
export default connect(mapStateToProps, { fetchAllPosts })(AllPosts);