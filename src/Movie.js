import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/Movie.css'

class Movie extends Component {
    render() {
        return (
            <div className='col-12'>
                <div className="Movie-card card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.director}</h6>
                        <p className="card-text">{this.props.plot}</p>
                        <Link to={{pathname: `/${this.props.id}/startships/`, state: this.props.ships, name: this.props.title}} className='Movie-link'>See Starships</Link>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Movie;