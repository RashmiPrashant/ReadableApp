import React, { Component } from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
import moment from 'moment';
import { FormGroup , FormControl ,ControlLabel,Button} from 'react-bootstrap';

class PostForm extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      id: props.postInfo ? props.postInfo.id : uuid(),
      category: props.postInfo ? props.postInfo.category : 'react',
      title: props.postInfo ? props.postInfo.title : '',
      author: props.postInfo ? props.postInfo.author : '',
      body: props.postInfo ? props.postInfo.body : '',
      voteScore: props.postInfo ? props.postInfo.voteScore : 0,
      commentCount: props.postInfo ? props.postInfo.commentCount : 0,
      error: '',
      value: ''
    };
  }

  onCategoryChange = (e) => {
    this.setState({category: e.currentTarget.value})
  };

  onTitleChange = e => {
    const title = e.target.value;
    this.setState({ title });
  };

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
    if (!this.state.title || !this.state.author || !this.state.body) {
      this.setState(() => ({ error: 'Please fill out all the fields' }));
    } else {
      this.props.onSubmit({
        id: this.state.id,
        timestamp: moment().valueOf(),
        title: this.state.title,
        body: this.state.body,
        author: this.state.author,
        category: this.state.category,
        voteScore: this.state.voteScore,
        deleted: false,
        commentCount: this.state.commentCount
      });
      this.setState({
        title: '',
        body: '',
        author: '',
        category: ''
      });
    }
  };
  
    render(){
        return(
            <div>
              <h3 className= "subheader">Create your post here !!</h3>
              
              <form>
              <FormGroup>
              <ControlLabel>Select</ControlLabel>
              <FormControl 
              componentClass="select" 
              placeholder="Category"
              value={this.state.category}
              onChange={this.onCategoryChange}>
                <option value="react">react</option>
                <option value="redux">redux</option>
                <option value="udacity">udacity</option>
              </FormControl>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Enter title</ControlLabel>
              <FormControl
                type="text"
                value={this.state.title}
                  onChange={this.onTitleChange}
                placeholder="Title"
              />
          </FormGroup>

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
    
              <Button onClick ={this.onFormSubmit} type="submit">
                {this.props.postInfo ? 'Edit Post' : 'Add Post'}</Button>
                </form>
                </div>
        )
    }
}



export default connect()(PostForm);

