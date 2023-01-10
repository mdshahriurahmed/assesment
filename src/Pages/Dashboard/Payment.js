import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3YPGJ3uHlZ3XtGsQZiyC1qoMD5wnyFiIX1igAdWGCuTdoPqA3r2t7FIMzS1siZxRGXARzCfliMjP3kRdFTVvd0006ksoJGZ5');

const Payment = () => {
    const { id } = useParams();
    const url = `https://bd-tools-server-side.vercel.app/myorders/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())

    )

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-2xl text-white">{id}
            </h2>


            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <div className='flex justify-center'>
                        <img src={order.img} className='w-40' alt="" />
                    </div>
                    <h2 class="card-title text-2xl text-primary">Pay for {order.toolName}</h2>
                    <h3>Order Quantity: {order.quantity}</h3>
                    <h2>Total Cost: {order.totalCost}$</h2>
                    <h3>Customer Name: {order.clientName}</h3>
                    <h3>Phone: {order.phone}</h3>
                    <h2>Shipping Location: {order.location}</h2>


                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mb-40">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>

                </div>

            </div>
        </div>
    );
};

export default Payment;