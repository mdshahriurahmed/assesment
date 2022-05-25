import React from 'react';

const ContactUs = () => {
    return (
        <div className='flex justify-center mt-16'>
            <div class="card lg:w-1/2 md:w-1/2 bg-base-100 shadow-xl">

                <div class="card-body items-center text-center">
                    <h1 className='text-4xl mb-5'>Contact Us</h1>
                    <div>
                        <input type="text" placeholder="Name" class="input input-bordered input-error w-96 " required />
                    </div>
                    <div>
                        <input type="text" placeholder="email" class="input input-bordered input-error w-96 " required />
                    </div>
                    <div>
                        <textarea class="textarea textarea-error w-96" placeholder="Bio" required></textarea>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-primary text-white">Send Message</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;