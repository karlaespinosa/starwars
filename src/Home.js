import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/Home.css';

class Home extends Component {
    render() { 
        return (
            <div className='Home'>
                <div className='container'>
                    <div className='row justify-content-start'>
                        <div className='col-12 col-sm-4 col-lg-4'>
                            <div className='Home-link-container'>
                                <Link to='/' className='Home-link'>HOME</Link>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6 col-lg-6'>
                            <div><h3 className='Home-title-sec'>GEORGE LUCAS' MOVIES</h3></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;