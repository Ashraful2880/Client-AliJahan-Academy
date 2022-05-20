import React from 'react';
import useAuth from './../../../Hooks/UseAuth';

const DashboardHome = () => {
    const { user } = useAuth();

    return (
        <div className="lg:px-6 2xl:px-0 bg h-screen text-white bg-style">
            <div className="mx-auto container relative z-0 px-4 xl:px-0">
                <div className="flex flex-col-reverse justify-center md:flex-row">
                    <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-20">
                        <img className="w-30 rounded-full border-2 border-orange-500 mb-5" src={user?.photoURL} alt="user" />
                        <h1 className="lg:text-4xl text-3xl font-black text-center md:text-left tracking-tighter md:w-7/12 leading-tight">Hi, </h1>
                        <h1 className="lg:text-3xl text-2xl font-black text-center md:text-left tracking-tighter md:w-7/12 leading-tight mb-6">{user?.displayName}</h1>
                        <h1 className="lg:text-4xl text-3xl font-black text-center md:text-left tracking-tighter md:w-7/12 leading-tight">Welcome To <span className="text-orange-500">Ali Jahan Academy</span> Dashboard</h1>
                        <h2 className="md:w-8/12 my-4 text-center md:text-left md:my-8 text-lg lg:text-xl">Do you want to control your expenses and be always aware of how much money you have spent?</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;