import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { faUsersLine, faCircleDollarToSlot, faStar, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const BusinessSummary = () => {
    return (
        <div >
            <h1 className='text-center text-4xl mt-12 mb-8 text-white'>Business Summary</h1>
            <div className='flex justify-center'>
                <div class="stats stats-vertical lg:stats-horizontal md:stats-horizontal shadow">

                    <div class="stat place-items-center">
                        <div class="stat-title">
                            <h1 className='text-5xl text-primary mb-2 px-10'><FontAwesomeIcon icon={faUsersLine} /></h1>
                        </div>
                        <div class="stat-value">31K+</div>
                        <div class="stat-desc text-primary font-bold">Happy Customers</div>
                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-title">
                            <h1 className='text-5xl text-primary mb-2 px-10'><FontAwesomeIcon icon={faCircleDollarToSlot} /></h1>
                        </div>
                        <div class="stat-value ">4,200M+</div>
                        <div class="stat-desc text-primary font-bold">↗︎ Annual Revenue</div>
                    </div>

                    <div class="stat place-items-center">
                        <div class="stat-title">
                            <h1 className='text-5xl text-primary px-10 mb-2 '><FontAwesomeIcon icon={faStar} /></h1>
                        </div>
                        <div class="stat-value">1,200</div>
                        <div class="stat-desc text-primary font-bold">Reviews</div>
                    </div>
                    <div class="stat place-items-center ">
                        <div class="stat-title">
                            <h1 className='text-5xl text-primary mb-2 px-10'><FontAwesomeIcon icon={faScrewdriverWrench} /></h1>
                        </div>
                        <div class="stat-value">50</div>
                        <div class="stat-desc text-primary font-bold">Tools</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;