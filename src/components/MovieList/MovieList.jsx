import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

class MovieList extends Component {

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        this.props.dispatch( {type: 'FETCH_MOVIES'} );
    }

    render() { 
        return ( 
            <div className="movieList">
                {this.props.reduxState.movies.map(
                    movie => {
                        return(
                            <MovieItem key={movie.id} movie={movie} />
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
 
export default connect(mapStateToProps)(MovieList);