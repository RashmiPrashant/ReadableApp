import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import AllPosts from './AllPosts'
import { fetchAllPosts} from '../actions'
import {connect} from 'react-redux'
import CreatePostPage from './CreatePostPage';
import SortDropdown from './SortDropdown'
import { Button} from 'react-bootstrap';

class HomePage extends Component {
    render(){
        const { posts } = this.props;
        return(
            <div>
                <div>
                    <div className="subNavHeader">
                        <ul className="nav nav-pills nav-fill">
                            <li className="create-new-post">
                            <Button 
                            bsSize="large">
                            <Link to="/createpost">Add New Post</Link> 
                            </Button></li>
                            <li className="dropDown">
                            {posts.length > 0 ? <SortDropdown /> : null}
                            </li>
                        </ul>
                    </div>                   
                </div>
                <div className="main-section">
                    <AllPosts />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ posts }) => ({
    posts
  });

export default connect(mapStateToProps)(HomePage);
