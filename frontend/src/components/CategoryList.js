import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import Category from './Category'

class CategoryList extends Component {
    render(){
        const { categories } = this.props;
        return(
            <div>
                <div className='appTitle'><h1>Readable App</h1></div>
                <ul className='list-category'>
                <li className='category-list-item' key="homePage"><Link to="/"><button>All Post </button></Link> </li>
                {categories.length > 0 &&
                categories.map(category => (
                    <li className='category-list-item' key={category.path}>
                        <Category key={category.path} {...category} />
                    </li>
                ))}
                </ul>   
            </div>
        )
    }
}

export default connect()(CategoryList)
