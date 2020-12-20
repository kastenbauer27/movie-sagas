import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    state = {  }
    render() { 
        return (
            <div className="movieDetails">
                {this.props.reduxState.movieDetails.map(
                    movie => {
                        return (
                            <div key={movie.id}>
                                <h2>{movie.title}</h2>
                                <img src={movie.poster} alt={movie.title} />
                                <p>{movie.description}</p>
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
 
export default connect(mapStateToProps)(Details);