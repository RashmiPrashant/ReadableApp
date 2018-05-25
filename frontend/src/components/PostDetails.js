import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts , fetchAllComments} from '../actions'
import SortPosts from './SortPosts';
import SortDropdown from './SortDropdown'
import Post from './Post';
import Comments from './Comments'; 
import CommentForm from './CommentForm';

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
        const commentsId = comments.length > 0 && 
            comments.map(comment => comment.id);
            
        return(
            <div className="post-details">
                <Post 
                    commentsId={commentsId} 
                    {...singlePost} 
                    goToHomepage={this.props.history.push}
                    />

                
                <div className="commentSort">
                <ul className="nav nav-pills nav-fill">
                            <li className="createComment">
                            <div className="addComment">
                                <CommentForm parentId={this.props.match.params.post_id} />
                            </div>
                            </li>
                            
                            <li className="dropDownComment">
                            <SortDropdown />
                                </li>
                        </ul>
                    </div>
                    <div className="commentList">
                  {comments.length > 0 &&
                    comments.map(comment => (
                        <Comments
                        key={comment.id}
                        {...comment}
                        postUrl={this.props.match.url}
                        />
                    ))}
                    </div>
                </div>
        )
    }
}

const mapStateToProps = ({ posts , comments , sorting }) => ({
    posts,
    comments: SortPosts(comments, sorting)
  });

export default connect(mapStateToProps, { fetchAllPosts,fetchAllComments })(PostDetails);