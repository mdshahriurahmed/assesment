import React from 'react';
import profile1 from '../../Assets/c1.webp'
import profile2 from '../../Assets/c2.webp'
import profile3 from '../../Assets/c3.webp'
import profile4 from '../../Assets/c4.webp'
import './CompanyProfile.css'

const CompanyProfile = () => {
    return (
        <div className='px-10 bg-black py-8 mt-12'>
            <h1 className='text-4xl text-white text-center '>Company Profile</h1>
            <div className='profile_text mt-5'>
                <p className='pr-4 text-white text-center '>BD Tools Co., Ltd. is mainly business TCT circular saw blades of research and development, production and processing, sell for building materials, aluminum alloy products, metal products, precision machinery, and hardware tools.

                    At present, there are eight series of saw blades that are mainly produced for research and development. Multi-ripping saw blades, wood saw blades, electronic saw blades, Aluminum saw blades, Acrylic saw blades, Plywood saw blades, Cutting bamboo saw blades, To score saw blades, Grinding wheel saw blades, different saw-tooth shapes are designed according to different cutting objects, with characteristics of shape, durable and stable. There are two main brands developed independently: PLH and LS. Among them, multi-saws and woodworking saw blades enjoy a good reputation in the country, and saw blades and other saw blades have received excellent feedback from customers. The company adopts professional R& D team, excellent cooperation team and advanced machinery and equipment to manufacture more high-quality saw blades to meet the cutting needs of customers. The company has always been adhering to the principle of "customer first", constantly improving itself and providing better service for customers.

                    If you are interested in any of our products, please you contact us in any time. We look forward to establishing successful business relationships with new customers around the world in the near future.
                    BD Tools Co., Ltd.

                </p>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-4 gap-5 justify-center mt-8 '>
                <div >
                    <img className='rounded-lg ' src={profile1} alt="" />
                </div>
                <div >
                    <img className='rounded-lg ' src={profile2} alt="" />
                </div>
                <div>
                    <img className='rounded-lg ' src={profile3} alt="" />
                </div>
                <div>
                    <img className='rounded-lg ' src={profile4} alt="" />
                </div>

            </div>

        </div>
    );
};

export default CompanyProfile;