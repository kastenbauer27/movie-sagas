import React, { Component } from 'react';

class MovieItem extends Component {
    
    goToDetails = () => {
        
    }

    render() { 
        return ( 
            <div className="movieItem">
                <img
                    src={this.props.movie.poster}
                    alt={this.props.movie.title}
                    onClick={this.goToDetails} 
                />
            </div>
         );
    }
}
 
export default MovieItem;