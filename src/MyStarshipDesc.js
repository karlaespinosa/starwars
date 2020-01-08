import React, { Component } from 'react';
import './css/MyStarshipDesc.css';

class MyStarshipDesc extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.deleteShip(this.props.id);
    }

    render() { 
        const {name, classShip, length, passengers} = this.props;
        return (
            <div className='col-12 col-sm-6 col-lg-4'>
                <div className="card MyStarshipDesc-card">
                    <div className="card-body MyStarshipDesc-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{classShip}</h6>
                        <p className="card-text MyStarshipDesc-paragraph">Length: {length}</p>
                        <p className="card-text MyStarshipDesc-paragraph">Passengers: {passengers}</p>
                        <button className='btn-dark MyStarship-button' onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>                            
            </div>
        );
    }
}
 
export default MyStarshipDesc;