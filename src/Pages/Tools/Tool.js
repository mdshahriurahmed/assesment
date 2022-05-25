import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, img, name, available_quantity, min_order_quantity, price, description } = tool;

    const navigate = useNavigate();
    const handlePurchase = _id => {
        navigate(`/purchase/${_id}`);
    }
    return (
        <div class="card lg:max-w-sm bg-base-100 shadow-xl pt-10">
            <figure><img className='px-5' style={{ width: "220px" }} src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="text-2xl font-bold text-primary">{name}</h2>
                <h3 className='text-xl'><span className='font-bold'>USD$ {price}</span> <span className='text-accent'>/ Piece</span></h3>
                <h3 className='text-accent '>Available Qty: {available_quantity} Piece</h3>
                <h3 className='text-accent '>Min Order Qty: {min_order_quantity} Piece</h3>
                <p>{description}</p>
                {
                    available_quantity < min_order_quantity ?
                        <p className='text-primary text-center'>Quantity Shortage</p>
                        :
                        <div class="card-actions justify-center mt-5">
                            <button onClick={() => handlePurchase(_id)} class="btn btn-secondary text-black">Purchase</button>
                        </div>
                }

            </div>
        </div>
    );
};

export default Tool;