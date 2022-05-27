import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import CancelModal from './CancelModal';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState('');
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/myorders?userEmail=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div className='mb-40'>
            <h1 className='text-4xl text-white text-center font-medium mb-10 '>My Orders</h1>
            <div class="overflow-x-auto overflow-y-auto pb-10">
                <table class="table w-full pb-10">

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
                                    <td>{order.toolName}</td>
                                    <td>{order.quantity}</td>

                                    <td>{order.totalCost}</td>
                                    <td>{order.paid ?
                                        <>
                                            {
                                                order.approved ?
                                                    <h1 className='text-success'> Shipped</h1>
                                                    :
                                                    <h1 className='text-primary'> Pending..</h1>
                                            }
                                        </>
                                        :
                                        <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-success btn-xs px-5 text-white'>Pay</button></Link>
                                    }</td>
                                    <td>{order.paid ?
                                        <>
                                            <h1>Transaction ID</h1>
                                            <p>{order.t_id}</p>
                                        </>
                                        :
                                        <>
                                            <label onClick={() => setOrder(order)} for="cancel-modal" class="btn btn-xs btn-primary text-white">Cancel Order</label>

                                        </>
                                    }


                                    </td>


                                </tr>
                            )
                        }

                        {
                            order && <CancelModal
                                key={order._id}
                                order={order}
                                refetch={refetch}
                            >
                            </CancelModal>
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;