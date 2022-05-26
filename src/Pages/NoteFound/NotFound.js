import React from 'react';
import img from '../../Assets/404.gif'

const NotFound = () => {
    return (
        <div style={{ backgroundColor: "#f1f5f9" }} className='flex justify-center items-center pt-16 pb-20'>
            <img src={img} alt="" />

        </div>
    );
};

export default NotFound;