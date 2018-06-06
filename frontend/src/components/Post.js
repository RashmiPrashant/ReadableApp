import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { 
    fetchAddVoteToPost ,
    fetchDeletePost , 
    fetchAllPosts ,
    fetchDeleteComment,
    fetchPostsByCategories
        } from '../actions'
import { formatTimestamp } from '../utils/helpers'
import { Button } from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { thumbsUp , thumbsDown, edit , close } from 'react-icons-kit/fa';
import PageNotFound from './PageNotFound';

class Post extends Component {

    handleVoting = () => {
        if (window.location.pathname !== `/${this.props.category}`) {
            this.props.dispatch(fetchAllPosts());
        } else {
          this.props.dispatch(fetchPostsByCategories(this.props.category))
        }
      };    

    handleDeleteComments = () => {
        this.props.commentsId &&
          this.props.commentsId.map(commentId => {
            return this.props.dispatch(fetchDeleteComment(commentId));
          });
    };
    
    render(){
        const {
            dispatch,
            id,
            timestamp,
            title,
            body,
            author, 
            category,
            voteScore,
            commentCount
                } = this.props;
                
        
        return(
        <div>
        {!id ? ( 
           <PageNotFound /> 
         ) : ( 
        <div className="post">
        <div className = "post-list">
        <div className = "post-list-item">
        <div className='post-details' key={id}>
        <span>Title : <Link to={`/${category}/${id}`} className="title-link">{title}</Link></span>
        <span>Author : {author}</span>
        <span>Description : {body}</span>
        <span>Comment Count :{commentCount}</span>
        <span>Score : {voteScore}</span>
        <span>Timestamp : { formatTimestamp(timestamp) }</span>
        <div className="btn-group" role="group">
        
        <Button onClick={() => {
            dispatch(fetchAddVoteToPost(id, 'upVote'));
            this.handleVoting();
            }} 
            bsSize="large" 
            bsStyle="primary" 
            className="btn btn-secondary"> Up Vote <Icon icon={thumbsUp}/>
        </Button>
        
        <Button onClick={() => {
            dispatch(fetchAddVoteToPost(id, 'downVote'));
           this.handleVoting();
            }} 
            bsSize="large" 
            bsStyle="primary" 
            className="btn btn-secondary"> Down Vote <Icon icon={thumbsDown }/>
        </Button>

        <Button 
            bsSize="large" 
            bsStyle="primary" 
            className="btn btn-secondary" > 
            <Link style={{ textDecoration: 'none' , color:  '#e6f3ff' }} to={`/editpost/${id}`}>Edit Post </Link><Icon icon={edit}/>
        </Button>
        
        <Button onClick={() => {
                      dispatch(fetchDeletePost(id));
                      this.handleDeleteComments();
                    }}
            bsSize="large" 
            bsStyle="primary" 
            className="btn btn-secondary"> Delete Post<Icon icon={close}/>
        </Button>
        
        
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )}
            </div>
        )
    }
}

export default connect()(Post);