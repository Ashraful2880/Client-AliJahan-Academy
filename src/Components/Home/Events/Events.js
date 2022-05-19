import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

const Events = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch("./Events.json")
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div className="container mx-auto mb-10">
            <div className="mb-8 mt-4">
                <h1 className="text-4xl font-bold text-orange-500 mb-2">Upcoming Events</h1>
                <p className="text-md font-semibold">Discover Your Perfect Program With Our Academy.</p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6">
                {
                    events.map(event =>
                        <div className="flex justify-between border p-2 rounded-md shadow-lg h-44" key={event?._id}>
                            <img className="w-56" src={event?.image} alt="Event" />
                            <div className="flex flex-col items-center justify-center mx-10 text-left">
                                <h4 className="text-lg font-semibold mb-4">{event?.name}</h4>
                                <div className="w-full flex justify-between items-center">
                                    <div>
                                        <FontAwesomeIcon icon={faClock} className="text-orange-500 mr-2" />
                                        <span>{event?.time}</span>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faLocationDot} className="text-orange-500 mr-2" />
                                        <span>{event?.location}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-gray-800 px-4 my-8 rounded-lg text-white font-semibold hover:bg-transparent hover:text-gray-800 border border-gray-800 duration-200">{event?.date}</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Events;