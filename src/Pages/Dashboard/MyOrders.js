import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myorders?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])

    console.log(user.email, orders);
    return (
        <div>
            <h1 className='text-4xl text-white text-center font-medium mb-10'>My Orders</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Total Cost</th>
                            <th>Pay</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr>
                                    <td>{orders.indexOf(order) + 1}</td>
                                    <td><div class="avatar">
                                        <div class="w-16 rounded">
                                            <img src={order.img} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div></td>
                                    <td>{order.quantity}</td>
                                    <td>{order.toolName}</td>
                                    <td>{order.totalCost}</td>
                                    <td>Blue</td>
                                    <td></td>
                                </tr>
                            )
                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;