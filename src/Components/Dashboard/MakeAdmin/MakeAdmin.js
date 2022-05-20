import React from 'react';

const MakeAdmin = () => {
    return (
        <div className="bg-style h-[80vh]">
            <form className="lg:pt-52 md:pt-40 sm:pt-16">
                <h1 className="text-white mb-6 text-2xl font-bold">You Can make Admin By Registered Email</h1>
                <input
                    className="text-gray-600 focus:ring-0  focus:outline-none bg-white font-normal py-2 px-12 text-sm mr-3 border-gray-300 rounded border shadow "
                    placeholder="Enter New Admin Email" />
                <input
                    className="bg-orange-500 hover:bg-transparent border border-orange-500 text-white py-2 px-6 rounded-lg ml-3 cursor-pointer duration-200"
                    type="submit"
                    value="Confirm" />
            </form>
        </div>
    );
};

export default MakeAdmin;