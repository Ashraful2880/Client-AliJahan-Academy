import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import logo from "../../Images/Logo-2.png";

const Register = () => {
    const { user, googleSignIn, handleName, handleEmail, handlePassword, handleRegister, setError, error } = useAuth()
    return (
        <div className="bg-style">
            <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
                <div className="bg-white shadow-lg rounded lg:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                    <p className="text-3xl font-bold leading-6 text-orange-500 mb-4">Please Register</p>
                    <img className="w-32 rounded-3xl mx-auto mb-6" src={logo} alt="logo" />
                    <form onSubmit={handleRegister}>
                        {user.email ? setError('') : <span className="text-red-600">{error}</span>}
                        <div className="text-left">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium leading-none text-gray-800">
                                Name
                            </label>
                            <input
                                onBlur={handleName}
                                type="name"
                                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-500 text-gray-800 py-3 w-full pl-3 mt-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                placeholder="Your Name "
                                required />
                        </div>
                        <div className="text-left">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input
                                onBlur={handleEmail}
                                type="email"
                                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-500 text-gray-800 py-3 w-full pl-3 mt-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                placeholder="example@gmail.com "
                                required />
                        </div>
                        <div className="mt-6 w-full text-left">
                            <label htmlFor="myInput" className="text-sm font-medium leading-none text-gray-800"> Password </label>
                            <div className="relative flex items-center justify-center">
                                <input
                                    onBlur={handlePassword}
                                    type="password"
                                    className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                    placeholder="Your Password"
                                    required />
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
                        onClick={googleSignIn}
                        className="focus:outline-none focus:ring-0 p-3 border rounded-lg border-orange-500 flex items-center w-1.5/2 mx-auto mt-4 hover:bg-gray-200">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg2.svg" alt="google" />
                        <p className="text-base font-medium ml-4 text-gray-700">
                            Continue with Google
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;