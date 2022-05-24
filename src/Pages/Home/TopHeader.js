import React from 'react';
import './TopHeader.css';
import logo from '../../Assets/logo.png';
import fb from '../../Assets/fb.png';
import insta from '../../Assets/ins.png';
import amazon from '../../Assets/a.png';

const TopHeader = () => {
    return (
        <div className='top-header flexible '>

            <div className='width-control-logo '>
                <img src={logo} alt="company logo" />
            </div>
            <div className='width-control-social'>
                <div className='allicons '>
                    <a href="https://www.facebook.com/" target="_blank" className='icons'><img src={fb} alt="" /></a>
                    <a href="https://www.instagram.com/" target="_blank" className='icons'><img src={insta} alt="" /></a>
                    <a href="https://www.amazon.com/" target="_blank" className='icons'><img src={amazon} alt="" /></a>
                </div>
            </div>

        </div>
    );
};

export default TopHeader;