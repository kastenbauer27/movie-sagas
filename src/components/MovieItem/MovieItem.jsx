import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieItem extends Component {
    
    goToDetails = () => {
        console.log('clicked on poster for', this.props.movie.title);
        this.props.dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: this.props.movie.id
        });
        this.props.history.push('/details'); 
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
 
export default connect()(withRouter(MovieItem));