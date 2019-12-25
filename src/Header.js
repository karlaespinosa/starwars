import React, { Component } from 'react';
import Home from './Home';
import logo from './img/sw-logo.png';
import './css/Header.css';

class Header extends Component {
    render() { 
        return (
            <header className='Header'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-12 col-sm-12 col-lg-3'>
                        <div className='Header-wrapper-img'>
                        <img src={logo} alt='Star Wars' className='Header-img'/>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-lg-9'>
                        <div className='Header-wrapper-text'>
                        <p className='Header-text'>A Star Wars Page</p>
                        </div>
                    </div>
                    </div>
                </div>
                <Home />
            </header>
        );
    }
}
 
export default Header;