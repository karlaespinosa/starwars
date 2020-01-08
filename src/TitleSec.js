import React, { Component } from 'react';
import './css/TitleSec.css';

class TitleSec extends Component {
    render() { 
        return (
            <div className='row'>
                <div className='col-12'>
                    <div><h3 className='TitleSec-title'>{this.props.title}</h3></div>
                </div>
            </div>
        );
    }
}
 
export default TitleSec;