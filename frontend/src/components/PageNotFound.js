import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'


class PageNotFound extends Component {
    render(){
        return(
            <div>
                <span>Page not found !!
                    </span>
                    <Link to="/">
                    <button>Back to home</button>
                    </Link>
            </div>
        )
    }
}

export default PageNotFound;