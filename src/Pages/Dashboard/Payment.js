import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/myorders/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())

    )



    return (
        <div>
            <h2 className="text-2xl text-white">{id}</h2>
        </div>
    );
};

export default Payment;