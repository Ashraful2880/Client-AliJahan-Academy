import React from 'react';

const Admissions = () => {
    return (
        <div>
            <div className="container mx-auto h-[80vh]">
                <h1 className="text-4xl text-orange-500 font-bold">Our Curriculum</h1>
                <h4 className="text-xl font-semibold mb-6">Academic Programme</h4>
                <p className=" tracking-wider">Massa, et porttitor cras sed ultrices ullamcorper mauris semper iaculis. Ornare suscipit purus nulla</p>
                <p className="tracking-wider lg:mb-10 mb-8">pharetra velit, leo in. Amet nulla nunc vitae viverra pellentesque in eget. Mi ut sit ultrices sed.</p>
                <div className="lg:flex block justify-center mx-auto mt-10">
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652965045/Assesment/Admission-1_inm2pa.jpg" alt="Admission-1" />
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652965045/Assesment/Admission-2_yldpb6.jpg" alt="Admission-2" />
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652965045/Assesment/Admission-3_htzrvx.jpg" alt="Admission-3" />
                </div>
            </div>
        </div>
    );
};

export default Admissions;