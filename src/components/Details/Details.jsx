import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Details extends Component {
    
    backToHome = () => {
        this.props.history.push('/');
    }

    render() { 
        return (
            <div className="movieDetails">
                {this.props.reduxState.movieDetails.map(
                    movie => {
                        return (
                            <div key={movie.id}>
                                <h2>{movie.title}</h2>
                                <img src={movie.poster} alt={movie.title} />
                                <h3>Genres: {movie.name}</h3>
                                <p>{movie.description}</p>
                                <button onClick={this.backToHome}>Back To Movie List</button>
                            </div>
                        )
                    }
                )}
                    
            </div>
            
         );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})
 
export default connect(mapStateToProps)(withRouter(Details));