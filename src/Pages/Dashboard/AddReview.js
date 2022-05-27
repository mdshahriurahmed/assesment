import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {

    const [error, setError] = useState('');
    const [error2, setError2] = useState('');
    const [user] = useAuthState(auth);
    const navigate = useNavigate();


    const handleSubmit = event => {

        event.preventDefault();
        const rating = event.target.rating.value;
        const comment = event.target.review.value;
        if (!rating || rating === 'Give Rating') {
            setError('Please select a value');
            return;
        }
        if (!comment) {
            setError2('Please Write a review');
            return;
        }
        const ratingData = {
            client: user.displayName,
            rating: rating,
            comment: comment
        }
        fetch('https://fierce-dawn-28408.herokuapp.com/rating', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ratingData)
        })
            .then(res => res.json)
            .then(data => {
                if (data) {
                    navigate('/dashboard/myorders')
                    toast.success('Thank For your Rating');
                }
            })
    }
    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class=" text-3xl text-center text-secondary">Add Review</h2>
                    <form onSubmit={handleSubmit}>
                        <select class="select select-secondary w-full max-w-xs " name='rating'>
                            <option disabled selected>Give Rating</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>

                        </select>
                        <p className='text-primary'>{error}</p>
                        <textarea name='review' class="textarea textarea-secondary w-full max-w-xs mt-6" placeholder="Write Review"></textarea>
                        <p className='text-primary'>{error2}</p>
                        <input className='btn btn-secondary text-center w-full mt-5' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddReview;