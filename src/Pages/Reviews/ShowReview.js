import React, { useEffect, useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ShowReview = ({ review }) => {
    const { client, rating, comment } = review;
    const ratings = parseInt(rating);


    return (
        <div >
            <div class="card lg:max-w-lg bg-base-100 shadow-lg">
                <div class="card-body">
                    <h2 class="text-success text-center text-2xl">{client}</h2>
                    <div>

                        <h1 className='text-center text-secondary text-xl'><FontAwesomeIcon icon={faStar} /><span className='ml-1'>{ratings}</span></h1>
                        <p className='text-center'>{comment}</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShowReview;