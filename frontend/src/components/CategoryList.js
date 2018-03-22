import React, { Component } from 'react';

class CategoryList extends Component {
    render(){
        const { category } = this.props;
        //console.log("category", category)
        
        return(
            <div>
                {category.name}  
            </div>
        )
    }
}

export default CategoryList
