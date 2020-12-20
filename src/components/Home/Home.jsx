import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList';


class Home extends Component {

    goToAddMovie = () => {
        this.props.history.push('/addmovie');
    }
    
    render() { 
        return ( 
            <div className="home">
                <h2>Movie Collection</h2>
                <h3>Select A Movie to See Details</h3>
                <button onClick={this.goToAddMovie}>Or Add a Movie!</button>
                <MovieList />
            </div>
         );
    }
}
 
export default Home;