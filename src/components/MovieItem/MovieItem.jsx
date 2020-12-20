import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MovieItem extends Component {
    
    goToDetails = () => {
        console.log('clicked on poster for', this.props.movie.title);
        this.props.history.push('/details', this.props.movie); 
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
 
export default withRouter(MovieItem);