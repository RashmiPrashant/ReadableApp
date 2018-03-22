import React, { Component } from 'react';

class Post extends Component {
    render(){
        const { posts } = this.props
       // console.log("posts" , posts)
        
        return(
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
                    {posts.map((post) => (
                        <div className='post-details' key={post.id}>
                            <p>Author : {post.author}</p>
                            <p>Title : {post.title}</p>
                            <p>Description : {post.body}</p>
                            <p>Post Count :{post.commentCount}</p>
                            <p>Score : {post.voteScore}</p>
                            <div>
                                <button>Vote</button>
                                <button>Edit</button>
                                <button>Delete Post</button>
                                <button>Add new comment</button>
                            </div>
                        </div>  
                    ))}
                </div>
            </div>
        )
    }
}

export default Post
