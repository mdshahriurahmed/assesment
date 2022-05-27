import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MyProfile.css'
import pimage from '../../Assets/default img.png'

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const email = user.email;



    const { data: myprofile, isLoading, refetch } = useQuery('myprofile', () => fetch(`https://fierce-dawn-28408.herokuapp.com/myprofile?userEmail=${email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))



    const handleSubmit = event => {
        event.preventDefault();
        const address = event.target.address.value;
        const education = event.target.edu.value;
        const linkedin = event.target.linkedin.value;
        const image = event.target.image.value;



        const updatedInfo = {
            email: email,
            displayName: user.displayName,
            address: address ? address : myprofile.address,
            education: education ? education : myprofile.education,
            linkedin: linkedin ? linkedin : myprofile.linkedin,
            img: image

        }

        fetch(`https://fierce-dawn-28408.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Information Updated Successfully');
                refetch();


            })

    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-40 mb-40'>
            <h1 className='text-5xl text-white text-center mb-5'>Profile</h1>
            <div>
                <div className='w-96 p-5 bg-white rounded-lg drop-shadow-lg'>
                    <div className='flex justify-center'>


                        <div class="avatar my-5">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                {
                                    myprofile.img ?
                                        <img src={myprofile.img} />
                                        :
                                        <img src={pimage} />
                                }
                            </div>
                        </div>

                    </div>

                    <h1 className='text-xl'>Email: {email}</h1>
                    <hr className='my-3' />
                    <h1 className='text-xl'>Name: {user.displayName}</h1>
                    <hr className='my-3' />
                    {
                        myprofile.education ?
                            <h1 className='text-xl'>Education: {myprofile.education}</h1>
                            :
                            <h1 className='text-xl text-primary'>Education: Add education</h1>
                    }
                    <hr className='my-3 ' />
                    {
                        myprofile.address ?
                            <h1 className='text-xl'>Address: {myprofile.address}</h1>
                            :
                            <h1 className='text-xl text-primary'>Address: Add address</h1>
                    }
                    <hr className='my-3' />
                    {
                        myprofile.linkedin ?
                            <h1 className='text-xl'>LinkedIn: {myprofile.linkedin}</h1>
                            :
                            <h1 className='text-xl text-primary'>LinkedIn: Add linkedin</h1>
                    }



                </div>
                <div className='w-96 p-5 bg-white rounded-lg drop-shadow-lg mt-6'>
                    <h1 className='text-2xl text-center'>Add/Update Info</h1>
                    <form action="" onSubmit={handleSubmit}>
                        {/* <div className='flex justify-center text-center'>
                            <label for="inputTag">
                                <br />
                                <div className='icon'>
                                    <h1 className='text-5xl mb-1 text-secondary '><FontAwesomeIcon icon={faCamera} /></h1>
                                </div>
                                <input id="inputTag" name='image' type="file" />
                            </label>
                        </div> */}
                        <input name='image' type="text" placeholder="Enter profile image link" class="input input-bordered shadow-lg input-secondary w-full  mt-5" />
                        <input name='edu' type="text" placeholder="Enter education" class="input input-bordered shadow-lg input-secondary w-full  mt-5" />
                        <input name='address' type="text" placeholder="Enter address" class="input input-bordered shadow-lg input-secondary w-full  mt-5" />
                        <input name='linkedin' type="text" placeholder="Enter linkedin address" class="input shadow-lg input-bordered input-secondary w-full  mt-5" />
                        <input className='mt-5 btn btn-secondary w-full shadow-lg' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;