import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';
import { FormGroup , FormControl ,ControlLabel,Button} from 'react-bootstrap';



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
          error: ''
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
        if (this.state.author==="" || this.state.body ==="") {
          alert("please all filed are comulsory!!");
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

    render(){
        return(
            <div>
                    <h4 className= "subheader">Post your comment here !!</h4>
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
            </div>
        )
    }
}

export default AddComment;