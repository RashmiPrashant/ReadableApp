 import React, { Component } from 'react';
import '../App.css';
import {  BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import HomePage from './HomePage'
import CategoryList from './CategoryList'
import PageNotFound from './PageNotFound';
import PostByCategory from './PostByCategory';
import PostDetails from './PostDetails';
import EditComment from './EditComment';
import EditPost from './EditPost';
import {connect} from 'react-redux'
import { fetchAllCategories} from '../actions'
import CreatePostPage from './CreatePostPage';

class App extends Component {

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  render() {
    const { categories } = this.props;
  
    return (<Router>
      <div className="App">
        <div className="container">
        <CategoryList categories={categories} />
        <div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/editpost/:id" component={EditPost} />
            <Route exact path="/editcomment/:id" component={EditComment} />
            <Route exact path="/createpost" component={CreatePostPage} />
            <Route exact path="/:category" component={PostByCategory} />
            <Route exact path="/:category/:post_id" component={PostDetails}/>
            <Route exact path='/404' component={PageNotFound}/>
            
          </Switch>
          </div>
        </div>
      </div>
      </Router>);
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});


export default connect(mapStateToProps, { fetchAllCategories })(App);
