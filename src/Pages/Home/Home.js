import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import CompanyProfile from '../CompanyProfile/CompanyProfile';
import Reviews from '../Reviews/Reviews';
import Tools from '../Tools/Tools';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <CompanyProfile></CompanyProfile>
        </div>
    );
};

export default Home;