 import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {  BrowserRouter as Router,Route, Link, Switch } from 'react-router-dom';
import HomePage from './HomePage'
import CategoryList from './CategoryList'
import PageNotFound from './PageNotFound';
import PostByCategory from './PostByCategory';

import {connect} from 'react-redux'
import { fetchAllCategories,fetchAllPosts} from '../actions'

class App extends Component {

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  render() {
    const { categories, posts } = this.props;
  
    return (<Router>
      <div className="App">
      <div className="container">
      <CategoryList categories={categories} />
          <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/:category" component={PostByCategory} />
                <Route component={PageNotFound} />
            </Switch>
          </div>
          
        </div>
      </div>
      </Router>);
  }
}

const mapStateToProps = ({ categories , posts }) => ({
  categories,
  posts
});


export default connect(mapStateToProps, { fetchAllCategories })(App);
