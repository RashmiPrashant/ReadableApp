import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { fetchPostsByCategories} from '../actions'
import PropTypes from "prop-types";

const Category = ({ name, dispatch }) => (
    
    <Link to={`/${name}`}>
      <Button
      bsSize="large" bsStyle="primary"
        onClick={() => dispatch(fetchPostsByCategories(name))}>
        {name}
      </Button>
    </Link>
  );

Category.propTypes = { 
    posts: PropTypes.array 
 }
export default connect()(Category)