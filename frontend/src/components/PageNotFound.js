import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

class PageNotFound extends Component {
    render(){
        return(
            <div className="notFound">
                <div className="notFoundMessage">
                    <h3>Page not found !!
                        </h3>
                    </div>
                    <Link to="/">
                        <Button>Back to home</Button>
                    </Link>
            </div>
        )
    }
}

export default PageNotFound;