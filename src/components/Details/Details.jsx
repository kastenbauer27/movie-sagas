import React, { Component } from 'react';

class Details extends Component {
    state = {  }
    render() { 
        return (
            <div className="movieDetails">
                <p>Details Page</p>
                <p>{this.props.movie.title}</p>    
            </div>
            
         );
    }
}
 
export default Details;