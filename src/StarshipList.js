import React, { Component } from 'react';
import Starship from './Starship';
import './css/StarshipList.css';

class StarshipList extends Component {
    constructor(props) {
        super(props);
        this.state = {starships: this.props.location.state}
    }
    render() {
        const starships = this.state.starships.map((starship, index) => (
            <Starship key={index} url={starship}/>
        ));
        return (
            <section className='StarshipList'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='StarshipList-title'>{this.props.location.name}</h2>
                            <h5 className='StarshipList-desc'>On this Page you can find all the Starships that appear in <strong><em>{this.props.location.name}</em></strong></h5>
                        </div>
                        {starships}
                    </div>
                </div>
            </section>
        );
    }
}
 
export default StarshipList;