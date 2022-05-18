import React from 'react';
import Bannar from '../Bannar/Bannar';
import Events from '../Events/Events';
import Newslater from '../Newslater/Newslater';

const Home = () => {
    return (
        <div>
            <Bannar />
            <Events />
            <Newslater />
        </div>
    );
};

export default Home;