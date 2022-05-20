import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import logo from "../../Images/Logo-2.png";

const Login = () => {
    const { handleSignIn, handleEmail, handlePassword, user, error, setError } = useAuth();
    return (
        <div className="bg-style">
            <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
                <div className="bg-white shadow-lg rounded lg:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                    <p className="focus:outline-none text-2xl font-bold leading-6 text-orange-500 mb-4">Welcome back !!!</p>
                    <p className="focus:outline-none text-lg font-bold leading-6 text-gray-700 mb-6">Login to Your Account </p>
                    <img className="w-32 rounded-3xl mx-auto mb-6" src={logo} alt="logo" />
                    <form onSubmit={handleSignIn}>
                        {user.email ? setError('') : <span className="text-red-600">{error}</span>}
                        <div className="text-left">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input
                                onBlur={handleEmail}
                                type="email"
                                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-500 text-gray-800 py-3 w-full pl-3 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="example@gmail.com " />
                        </div>
                        <div className="mt-6 w-full text-left">
                            <label htmlFor="myInput" className="text-sm font-medium leading-none text-gray-800"> Password </label>
                            <div className="relative flex items-center justify-center">
                                <input
                                    onBlur={handlePassword}
                                    type="password"
                                    className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                    placeholder="Your Password" />
                            </div>
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="focus:ring-0 text-sm font-semibold leading-none text-white hover:text-orange-500 focus:outline-none bg-orange-500 border border-orange-500 rounded-xl hover:bg-transparent py-4 w-full duration-200">
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">Don't have account?
                        <Link
                            to="/register"
                            className="ml-2 text-red-500 focus:outline-none focus:underline hover:underline text-sm font-semibold leading-none cursor-pointer">
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;