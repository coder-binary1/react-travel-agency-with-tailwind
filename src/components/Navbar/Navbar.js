import React from 'react';
import logo from '../../img/Logo.png'
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Destinations', link: '/destinations' },
        { id: 2, name: 'Hotels', link: '/hotels' },
        { id: 3, name: 'Flights', link: '/flights' },
        { id: 4, name: 'Booking', link: '/booking' },
        { id: 5, name: 'Login', link: '/login' },
        { id: 5, name: 'Sign up', link: '/sign-up' }
    ]
    return (
        <nav className='flex justify-between px-36 pt-12 pb-[636px]'>
            <img className='w-28' src={logo} alt="" />
            <div>
                <ul className='flex justify-center'>
                    {
                        routes.map(route => <Link
                            key={route.id}
                            route={route}
                        ></Link>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;