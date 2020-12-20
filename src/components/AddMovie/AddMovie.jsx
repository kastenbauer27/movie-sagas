import React, { Component } from 'react';

class AddMovie extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="add-movie">
                <h2>Add a Movie</h2>
                <form>
                    <input type="text" placeholder="Movie Title" />
                    <input type="text" placeholder="Poster URL" />
                    <textarea placeholder="Movie Description" />
                    <select name="categories" id="movie-categories">
                        <option value="Adventure">Adventure</option>
                        <option value="Animated">Animated</option>
                        <option value="Biographical">Biographical</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Disaster">Disaster</option>
                        <option value="Drama">Drama</option>
                        <option value="Epic">Epic</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Musical">Musical</option>
                        <option value="Romantic">Romantic</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Space-Opera">Space-Opera</option>
                        <option value="Superhero">Superhero</option>
                    </select>
                </form>
            </div>
         );
    }
}
 
export default AddMovie;