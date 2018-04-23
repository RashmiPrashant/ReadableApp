import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import Category from './Category'
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';

class CategoryList extends Component {
    render(){
        const { categories } = this.props;
        return(
            <div className="header">
                <div className='appTitle'><h1>Readable App</h1>
                    <Navbar color="light" expand="md" className="post-navbar">
                    <Navbar.Header>
                        <Navbar.Brand><span>Posts</span>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            <Link to="/createpost">
                            <Button bsSize="large" bsStyle="primary" className="create-new-post"> 
                            Add New Post 
                            </Button></Link>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
                <div>
                    <ul className="nav nav-pills nav-fill">
                    <li className="nav-item" key="homePage">
                    <Link to="/">
                        <Button bsSize="large" bsStyle="primary">All Post </Button>
                    </Link> 
                    </li>
                    {categories.length > 0 &&
                    categories.map(category => (
                        <li className="nav-item" key={category.path}>
                            <Category className="nav-link active" key={category.path} {...category} />
                        </li>
                    ))}
                    </ul>  </div> 
            </div>
        )
    }
}

export default connect()(CategoryList)
