import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
const ResetModal = () => {
    const [errorr, setErrorr] = useState('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const emailRef = useRef('');
    const resetPassword = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;

        if (email === '') {
            setErrorr('Please enter email')
            return;
        }
        else {
            await sendPasswordResetEmail(email);
            toast.success('Email sent for password reset');
            emailRef.current.value = '';
        }
    }

    return (
        <div>
            <input type="checkbox" id="reset-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">

                    <h3 className="text-lg font-bold text-center">Forgot Password</h3>
                    <form className='flex flex-col justify-center items-center  mt-3'>
                        <input type="email" ref={emailRef} placeholder='Enter Email' className='border border-gray w-full max-w-xs p-2 rounded-lg' />
                        <label htmlFor="reset-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <input htmlFor="reset-modal" onClick={resetPassword} className=' rounded-lg bg-primary px-8 py-1 mt-3 text-white text-bold cursor-pointer' type="submit" value="Submit" />

                    </form>


                </div>
            </div>

        </div>
    );
};

export default ResetModal;