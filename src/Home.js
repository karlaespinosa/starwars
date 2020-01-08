import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/Home.css';

class Home extends Component {
    render() { 
        return (
            <div className='Home'>
                <div className='container'>
                    <div className='row justify-content-start'>
                        <div className='col-12'>
                            <div className='Home-link-container'>                              
                                <ul>
                                    <li className='Home-item'><Link to='/' className='Home-link'>HOME</Link></li>
                                    <li className='Home-item'><Link to='/mystarships' className='Home-link'>MY STARSHIPS</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;