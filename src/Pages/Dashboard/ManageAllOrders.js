import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import Loading from '../Loading/Loading';
import CancelModal from './CancelModal';
import ShippmentModal from './ShippmentModal';

const ManageAllOrders = () => {
    const [order, setOrder] = useState('');
    const [sorder, setSOrder] = useState('');
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/allorders`, {
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
            <h1 className='text-4xl text-white text-center font-medium mb-10 '>Manage All Orders</h1>
            <div class="overflow-x-scroll  overflow-y-auto pb-10">
                <table class="table w-96 pb-10">

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>

                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Total Cost</th>
                            <th>Payment Status</th>
                            <th>Cancel Order</th>
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
                                                    <h1 className='text-success'> Pending..</h1>
                                            }
                                        </>
                                        :
                                        <h1 className='text-primary'> Unpaid</h1>
                                    }</td>
                                    <td>{order.paid ?
                                        <>
                                            {
                                                order.approved ?
                                                    <label disabled onClick={() => setOrder(order)} for="cancel-modal" class="btn btn-xs btn-primary text-white px-4">Cancel Order</label>
                                                    :
                                                    <label onClick={() => setSOrder(order)} for="shippment-modal" class="btn btn-xs btn-secondary  text-primary"> Confirm Shipped</label>
                                            }

                                        </>
                                        :
                                        <>
                                            <label onClick={() => setOrder(order)} for="cancel-modal" class="btn btn-xs btn-primary text-white px-4">Cancel Order</label>

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
                        {
                            order && <ShippmentModal
                                key={sorder._id}
                                sorder={sorder}
                                refetch={refetch}
                            >
                            </ShippmentModal>
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageAllOrders;