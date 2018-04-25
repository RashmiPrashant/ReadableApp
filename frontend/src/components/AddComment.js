import React, { Component } from 'react';
import Modal from 'react-modal';
import Icon from 'react-icons-kit';
import { close } from 'react-icons-kit/fa';   
import uuid from 'uuid';
import moment from 'moment';
import { FormGroup , FormControl ,ControlLabel,Button} from 'react-bootstrap';

const customStyles = {
    content : {
        position: 'absolute',
        top: '40px',
        left: '200px',
        right: '200px',
        bottom: '40px',
        border: '1px solid rgb(204, 204, 204)',
        background: 'rgb(255, 255, 255)',
        overflow: 'auto',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        boxshadow: '0 3px 8px 0 rgba(0,0,0,.24), 0 3px 12px 0 rgba(0,0,0,.12)',
        minxWidth: '500px'
    }
  };


class AddComment  extends Component{
    constructor(props) {
        super(props);
        this.state = {
          id: props.commentInfo ? props.commentInfo.id : uuid(),
          parentId: props.commentInfo
            ? props.commentInfo.parentId
            : props.parentPostId,
          author: props.commentInfo ? props.commentInfo.author : '',
          body: props.commentInfo ? props.commentInfo.body : '',
          voteScore: props.commentInfo ? props.commentInfo.voteScore : 0,
          error: '',
          commentModalOpen: false
        };
      }
     

      onAuthorChange = e => {
        const author = e.target.value;
        this.setState({ author });
      };
    
      onBodyChange = e => {
        const body = e.target.value;
        this.setState({ body });
      };
    
      onFormSubmit = e => {
        e.preventDefault();
        if (!this.state.author || !this.state.body) {
          this.setState(() => ({ error: 'Please fill out all the fields' }));
        } else {
          this.props.onSubmit({
            id: this.state.id,
            parentId: this.state.parentId,
            timestamp: moment().valueOf(),
            author: this.state.author,
            body: this.state.body,
            voteScore: this.state.voteScore,
            deleted: false,
            parentDeleted: false
          });
          this.setState({
            id: uuid(),
            author: '',
            body: ''
          });
        }
      };

      openCommentModal = () => {
          alert("open?" );
        this.setState(() => ({commentModalOpen: true}))
      }
    
      toggleCommentModal = () => {
        this.setState((prevState) => ({
            commentModalOpen: !prevState.commentModalOpen
        }))
      }


    render(){
        const {commentModalOpen} = this.state;
        return(
            <div>
                <Button 
                onClick={this.openCommentModal}
                bsSize="small" 
                bsStyle="primary" 
                className="btn btn-secondary"> Add new Comment  <Icon icon={close}/>
                </Button>
                <Modal 
                    style={customStyles}
                    isOpen={commentModalOpen}
                    onAfterOpen={this.afterOpenModal}
                    toggle={this.toggleCommentModal}>

                    <h3 className= "subheader">Post your comment here !!</h3>
                    <form>
                        <FormGroup>
                        <ControlLabel>Enter Author</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.author}
                            onChange={this.onAuthorChange}
                            placeholder="Author"
                        />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Content</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                type="text"
                                value={this.state.body}
                                onChange={this.onBodyChange}
                                placeholder="Content"
                            />
                        </FormGroup>
                        <Button onClick ={this.onFormSubmit} type="submit">Submit</Button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default AddComment;