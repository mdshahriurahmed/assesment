import React from 'react';
import Navbar from './Navbar';
import TopHeader from './TopHeader';

const Header = () => {
    return (
        <div className='sticky top-0'>
            <TopHeader></TopHeader>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;