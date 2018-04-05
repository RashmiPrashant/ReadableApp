import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'
import 'bootstrap/dist/css/bootstrap.css';

import CategoryList from './CategoryList'
import AllPosts from './AllPosts'
import { fetchAllCategories,fetchAllPosts} from '../actions'
import {connect} from 'react-redux'

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchAllCategories();
        this.props.fetchAllPosts();
      }
    render(){
        const { categories, posts } = this.props;
        return(
            <div>
                <i className="fas fa-home"></i>
                <AllPosts posts = {posts}/>
            </div>
        )
    }
}

const mapStateToProps = ({ categories , posts }) => ({
    categories,
    posts
  });

  
  export default connect(mapStateToProps, { fetchAllCategories ,fetchAllPosts })(HomePage);
