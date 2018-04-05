import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import PageNotFound from './PageNotFound';

class Post extends Component {
    render(){
        const {dispatch,id,timestamp,title,body,author, category,voteScore,commentCount} = this.props;
        
        return(
            <div>
                <div className = "post-list">
                <div>
                <h4 className='postTitle'>Posts</h4>
                <button>Create new post</button>
                <select>
                    <option value="timestamp">Timestamp</option>
                    <option value="votescore">VoteScore</option>
                </select>
            </div>
                <div className = "post-list-item">
                        <div className='post-details' key={id}>
                            <p>Author : {author}</p>
                            <p>Title : {title}</p>
                            <p>Description : {body}</p>
                            <p>Post Count :{commentCount}</p>
                            <p>Score : {voteScore}</p>
                            <div>
                                <button>Vote</button>
                                <button>Edit</button>
                                <button>Delete Post</button>
                                <button>Add new comment</button>
                            </div>
                        </div> 
                </div>
            </div>
                </div>
        )
    }
}

export default Post;