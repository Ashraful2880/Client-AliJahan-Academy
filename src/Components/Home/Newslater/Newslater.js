import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Newslater = () => {
    return (
        <div className=" bg-sky-600 h-36 flex justify-center items-center lg:px-0 px-4">
            <FontAwesomeIcon icon={faPaperPlane} className="text-white text-4xl mr-4 animate-bounce" />
            <h1 className="text-white lg:text-4xl md:text-xl sm:text-lg font-semibold mr-6">Prepare Your Application Letter for Admission</h1>
            <Link to="/admission">
                <button className="bg-white text-sky-500 px-8 py-2 rounded-3xl font-semibold text-lg hover:bg-transparent hover:text-white duration-200 border border-white">Apply</button>
            </Link>
        </div>
    );
};

export default Newslater;