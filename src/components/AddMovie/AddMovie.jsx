import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
    state = { 
        movie: {
            title: '',
            poster: '',
            description: '',
            genre_id: '',
        }
     }

    backToHome = () => {
        this.props.history.push('/');
    }

    handleChangeFor = (event, propertyName) => {
        event.preventDefault();
        this.setState({
            movie: {
                ...this.state.movie,
                [propertyName]: event.target.value
            }
        })
    }

    saveMovie = (event) => {
        event.preventDefault();
        console.log('saving movie to collection');
        this.props.dispatch({
            type: 'SAVE_MOVIE',
            payload: this.state.movie
        })
    }

    render() {
        console.log(this.state.movie); 
        return ( 
            <div className="add-movie">
                <h2>Add a Movie</h2>
                <form onSubmit={(event) => this.saveMovie(event)}>
                    <input type="text" placeholder="Movie Title" onChange={(event) => this.handleChangeFor(event, 'title')}/>
                    <input type="text" placeholder="Poster URL" onChange={(event) => this.handleChangeFor(event, 'poster')}/>
                    <textarea placeholder="Movie Description" onChange={(event) => this.handleChangeFor(event, 'description')}/>
                    <select name="categories" id="movie-categories" onChange={(event) => this.handleChangeFor(event, 'genre_id')}>
                        <option value="1">Adventure</option>
                        <option value="2">Animated</option>
                        <option value="3">Biographical</option>
                        <option value="4">Comedy</option>
                        <option value="5">Disaster</option>
                        <option value="6">Drama</option>
                        <option value="7">Epic</option>
                        <option value="8">Fantasy</option>
                        <option value="9">Musical</option>
                        <option value="10">Romantic</option>
                        <option value="11">Science Fiction</option>
                        <option value="12">Space-Opera</option>
                        <option value="13">Superhero</option>
                    </select>
                    <button onClick={this.backToHome}>Cancel</button>
                    <button type="submit">Save</button>
                </form>
            </div>
         );
    }
}
 
export default connect()(AddMovie);