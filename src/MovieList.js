import React, { Component } from 'react';
import './css/MovieList.css';
import axios from 'axios';
import Movie from './Movie';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {movies: []}
    }
    componentDidMount() {
        axios.get('https://swapi.co/api/films/').then(response => {
            const data = response.data.results;
            this.setState({movies: data});
        });
    }
    render() {
        const movies = this.state.movies.map(movie => (
            <Movie key={movie.episode_id} id={movie.episode_id} title={movie.title} director={movie.director} plot={movie.opening_crawl} ships={movie.starships}/>
        ));
        return (
            <section className='MovieList'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='MovieList-title'>STAR WARS FILMS THROUGH THE YEARS</h1>
                        </div>
                        {movies}
                    </div>
                </div>
            </section>
        );
    }
}
 
export default MovieList;