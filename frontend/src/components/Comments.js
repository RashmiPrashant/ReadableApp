import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchAllComments , 
         fetchPost,  
         fetchDeleteComment , 
         fetchAddVoteToComment } from '../actions';
import { formatTimestamp } from '../utils/helpers'
import { Button } from 'react-bootstrap';
import Icon from 'react-icons-kit';
import { thumbsUp ,thumbsDown , edit , close  } from 'react-icons-kit/fa';

class Comments extends Component{
    render(){
        const {
            dispatch,
            id,
            parentId,
            timestamp,
            body,
            author,
            voteScore,
            postUrl
                } = this.props;
            
            return(
            <div className="comment">
                <div className="comment-list">
                    <div className="comment-list-item">
                        <div className="comment-details">
                        <span><b>Author : {author}</b></span>
                        <span className="">Comment : {body}</span>
                        <span>Vote Score : {voteScore}</span>
                        <span className="date sub-text">Date : { formatTimestamp(timestamp) }</span>
                        <div className="btn-group" role="group">
                                
                                <Button
                                    onClick={() => {
                                        dispatch(fetchAddVoteToComment(id, 'upVote'));
                                        dispatch(fetchAllComments(parentId));
                                      }} 
                                    bsSize="small" 
                                    bsStyle="primary" 
                                    className="btn btn-secondary"> Up Vote <Icon icon={thumbsUp}/>
                                </Button>
                                <Button 
                                    onClick={() => {
                                        dispatch(fetchAddVoteToComment(id, 'downVote'));
                                        dispatch(fetchAllComments(parentId));
                                      }}
                                    bsSize="small" 
                                    bsStyle="primary" 
                                    className="btn btn-secondary"> Down Vote <Icon icon={thumbsDown }/>
                                </Button>
                                
                                <Button 
                                        bsSize="small" 
                                        bsStyle="primary" 
                                        className="btn btn-secondary" > <Link
                                        to={{
                                            pathname: `/editcomment/${id}`,
                                            state: { post: { postUrl } }
                                          }}
                                          style={{ textDecoration: 'none' , color:  '#e6f3ff' }}>
                                          Edit <Icon icon={edit}/></Link>
                                </Button>
                                
                                <Button 
                                     onClick={() => {
                                        dispatch(fetchDeleteComment(id));
                                        dispatch(fetchPost(parentId));
                                      }}
                                    bsSize="small" 
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

export default connect()(Comments);