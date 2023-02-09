import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../../Images/Logo-2.png";

const Footer = () => {
    const location = useLocation();
    const pathName = location?.pathname;

    return (
        <>
            {!pathName.includes("/dashboard") &&
                <footer className="text-center lg:text-left text-gray-300 bg-gray-800 pt-10" >
                    <div className="container mx-auto">
                        <div className="mx-6 py-10 text-center md:text-left">
                            <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div>
                                    <Link to="/home">
                                        <img className="mb-4 w-36 mx-auto lg:mx-0" src={logo} alt="footer logo" />
                                    </Link>
                                    <FontAwesomeIcon className="w-6 h-6 mx-2 hover:text-red-500 duration-150" icon={faFacebook} />
                                    <FontAwesomeIcon className="w-6 h-6 mx-2 hover:text-red-500 duration-150" icon={faInstagram} />
                                    <FontAwesomeIcon className="w-6 h-6 mx-2 hover:text-red-500 duration-150" icon={faTwitter} />
                                    <FontAwesomeIcon className="w-6 h-6 mx-2 hover:text-red-500 duration-150" icon={faGithub} />
                                </div>
                                <div>
                                    <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                                        About Us
                                    </h6>
                                    <p className="mb-3 hover:text-orange-500">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                        <Link to="/home"> Course Fees </Link>
                                    </p>
                                    <p className="mb-3 hover:text-orange-500">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                        <Link to="/home"> Student List </Link>
                                    </p>
                                    <p className="mb-3 hover:text-orange-500">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                        <Link to="/home"> Privacy Policy </Link>
                                    </p>
                                    <p className="mb-3 hover:text-orange-500">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                        <Link to="/home"> Sitemap </Link>
                                    </p>
                                </div>
                                <div>
                                    <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                                        Useful links
                                    </h6>
                                    <p className="mb-3 hover:text-orange-500">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                        <Link to="/home"> Our Academy </Link>
                                    </p>
                                    <p className="mb-3 hover:text-orange-500">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                        <Link to="/home"> Guidelines for students </Link>
                                    </p>
                                    <p className="mb-3 hover:text-orange-500">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                        <Link to="/home"> Campus Rules </Link>
                                    </p>
                                    <p className="mb-3 hover:text-orange-500">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                        <Link to="/home"> Help </Link>
                                    </p>
                                </div>
                                <div className="contact-area">
                                    <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start text-orange-500">
                                        Contact
                                    </h6>
                                    <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 cursor-pointer">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                        Jhenaidah, Dhaka, Bangladesh
                                    </p>
                                    <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 cursor-pointer">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                        contact.ashraful1@gmail.com
                                    </p>
                                    <p className="flex items-center justify-center md:justify-start mb-3 hover:text-orange-500 cursor-pointer">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                        + 88-01764238487
                                    </p>
                                    <p className="flex items-center justify-center md:justify-start hover:text-orange-500 cursor-pointer">
                                        <FontAwesomeIcon icon={faAngleDoubleRight} className="w-3 inline mr-2" />
                                        + 88-01974238487
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center pb-8">
                            <span>Copyright; © 2022 - </span>
                            <a className="text-orange-500 font-semibold" href="https://ashrafulislam.netlify.app"> ashrafulislam</a>
                        </div>
                    </div>
                </footer>
            }
        </>
    );
};

export default Footer;