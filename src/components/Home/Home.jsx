import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList';

class Home extends Component {
    
    render() { 
        return ( 
            <div className="home">
                <h2>Movie Collection</h2>
                <h3>Select A Movie to See Details</h3>
                <MovieList />
            </div>
         );
    }
}
 
export default Home;