import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import useTools from '../Hooks/useTools';
import Loading from '../Loading/Loading';
import DeletealertModal from './DeletealertModal';



const ManageProduct = () => {

    const [proceed, setProceed] = useState('');
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch(`http://localhost:5000/tools`, {
        method: 'GET'
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h1 className='text-4xl text-white text-center'>Manage Products</h1>




            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 mb-40 px-20 justify-items-center'>
                {
                    tools.map(tool => <div class="card lg:max-w-sm bg-base-100 shadow-xl pt-10">
                        <figure><img className='px-5' style={{ width: "220px" }} src={tool.img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="text-2xl font-bold text-primary">{tool.name}</h2>
                            <h3 className='text-xl'><span className='font-bold'>USD$ {tool.price}</span> <span className='text-accent'>/ Piece</span></h3>
                            <h3 className='text-accent '>Available Qty: {tool.available_quantity} Piece</h3>
                            <h3 className='text-accent '>Min Order Qty: {tool.min_order_quantity} Piece</h3>
                            <p>{tool.description}</p>

                            <div class="card-actions justify-center mt-5">

                                <label for="delete-tool-modal" onClick={() => setProceed(tool)} class="btn btn-secondary text-black">Delete</label>
                            </div>


                        </div>
                    </div>


                    )
                }
                {/* start */}
                {
                    <DeletealertModal key={proceed._id}
                        proceed={proceed}
                        refetch={refetch}></DeletealertModal>
                }



                <input type="checkbox" id="delete-alert-modal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">Are you sure you want to delete!</h3>

                        <div class="modal-action">
                            <label onClick={() => setProceed(true)} for="delete-alert-modal" class="btn btn-primary">Yes</label>

                        </div>
                        <div class="modal-action">
                            <label for="delete-alert-modal" class="btn btn-primary">No</label>
                        </div>
                    </div>
                </div>




            </div>

        </div >
    );
};

export default ManageProduct;