import React from 'react';
import logo from '../../img/Logo.png'
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Destinations', link: '/destinations' },
        { id: 2, name: 'Hotels', link: '/hotels' },
        { id: 3, name: 'Flights', link: '/flights' },
        { id: 4, name: 'Booking', link: '/booking' },
        { id: 5, name: 'Login', link: '/login' }
    ]
    return (
        <nav className='flex justify-between items-center pt-12 h-10 px-36'>
            <img className='w-28' src={logo} alt="" />
            <div>
                <ul className='flex justify-center items-center font-GoogleSans'>
                    {
                        routes.map(route => <Link
                            key={route.id}
                            route={route}
                        ></Link>)
                    }
                    <li className='border border-stone-600 rounded-md py-2.5 px-5'><a href="/sign-up">Sign up</a></li>
                </ul>
            </div>
        </nav >
    );
};

export default Navbar;