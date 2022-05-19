import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Images/Logo-2.png";

const Register = () => {
    return (
        <div className="bg-style">
            <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
                <div className="bg-white shadow-lg rounded lg:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                    <p className="text-3xl font-bold leading-6 text-orange-500 mb-4">Please Register</p>
                    <img className="w-32 rounded-3xl mx-auto mb-6" src={logo} alt="logo" />
                    <form >
                        <div className="text-left">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium leading-none text-gray-800">
                                Name
                            </label>
                            <input
                                type="name"
                                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-500 text-gray-800 py-3 w-full pl-3 mt-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                placeholder="Your Name " />
                        </div>
                        <div className="text-left">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input
                                type="email"
                                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-500 text-gray-800 py-3 w-full pl-3 mt-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                placeholder="example@gmail.com " />
                        </div>
                        <div className="mt-6 w-full text-left">
                            <label htmlFor="myInput" className="text-sm font-medium leading-none text-gray-800"> Password </label>
                            <div className="relative flex items-center justify-center">
                                <input
                                    type="password"
                                    className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                    placeholder="Your Password" />
                            </div>
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="focus:ring-0 text-sm font-semibold leading-none text-white hover:text-orange-500 focus:outline-none bg-orange-500 border border-orange-500 rounded-xl hover:bg-transparent py-4 w-full">
                                Register
                            </button>
                        </div>
                    </form>
                    <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-800">Allready Registerd?
                        <Link
                            to="/login"
                            className="ml-2 text-red-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none cursor-pointer">
                            Login here
                        </Link>
                    </p>
                    <div className="w-full flex items-center justify-between pt-5">
                        <hr className="w-full bg-orange-500 " />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-500">OR</p>
                        <hr className="w-full bg-orange-500" />
                    </div>
                    <button
                        className="focus:outline-none focus:ring-0 p-3 border rounded-lg border-orange-500 flex items-center w-full mt-4 hover:bg-gray-200">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg2.svg" alt="google" />
                        <p className="text-base font-medium ml-4 text-gray-700">
                            Continue with Google
                        </p>
                    </button>
                    <button
                        className="focus:outline-none focus:ring-0 p-3 border rounded-lg border-orange-500 flex items-center w-full mt-4 hover:bg-gray-200">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg3.svg" alt="github" />
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Github</p>
                    </button>
                    <button
                        className="focus:outline-none focus:ring-0 p-3 border rounded-lg border-orange-500 flex items-center w-full mt-4 hover:bg-gray-200">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg4.svg" alt="twitter" />
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Twitter</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;