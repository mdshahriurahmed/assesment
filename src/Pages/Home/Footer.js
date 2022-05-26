import React from 'react';
import { Link } from 'react-router-dom';

import fb from '../../Assets/fb.png';
import insta from '../../Assets/ins.png';
import amazon from '../../Assets/a.png';

const Footer = () => {
    return (
        <footer class="footer footer-center p-10  bg-accent text-base-content rounded">
            <div class="grid grid-flow-col gap-4 text-white ">
                <Link to='/' class="link link-hover">Home</Link>
                <Link to='/blogs' class="link link-hover">Blogs</Link>
                <Link to='/' class="link link-hover">Portfolio</Link>

            </div>
            <div>
                <div class="grid grid-flow-col gap-4 ">

                    <Link to="https://www.facebook.com/" target="_blank" className='icons'><img src={fb} alt="" /></Link>
                    <Link to="https://www.instagram.com/" target="_blank" className='icons'><img src={insta} alt="" /></Link>
                    <Link to="https://www.amazon.com/" target="_blank" className='icons'><img src={amazon} alt="" /></Link>
                </div>
            </div>
            <div className='text-white '>
                <p>Copyright © 2022 - All right reserved by BD Tools Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;