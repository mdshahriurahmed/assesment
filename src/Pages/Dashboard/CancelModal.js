import React from 'react';
import { toast } from 'react-toastify';

const CancelModal = ({ _id, refetch }) => {

    const handleDelete = _id => {
        fetch(`http://localhost:5000/myorder/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Order Cancelled Successfully');
                    refetch();


                }
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