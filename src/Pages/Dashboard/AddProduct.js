import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';




const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();



    const imageStorageKey = '869789c7de8f6363e7dd47fde61f22e8';


    const onSubmit = async data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })

            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tool = {
                        img: img,
                        name: data.name,
                        available_quantity: data.available_quantity,
                        min_order_quantity: data.minimum_order_quantity,
                        price: data.price,
                        description: data.description

                    }
                    fetch('http://localhost:5000/latesttool', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Barer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('New Tool Added Successfully');
                                reset();
                            }
                            else {
                                toast.error('Failled to add the doctor');
                            }
                        })

                }

            })


    }
    return (
        <div className='flex  justify-center items-center mb-40'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-4xl text-white text-center'>Add A Product</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Name" className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" placeholder="Enter available quantity" className="input input-bordered w-full max-w-xs"
                                {...register("available_quantity", {
                                    required: {
                                        value: true,
                                        message: 'Available quantity is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.available_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available_quantity.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Minimum Order Quantity</span>
                            </label>
                            <input type="number" placeholder="Enter minimum order quantity" className="input input-bordered w-full max-w-xs"
                                {...register("minimum_order_quantity", {
                                    required: {
                                        value: true,
                                        message: 'Minimum order quantity is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.minimum_order_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimum_order_quantity.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Enter Price" className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="number" placeholder="Write Description" className="textarea input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>



                        <input className='btn btn-block btn-secondary' value="Add" type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;