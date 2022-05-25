import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import CompanyProfile from '../CompanyProfile/CompanyProfile';
import ContactUs from '../ContactUs/ContactUs';
import HomeTools from '../HomeTools/HomeTools';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeTools></HomeTools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <CompanyProfile></CompanyProfile>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;