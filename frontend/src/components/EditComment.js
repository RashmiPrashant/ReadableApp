import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEditComment } from '../actions';
import AddComment from './AddComment';
import PageNotFound from './PageNotFound';

class EditComment extends Component{
    render(){

        const comment = this.props.comments.filter(
            comment => comment.id === this.props.match.params.id
          );
          const matchedComment = { ...comment[0] };
        return(
            <div>
                {Object.keys(matchedComment).length > 0 ? (
                <AddComment
                commentInfo={matchedComment}
                onSubmit={content => {
                    this.props.history.push(
                    this.props.location.state.post.postUrl
                    );
                    this.props.fetchEditComment(content.id, content);
                }}
                />
            
                ) : (
                <PageNotFound />
                )}
            </div>
        )
    }
}

const mapStateToProps = ({ comments }) => ({
    comments
  });

export default connect(mapStateToProps, { fetchEditComment })(EditComment)