import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, displayName, role } = user;
    const makeAdmin = () => {
        fetch(`https://bd-tools-server-side.vercel.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    toast.error('Failed to create admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Admin created successfully');
                }

            })
    }
    return (
        <tr>
            <th>{index}</th>
            <td>{displayName}</td>
            <td>{email}</td>

            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs btn-secondary'>Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;