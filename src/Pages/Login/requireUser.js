import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

import Loading from '../Loading/Loading';


const RequireUser = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [admin, adminLoading] = useAdmin(user);

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (user && !admin) {
        console.log(admin);
        return children;

    }
    else {
        signOut(auth);
        localStorage.removeItem('accessToken');
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

};

export default RequireUser;