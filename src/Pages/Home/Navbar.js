import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import photo from '../../Assets/default img.png'
import { useQuery } from 'react-query';
import useProfile from '../Hooks/useProfile';



const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };


    if (loading) {
        <Loading></Loading>
    }


    const [img] = useProfile(user);


    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/tools'>Tools</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/myportfolio'>My Portfolio</Link></li>

        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li>{user ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> : <Link to='login'>Login</Link>}</li>


    </>

    const specialmenuItems = <>
        {
            user && <li><Link className='uppercase font-bold pr-0' to='/'>{user.displayName}</Link></li>
        }
        {
            user && <li><Link to='/'><div class="avatar online">
                <div class="w-12 rounded-full">
                    {
                        img ?
                            <img src={img} alt="" />
                            :
                            <img src={photo} alt="" />
                    }
                </div>
            </div></Link></li>

        }


    </>

    return (
        <div class="navbar bg-primary text-white flex justify-between lg:justify-between ">

            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-primary rounded-box w-52 ">
                    {menuItems}
                </ul>

            </div>



            <div class="navbar-center hidden lg:flex ">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className='flex justify-center'>
                <ul class="menu menu-horizontal ">
                    {specialmenuItems}
                </ul>



            </div>
            <div className="">
                <label tabindex="1" for="side-drawer" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>

        </div>
    );
};

export default Navbar;