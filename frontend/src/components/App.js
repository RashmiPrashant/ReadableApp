import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CategoryList from './CategoryList'
//import Post from './Post'
import {connect} from 'react-redux'
import { fetchAllCategories} from '../actions'

class App extends Component {

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  render() {
    const { categories } = this.props;
    console.log("props",categories.length)

    return (
      <div className="App">
        <div className="container">
        <h3 className='appTitle'>Readable App</h3>
        {categories.length > 0 &&
          categories.map(category => (
            <CategoryList key={category.path} category= {category} />
          ))}
          
        </div>  
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});


export default connect(mapStateToProps, { fetchAllCategories })(App);
