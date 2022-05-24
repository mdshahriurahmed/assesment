import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Clients from '../Clients/Clients';
import Tools from '../Tools/Tools';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Clients></Clients>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;