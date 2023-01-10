import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import ShowReview from './ShowReview';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://bd-tools-server-side.vercel.app/reviews', {
        method: 'GET',

    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mx-40'>
            <h1 className='text-center text-4xl mt-12 mb-8  text-white'>Reviews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <ShowReview key={review._id}
                        review={review}></ShowReview>)
                }
            </div>

        </div>
    );
};

export default Reviews;