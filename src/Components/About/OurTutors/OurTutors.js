import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState } from 'react';

const OurTutors = () => {
    const [tutors, setTutors] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_PATH}/tutors`)
            .then(res => res.json())
            .then(data => setTutors(data))
    }, [])
    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-4xl text-orange-500 font-bold mt-2">Our Tutors</h1>
            <p className="text-2xl font-semibold mb-4">People Behind Our Success</p>
            {tutors?.length > 0 ?

                <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-8 p-10">
                    {
                        tutors.map(tutor =>
                            <div className="lg:flex md:block sm:block justify-between items-center gap-10 hover:shadow-2xl py-3 rounded-lg duration-300 border border-gray-100" key={tutor?._id}>
                                <img src={tutor?.image} alt="Tutor Profile" className="rounded-full w-40 mx-auto" />
                                <div className="lg:text-left text-center">
                                    <h4 className="text-xl font-semibold">{tutor?.name}</h4>
                                    <h5 className=" font-semibold text-orange-500 mb-2">{tutor?.designation}</h5>
                                    <h5 className="text-gray-500 mb-2">{tutor?.details}</h5>
                                    <a href="https://www.facebook.com/ashrafonline706/" target="blank">
                                        <FontAwesomeIcon icon={faFacebook} className="text-sky-600 hover:text-orange-500 duration-200 text-xl mx-2" />
                                    </a>
                                    <a href="https://www.instagram.com/ashraful.islam706/" target="blank">
                                        <FontAwesomeIcon icon={faInstagram} className="text-sky-600 hover:text-orange-500 duration-200 text-xl mx-2" />
                                    </a>
                                    <a href="https://twitter.com/IslamAshraful80" target="blank">
                                        <FontAwesomeIcon icon={faTwitter} className="text-sky-600 hover:text-orange-500 duration-200 text-xl mx-2" />
                                    </a>
                                </div>
                            </div>
                        )
                    }
                </div> :
                <div className="w-full h-[60vh] flex justify-center items-center">
                    <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-orange-500 border-t-transparent"></div>
                </div>
            }
        </div>
    );
};

export default OurTutors;