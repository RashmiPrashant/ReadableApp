import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AllPosts from './AllPosts'
import { fetchAllPosts} from '../actions'
import {connect} from 'react-redux'

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchAllPosts();
      }
    render(){
        const { posts } = this.props;
        return(
            <div className="main-section">
                <AllPosts posts = {posts}/>
            </div>
        )
    }
}

const mapStateToProps = ({ posts }) => ({
    posts
  });

  
export default connect(mapStateToProps, { fetchAllPosts })(HomePage);
