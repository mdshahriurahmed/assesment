import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './MyProfile.css'
import pimage from '../../Assets/default img.png'

const MyProfile = () => {










    return (
        <div className='px-40 mb-40'>
            <h1 className='text-5xl text-white text-center mb-5'>Hello World</h1>

        </div>
    );
};

export default MyProfile;