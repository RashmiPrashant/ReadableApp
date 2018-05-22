import React, { Component } from 'react';
import { connect } from "react-redux";
import SortPosts from './SortPosts';
import { fetchAllPosts} from '../actions'
import PageNotFound from './PageNotFound';
import Post from './Post';

class AllPosts extends Component {
    componentDidMount() {
        this.props.fetchAllPosts();
      }

    render(){
        const { posts } = this.props;
        //console.log("post" , posts);
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
    ///posts: SortPosts(posts, sorting)
    posts : SortPosts(posts , sorting)
  });
  

  export default connect(mapStateToProps, { fetchAllPosts })(AllPosts);
