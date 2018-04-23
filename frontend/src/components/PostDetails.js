import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts} from '../actions'
import { fetchAllComments } from '../actions';
import Post from './Post';
import Comments from './Comments';
class PostDetails extends Component {

  componentDidMount() {
    this.props.fetchAllPosts();
    this.props.fetchAllComments(this.props.match.params.post_id);
  }
    render(){
        const { posts, comments } = this.props;
        const post = posts.length > 0 &&
            posts.filter(post => post.id === this.props.match.params.post_id);
        const singlePost = { ...post[0] };
        const commentsId = comments.map(comment => comment.id);
        return(
            <div className="post-details">
                 <Post commentsId={commentsId} {...singlePost} />
                  {comments.length > 0 &&
                    comments.map(comment => (
                        <Comments
                        key={comment.id}
                        {...comment}
                        />
                    ))}
                    
                </div>
        )
    }
}

const mapStateToProps = ({ posts , comments }) => ({
    posts,
    comments

  });

export default connect(mapStateToProps, { fetchAllPosts,fetchAllComments })(PostDetails);