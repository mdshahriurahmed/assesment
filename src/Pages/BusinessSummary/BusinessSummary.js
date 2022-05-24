import React from 'react';

const BusinessSummary = () => {
    return (
        <div >
            <h1 className='text-center text-4xl mt-12 mb-8 text-white'>Business Summary</h1>
            <div className='flex justify-center'>
                <div class="stats stats-vertical lg:stats-horizontal md:stats-horizontal shadow">

                    <div class="stat place-items-center">
                        <div class="stat-title">Downloads</div>
                        <div class="stat-value">31K+</div>
                        <div class="stat-desc text-secondary font-bold">Happy Customers</div>
                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-title">Users</div>
                        <div class="stat-value ">4,200M+</div>
                        <div class="stat-desc text-secondary font-bold">↗︎ Annual Revenue</div>
                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-title">New Registers</div>
                        <div class="stat-value">1,200</div>
                        <div class="stat-desc text-secondary font-bold">Reviews</div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">New Registers</div>
                        <div class="stat-value">50</div>
                        <div class="stat-desc text-secondary font-bold">Tools</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;