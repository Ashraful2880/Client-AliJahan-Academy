import React from 'react';
import FewWords from './FewWords/FewWords';
import OurTutors from './OurTutors/OurTutors';
import Testimonials from './Testimonials/Testimonials';


const About = () => {
    return (
        <>
            <OurTutors />
            <Testimonials />
            <FewWords />
        </>
    );
};

export default About;