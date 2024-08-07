import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li >
                    <Link href="/team-details/1">About Us</Link>
                    {/* 
                        <li><Link href="/team-details/1">Team Details</Link></li>
                        
                    </ul> */}
                </li>

                <li>
                    <Link href="/services-details/1">Services</Link>
                    {/* <ul className="dropdown-menu">
                        
                        <li><Link href="/services-details/1">Services Details</Link></li>
                    </ul> */}
                </li>

                <li><Link href="/contact-us">contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;







