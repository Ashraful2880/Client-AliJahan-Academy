import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../../Images/Logo-2.png";

const Header = () => {
    return (
        <nav className="bg-gray-800 sm:px-4 py-2.5 sticky top-0 z-50">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/home" className='flex items-center'>
                    <img src={Logo} className="mr-3 h-9 w-9 sm:h-9 rounded-full" alt="Main Logo" />
                    <p className="self-center text-xl text-white font-semibold whitespace-nowrap">
                        <span className="text-orange-500">A</span>li <span className="text-orange-500">J</span>ahan <span className="text-orange-500">A</span>cademy
                    </p>
                </Link>
                <div className="flex md:order-2">
                    <Link to="/admission">
                        <button type="button" className="text-white bg-orange-500 hover:bg-transparent border border-orange-500 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-3 md:mr-0">Get started</button>
                    </Link>
                    <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-orange-500 focus:outline-none focus:ring-0" aria-controls="mobile-menu-4" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to="/home" className="block py-2 text-white text-md hover:bg-orange-500 px-5 rounded" >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/admission" className="block py-2 text-white text-md hover:bg-orange-500 px-5 rounded" >
                                Admissions
                            </Link>
                        </li>
                        <li>
                            <Link to="/programme" className="block py-2 text-white text-md hover:bg-orange-500 px-5 rounded" >
                                Programmes & Fees
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="block py-2 text-white text-md hover:bg-orange-500 px-5 rounded" >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block py-2 text-white text-md hover:bg-orange-500 px-5 rounded" >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="block py-2 text-white text-md hover:bg-orange-500 px-5 rounded" >
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="block py-2 text-white text-md hover:bg-orange-500 px-5 rounded" >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;