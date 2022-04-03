import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div className="bg-[url('/src/img/Decore.png')] bg-no-repeat bg-cover">
            <Navbar></Navbar>
            <Banner></Banner>
        </div >
    );
};

export default Header;