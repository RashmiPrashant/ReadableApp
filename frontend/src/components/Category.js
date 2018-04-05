import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import { fetchPostsByCategories} from '../actions'

const Category = ({ name, dispatch }) => (
    
    <Link to={`/${name}`}>
      <button
        onClick={() => dispatch(fetchPostsByCategories(name))}>
        {name}
      </button>
    </Link>
  );

export default connect()(Category)