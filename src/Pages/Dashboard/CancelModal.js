import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const CancelModal = ({ order, refetch, isLoading }) => {

    const [tool, setTool] = useState({});
    const { _id } = order;
    console.log(order);
    const handleDelete = _id => {

        const url = `https://bd-tools-server-side.vercel.app/myorder2/${_id}`;
        const pid = _id;
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                const q = parseInt(data.quantity);
                console.log(data);
                const tid = data.toolId;




                //--------
                const url1 = `https://bd-tools-server-side.vercel.app/purchase/${data.toolId}`;

                fetch(url1, {
                    method: 'GET',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {



                        const newquantity = parseInt(data.available_quantity) + q;

                        const updatedTool = {
                            img: data.img,
                            name: data.name,
                            available_quantity: newquantity,
                            min_order_quantity: data.min_order_quantity,
                            price: data.price,
                            description: data.description
                        };

                        fetch(`https://bd-tools-server-side.vercel.app/newtool/${tid}`, {
                            method: 'PUT',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(updatedTool)
                        })
                            .then(res => res.json())
                            .then(data => {
                                //delete
                                fetch(`https://bd-tools-server-side.vercel.app/myorder/${_id}`, {
                                    method: 'DELETE',
                                    headers: {
                                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                                    }
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log(data);
                                        if (data.deletedCount) {

                                            toast.success('Order Cancelled Successfully');
                                            refetch();




                                        }
                                    })
                                //delete

                            })



                    })
                //-----

            })



    }

    return (
        <div>

            <input type="checkbox" id="cancel-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure, you want to cancel the order!</h3>
                    <p class="py-4">Order Id: {_id}</p>
                    <div class="modal-action flex justify-between">
                        <label for="cancel-modal" class="btn btn-sm btn-secondary">Go Back</label>
                        <label onClick={() => handleDelete(_id)} for="cancel-modal" class="btn btn-sm btn-primary">Confirm Cancellation!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelModal;