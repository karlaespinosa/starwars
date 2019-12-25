import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './css/Starship.css';

class Starship extends Component {
    constructor(props) {
        super(props);
        this.state = {startship: []}
    }
    componentDidMount() {
        const url = this.props.url;
        axios.get(url).then(response => {
            const data = response.data;
            this.setState({startship: data});
        });
    }
    render() {
        return (
            <div className='col-12'>
                <Link to={{pathname: `/starship/${this.state.startship.name}`, state: this.state.startship}} className='Starship-link'>
                    <div className="Starship-card card">
                        <div className="card-body">
                            <h3>{this.state.startship.name}</h3>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
 
export default Starship;