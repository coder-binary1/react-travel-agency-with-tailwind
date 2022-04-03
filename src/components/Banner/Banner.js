import React from 'react';
import img from '../../img/Traveller.png'

const Banner = () => {
    return (
        <div className='flex justify-between items-center mt-7 px-36'>
            <div className='py-28'>
                <h4 className='font-Poppins font-bold text-xl uppercase text-orange-600'>Best Destinations around the world</h4>
                <h2 className='font-Volkhov text-7xl font-bold mt-6 w-545 leading-90'>Travel, enjoy and live a new and full life</h2>
                <p className='w-470 mt-7 font-Poppins font-medium leading-7'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div className='flex mt-7'>
                    <button className='bg-yellow-500 mr-11 text-white py-5 px-7	font-GoogleSans font-medium text-lg rounded-md'>Find out more</button>
                </div>
            </div>
            <img className='w-765' src={img} alt="" />

        </div>
    );
};

export default Banner;