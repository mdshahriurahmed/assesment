import React from 'react';
import './TopHeader.css';
import logo from '../../Assets/logo.png';
import fb from '../../Assets/fb.png';
import insta from '../../Assets/ins.png';
import amazon from '../../Assets/a.png';
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return (
        <div className='top-header flexible '>

            <div className='width-control-logo '>
                <Link to="/"><img src={logo} alt="company logo" /></Link>
            </div>
            <div className='width-control-social'>
                <div className='allicons '>
                    <Link to="https://www.facebook.com/" target="_blank" className='icons'><img src={fb} alt="" /></Link>
                    <Link to="https://www.instagram.com/" target="_blank" className='icons'><img src={insta} alt="" /></Link>
                    <Link to="https://www.amazon.com/" target="_blank" className='icons'><img src={amazon} alt="" /></Link>
                </div>
            </div>

        </div>
    );
};

export default TopHeader;