import React from 'react';

const UserRow = ({ user, index }) => {
    const { email, displayName, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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