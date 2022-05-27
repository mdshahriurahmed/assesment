import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ShippmentModal = ({ sorder, refetch, isLoading }) => {
    const navigate = useNavigate();
    const { _id, totalCost, clientEmail, clientName,
        toolId, img, toolName, quantity, phone, location, paid, t_id } = sorder
    const handleShippment = _id => {
        const updatedOrder = {
            totalCost: totalCost,
            clientEmail: clientEmail,
            clientName: clientName,
            toolId: toolId,
            img: img,
            toolName: toolName,
            quantity: quantity,
            phone: phone,
            location: location,
            paid: paid,
            approved: true,
            t_id: t_id
        }
        fetch(`https://fierce-dawn-28408.herokuapp.com/updatepayment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedOrder)
        })
            .then(res => res.json())
            .then(data => {

                refetch();


            })
    }



    return (


        <div>
            <input type="checkbox" id="shippment-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Confirm Shippment</h3>

                    <div className='flex justify-between px-8'>
                        <div class="modal-action">
                            <label for="shippment-modal" onClick={() => handleShippment(_id)} class="btn btn-primary">Confirm</label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippmentModal;