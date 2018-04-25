import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import Category from './Category'
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import Modal from 'react-modal';
import CreatePostPage from './CreatePostPage';

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

class CategoryList extends Component {
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
    
    render(){
        const { categories } = this.props;
        const {postModalOpen} = this.state;

        return(
            <div className="header">
                <div className='appTitle'><h1>Readable App</h1>
                    <Navbar color="light" expand="md" className="post-navbar">
                    <Navbar.Header>
                    <h3>See all Posts</h3>
                            
                        </Navbar.Header>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button onClick={this.openPostModal} 
                                    bsSize="large" 
                                    bsStyle="primary" 
                                    className="create-new-post">Add New Post 
                                </Button>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
                <div>
                    <ul className="nav nav-pills nav-fill">
                    <li className="nav-item" key="homePage">
                    <Link to="/">
                        <Button bsSize="large" bsStyle="primary">Home </Button>
                    </Link> 
                    </li>
                    {categories.length > 0 &&
                    categories.map(category => (
                        <li className="nav-item" key={category.path}>
                            <Category className="nav-link active" key={category.path} {...category} />
                        </li>
                    ))}
                    </ul>  
                </div> 
                
                <Modal 
                    style={customStyles}
                    isOpen={postModalOpen}
                    onAfterOpen={this.afterOpenModal}
                    toggle={this.togglePostModal}>
                    <CreatePostPage/>
                </Modal>
            </div>
        )
    }
}

export default connect()(CategoryList)
