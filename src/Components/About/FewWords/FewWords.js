import React from 'react';

const FewWords = () => {
    return (
        <div className="container mx-auto mb-10">
            <h1 className="text-4xl font-bold text-orange-500 text-left mt-4">Few Words About Us</h1>
            <div className="lg:flex justify-between items-center gap-20 md:block sm:block">
                <div className="lg:w-1/2 md:w-full sm:w-full lg:px-20 md:px-2 sm:px-1">
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652938867/Assesment/About-1_sfydej.webp" alt="about One" className="w-full" />
                </div>
                <div className="lg:text-left md:text-center sm:text-center lg:w-1/2 md:w-full sm:w-full">
                    <h4 className="text-3xl font-semibold mb-6">Learn at your own pace</h4>
                    <p className="tracking-wider leading-8 text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.Join millions of people from around the world learning together. Online learning is as easy and natural as chatting.</p>
                </div>
            </div>
            <div className="lg:flex justify-between items-center gap-20 md:block sm:block">
                <div className="lg:text-left md:text-center sm:text-center lg:w-1/2 md:w-full sm:w-full">
                    <h4 className="text-3xl font-semibold mb-6">Best Career Opportunities</h4>
                    <p className="tracking-wider leading-8 text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.Join millions of people from around the world learning together. Online learning is as easy and natural as chatting.</p>
                </div>
                <div className="lg:w-1/2 md:w-full sm:w-full lg:px-20 md:px-2 sm:px-1">
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652938779/Assesment/Career_jskgib.webp" alt="about One" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default FewWords;