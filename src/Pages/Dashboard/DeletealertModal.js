import React from 'react';
import { toast } from 'react-toastify';

const DeletealertModal = ({ proceed, refetch, }) => {

    const { _id } = proceed;

    const handleDelete = _id => {


        //delete
        fetch(`https://bd-tools-server-side.vercel.app/mytools/${_id}`, {
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




    }
    return (
        <div>

            <input type="checkbox" id="delete-tool-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete the tool!!</h3>

                    <div class="modal-action">
                        <label onClick={() => handleDelete(_id)} for="delete-tool-modal" class="btn btn-success">Yes</label>
                        <label for="delete-tool-modal" class="btn btn-primary">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletealertModal;