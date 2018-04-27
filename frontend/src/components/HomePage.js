import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import AllPosts from './AllPosts'
import { fetchAllPosts} from '../actions'
import {connect} from 'react-redux'
import Modal from 'react-modal';
import CreatePostPage from './CreatePostPage';
import { FormGroup , FormControl, Button} from 'react-bootstrap';

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



class HomePage extends Component {
    state = {
        postModalOpen: false
      }
    
      openPostModal = () => {
        this.setState(() => ({postModalOpen: true}))
      }
    
      togglePostModal = () => {
        this.setState((prevState) => ({
          postModalOpen: !prevState.postModalOpen
        }))
      }
    
      componentWillMount() {
        Modal.setAppElement('body');
    }

    componentDidMount() {
        this.props.fetchAllPosts();
      }
    render(){
        const { posts } = this.props;
        const {postModalOpen} = this.state;

        return(
            <div>
                <div>
                    <div >
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                            <Button 
                            className="create-new-post"  
                            bsSize="large" 
                            >
                            <Link to="/createpost">Add New Post</Link> 
                            </Button></li>
                            
                            <li className="nav-item"><h3>Posts by</h3>
                            <FormGroup>
                            <FormControl
                            className="dropDown" 
                            componentClass="select" 
                            placeholder="Select by "
                            >
                                <option value="votes">Votes</option>
                                <option value="latest">Latest</option>
                            </FormControl>
                            </FormGroup>
                                </li>
                        </ul>
                    </div>                   
                </div>
                <div className="main-section">
                    <AllPosts posts = {posts}/>
                </div>

                <Modal 
                    style={customStyles}
                    isOpen={postModalOpen}
                    onAfterOpen={this.afterOpenModal}
                    toggle={this.togglePostModal}>
                    
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = ({ posts }) => ({
    posts
  });

  
export default connect(mapStateToProps, { fetchAllPosts })(HomePage);
