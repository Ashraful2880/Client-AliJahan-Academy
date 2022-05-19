import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Bannar from '../Bannar/Bannar';
import Events from '../Events/Events';
import Newslater from '../Newslater/Newslater';
import AdmissionFeature from './../AdmissionFeature/AdmissionFeature';

const Home = () => {
    return (
        <div>
            <Bannar />
            <About />
            <AdmissionFeature />
            <Events />
            <Newslater />
            <Contact />
        </div>
    );
};

export default Home;