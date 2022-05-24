import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Clients from '../Clients/Clients';
import Reviews from '../Reviews/Reviews';
import Tools from '../Tools/Tools';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Clients></Clients>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;