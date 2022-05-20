import React from 'react';

const Admissions = () => {
    return (
        <>
            <div className="container mx-auto lg:mb-8 mb-0 lg:px-0 px-4">
                <h1 className="text-4xl text-orange-500 font-bold">Our Curriculum</h1>
                <h4 className="text-xl font-semibold mb-6">Academic Programme</h4>
                <p className=" tracking-wider">Massa, et porttitor cras sed ultrices ullamcorper mauris semper iaculis. Ornare suscipit purus nulla</p>
                <p className="tracking-wider lg:mb-10 mb-8">pharetra velit, leo in. Amet nulla nunc vitae viverra pellentesque in eget. Mi ut sit ultrices sed.</p>
                <div className="lg:flex block justify-center mx-auto mt-10">
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652965045/Assesment/Admission-1_inm2pa.jpg" alt="Admission-1" />
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652965045/Assesment/Admission-2_yldpb6.jpg" alt="Admission-2" />
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652965045/Assesment/Admission-3_htzrvx.jpg" alt="Admission-3" />
                </div>
                <h1 className="text-3xl font-semibold mt-6">Apply For Admission</h1>
            </div>
            <div className="container mx-auto">
                <div className="flex justify-center px-6 mb-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bgContainer"></div>
                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Add Your Deatils For Admission</h3>
                            <hr className="mt-4 border-t" />
                            <form className="lg:px-8 px-0 pt-6 pb-8 mb-4 bg-white rounded" >
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0 text-left">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                                            Your Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="name"
                                            placeholder="Enter Your Name"
                                        />
                                    </div>
                                    <div className="md:ml-2 text-left">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="number">
                                            Contact Number
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="number"
                                            type="number"
                                            placeholder="Contact Number"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0 text-left">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700" htmlFor="class">
                                            Admit Class Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="class"
                                            placeholder="Which Class Wat to Admit?"
                                        />
                                    </div>
                                    <div className="md:ml-2 text-left">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                            Your Email (Optional)
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="email"
                                            type="email"
                                            placeholder="Enter Email"
                                        />
                                    </div>
                                </div>
                                <hr className="mb-12 border-t" />
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-700 focus:outline-none focus:shadow-outline"
                                        type="submit">
                                        Apply For Admission
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admissions;