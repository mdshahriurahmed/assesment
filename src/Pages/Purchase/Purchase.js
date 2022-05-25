import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { _id } = useParams();
    return (
        <div>
            <h1 className='text-5xl text-center text-white my-8'>Purchase</h1>
            <div class="hero min-h-screen bg-base-200">
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 px-10'>
                    <div>
                        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;