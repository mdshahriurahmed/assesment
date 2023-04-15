import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {

    const [user, loading] = useAuthState(auth);

    if (loading) {
        <Loading></Loading>
    }
    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile ">
            <input id="side-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center mt-10">

                <Outlet></Outlet>



            </div>
            <div class="drawer-side ">
                <label for="side-drawer " class="drawer-overlay "></label>

                <ul class="menu p-4 overflow-y-auto w-80  bg-secondary text-base-content">

                    <h1 className='text-2xl text-center font-bold text-primary'>Dashboard</h1>

                    <li className='text-xl font-medium'><Link to='/dashboard'><FontAwesomeIcon icon={faUserCircle} /> My Profile</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;