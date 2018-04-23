import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { fetchPostsByCategories} from '../actions'

const Category = ({ name, dispatch }) => (
    
    <Link to={`/${name}`}>
      <Button
      bsSize="large" bsStyle="primary"
        onClick={() => dispatch(fetchPostsByCategories(name))}>
        {name}
      </Button>
    </Link>
  );

export default connect()(Category)