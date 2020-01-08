import React, { Component } from 'react';
import './css/MyStarships.css';
import axios from 'axios';
import MyStarshipDesc from './MyStarshipDesc';

class MyStarships extends Component {
    constructor(props) {
        super(props);
        this.state = {shipsCreated: []}
        this.deleteCreatedShip = this.deleteCreatedShip.bind(this);
    }

    deleteCreatedShip(id) {
        axios.delete(`http://localhost:5000/starships/${id}`)
        .then(res => console.log(res.data));
        this.setState(st => ({
            shipsCreated: st.shipsCreated.filter(ship => ship._id !== id)
        }));
    }

    componentDidMount() {
        axios.get('http://localhost:5000/starships/').then(response => {
            const data = response.data;
            this.setState({shipsCreated: data});
        })
        .catch(err => console.log(err));
    }
    render() {
        const myStarships = this.state.shipsCreated.map(starship => (
            <MyStarshipDesc key={starship._id} id={starship._id} name={starship.name} classShip={starship.classShip} length={starship.length} passengers={starship.passengers} deleteShip={this.deleteCreatedShip}/>
        ));
        return (
            <section className='MyStarship-sec'>
                <div className='container'>
                    <div className='row'>
                        {myStarships}
                    </div>
                </div>
            </section>
        );
    }
}
 
export default MyStarships;