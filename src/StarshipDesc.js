import React, { Component } from 'react';
import axios from 'axios';
import TitleSec from './TitleSec';
import './css/StarshipDesc.css';

class StarshipDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: this.props.location.state, 
            isEditing: false, 
            starshipClass: this.props.location.state.starship_class,
            length: this.props.location.state.length,
            passengers: this.props.location.state.passengers
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleForm() {
        this.setState({isEditing: !this.isEditing});
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const starshipDesc = {
            name: this.state.desc.name,
            classShip: this.state.starshipClass,
            length: this.state.length,
            passengers: this.state.passengers
        }

        axios.post('http://localhost:5000/starships/add', starshipDesc)
            .then(response => console.log(response.data));

        this.setState({isEditing: false});
        this.props.history.push('/mystarships');
    }

    render() {
        let results;
           if(this.state.isEditing){
                results = (
                    <section className='StarshipDesc'>
                        <div className='container'>
                            <TitleSec title={this.state.desc.name}/>
                            <div className='row'>
                                <div className='col-12 col-sm-12 col-lg-6 StarshipDesc-center'>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.desc.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted"><strong>Manufacturer:</strong> {this.state.desc.manufacturer}</h6>
                                            <form onSubmit={this.handleSubmit}>
                                                <div className='form-group'>
                                                    <label htmlFor='starshipClass'>Starship Class</label>
                                                    <input id='starshipClass' type='text' name='starshipClass' value={this.state.starshipClass} className='form-control' onChange={this.handleChange}/>
                                                </div>
                                                <div className='form-group'>
                                                    <label htmlFor='length'>Length</label>
                                                    <input id='length' type='text' name='length' value={this.state.length} className='form-control' onChange={this.handleChange}/>
                                                </div>
                                                <div className='form-group'>
                                                    <label htmlFor='passengers'>Passengers</label>
                                                    <input id='passengers' type='text' name='passengers' value={this.state.passengers} className='form-control' onChange={this.handleChange}/>
                                                </div>
                                                <button className='btn-dark StarshipDes-btn'>Save Changes</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            } else {
                results = (
                    <section className='StarshipDesc'>
                        <div className='container'>
                            <TitleSec title={this.state.desc.name}/>
                            <div className='row'>
                                <div className='col-12 col-sm-12 col-lg-6 StarshipDesc-center'>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.desc.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted"><strong>Manufacturer:</strong> {this.state.desc.manufacturer}</h6>
                                            <p className="card-text"><strong>Model:</strong> {this.state.desc.model}</p>
                                            <p className="card-text"><strong>Starship Class:</strong> {this.state.desc.starship_class}</p>
                                            <p className="card-text"><strong>Cost:</strong> ${this.state.desc.cost_in_credits} galactic credits</p>
                                            <p className="card-text"><strong>Length:</strong> {this.state.desc.length} meters</p>
                                            <p className="card-text"><strong>Crew needed:</strong> {this.state.desc.crew} people</p>
                                            <p className="card-text">This Starship can transport {this.state.desc.passengers} people</p>
                                            <p className="card-text">The maximun speed of this Starship is {this.state.desc.max_atmosphering_speed}</p>
                                            <p className="card-text"><strong>MGLT:</strong> {this.state.desc.MGLT} megalight</p>
                                            <p className="card-text"><strong>Capacity:</strong> {this.state.desc.cargo_capacity} kilograms</p>
                                            <p className="card-text">Number of Pilots that have been piloted this Starship: {this.state.desc.pilots.length}</p>
                                            <button type="button" className="btn btn-dark" onClick={this.toggleForm}>Edit Starship Information</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>  
                )
            }
        return results;
    }
}
 
export default StarshipDesc;