import React from 'react';

const Contact = () => {
    return (
        <div className="w-full bg-style h-screen">
            <h1 className="text-orange-500 text-4xl font-bold pt-5">Contact Us</h1>
            <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 pb-12 pt-10">
                <div className="bg-[#ffffff39] w-full shadow rounded p-8 sm:p-12">
                    <p className="text-3xl font-bold leading-7 text-center text-white">Just Drop a Message</p>
                    <form action="" method="post">
                        <div className="md:flex items-center mt-12 text-left">
                            <div className="w-full md:w-1/2 flex flex-col">
                                <label className="font-semibold leading-none text-white">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="leading-none text-gray-50 p-3 focus:outline-none focus:border-orange-500 mt-4 border-0 bg-gray-800 rounded"
                                    required
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="font-semibold leading-none text-white">Phone</label>
                                <input
                                    type="number"
                                    name="number"
                                    className="leading-none text-gray-50 p-3 focus:outline-none focus:border-orange-500 mt-4 border-0 bg-gray-800 rounded"
                                />
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8 text-left">
                            <div className="w-full flex flex-col">
                                <label className="font-semibold leading-none text-white">Email</label>
                                <input
                                    type="email"
                                    className="leading-none text-gray-50 p-3 focus:outline-none focus:border-orange-500 mt-4 border-0 bg-gray-800 rounded"
                                    required
                                />
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="w-full flex flex-col mt-8">
                                <label className="font-semibold leading-none text-white">Message</label>
                                <textarea
                                    type="text"
                                    name="message"
                                    className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-orange-500 mt-4 bg-gray-800 border-0 rounded">
                                </textarea>
                            </div>
                        </div>
                        <div className="w-full">
                            <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-orange-500 rounded hover:bg-orange-700 focus:ring-0 focus:outline-none">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;