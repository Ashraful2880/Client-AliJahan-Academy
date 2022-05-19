import React from 'react';
import FewWords from './FewWords/FewWords';
import OurTeachers from './OurTeachers/OurTeachers';
import SuccessfullStudents from './SuccessfullStudents/SuccessfullStudents';

const About = () => {
    return (
        <>
            <OurTeachers />
            <SuccessfullStudents />
            <FewWords />
        </>
    );
};

export default About;