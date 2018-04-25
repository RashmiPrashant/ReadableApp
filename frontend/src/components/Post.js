import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { fetchAddVoteToPost ,fetchDeletePost } from '../actions'
import { formatTimestamp } from '../utils/helpers'
import { Button } from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { thumbsUp , thumbsDown, edit , close } from 'react-icons-kit/fa';

class Post extends Component {
    
    
      
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
            
            }} 
            bsSize="large" 
            bsStyle="primary" 
            className="btn btn-secondary"> Up Vote <Icon icon={thumbsUp}/>
        </Button>
        
        <Button onClick={() => {
            dispatch(fetchAddVoteToPost(id, 'downVote'));
            }} 
            bsSize="large" 
            bsStyle="primary" 
            className="btn btn-secondary"> Down Vote <Icon icon={thumbsDown }/>
        </Button>

        <Button 
            bsSize="large" 
            bsStyle="primary" 
            className="btn btn-secondary" > Edit <Icon icon={edit}/>
        </Button>
        
        <Button onClick={() => {
                      dispatch(fetchDeletePost(id));
                    }}
            bsSize="large" 
            bsStyle="primary" 
            className="btn btn-secondary"> Delete <Icon icon={close}/>
        </Button>
        
        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/*
<Button 
            bsSize="large" 
            bsStyle="primary" 
            className="btn btn-secondary">Add new comment <Icon icon={pen}/>
        </Button>
        */

export default connect()(Post);