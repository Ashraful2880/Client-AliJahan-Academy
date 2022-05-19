import React from 'react';
import About from '../../About/About';
import Bannar from '../Bannar/Bannar';
import Events from '../Events/Events';
import Newslater from '../Newslater/Newslater';

const Home = () => {
    return (
        <div>
            <Bannar />
            <About />
            <Events />
            <Newslater />
        </div>
    );
};

export default Home;