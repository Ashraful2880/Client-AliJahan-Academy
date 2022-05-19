import React from 'react';
import "./AdmissionFeature.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const AdmissionFeature = () => {
    return (
        <div className="promo-style py-10">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-left">
                        <h2 className="text-white text-3xl font-bold">Join Us</h2>
                        <h4 className="text-white text-xl mb-6">Join with us to discover new...</h4>
                        <div className="text-gray-300">
                            <div>
                                <FontAwesomeIcon icon={faCheck} className="inline text-2xl text-orange-500 mr-2" />
                                <span> Congenial environment with plenty of open space for rest & recreation.</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCheck} className="inline text-2xl text-orange-500 mr-2" />
                                <span>Health Insurance coverge upto Tk. 2.5-5.0 lac per student per year.</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCheck} className="inline text-2xl text-orange-500 mr-2" />
                                <span> AC Class rooms equipped with modern audio-visual equipment.</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCheck} className="inline text-2xl text-orange-500 mr-2" />
                                <span> Common room, prayer room, Cafeteria and Food court.</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCheck} className="inline text-2xl text-orange-500 mr-2" />
                                <span>Wifi Facility is available in entire campus.</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCheck} className="inline text-2xl text-orange-500 mr-2" />
                                <span>Total Campus area is about 1,38,000 sqft.</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-left">
                        <h1 className="text-4xl font-bold text-white">Admission Going On For Fall-</h1>
                        <h1 className="text-4xl font-bold text-white mb-10">2022 in Ali Jahan Academy</h1>
                        <Link to="/admission">
                            <button className="text-white border border-orange-500 px-5 py-2 rounded-lg hover:bg-orange-500 duration-300">Apply Online</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionFeature;