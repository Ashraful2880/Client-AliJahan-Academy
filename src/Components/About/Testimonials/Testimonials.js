import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_PATH}/testimonials`)
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div className="bg-gray-100 pt-10  pb-20">
            <div className="container mx-auto">
                <h1 className="lg:text-4xl text-2xl text-orange-500 font-bold">What Our Students Have To Say</h1>
                <p className="mb-10 text-lg text-gray-500">Discover Your Perfect Program In Our Courses.</p>
                {testimonials?.length > 0 ?
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{ delay: 2000, disableOnInteraction: false, }}
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                            },
                            550: {
                                slidesPerView: 2,
                            },
                            900: {
                                slidesPerView: 3,
                            },
                            1020: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper">
                        {
                            testimonials.map(testimonial =>
                                <SwiperSlide key={testimonial?._id}>
                                    <div className="border p-5 bg-white rounded-lg">
                                        <div className="flex items-center gap-5 mb-4">
                                            <img src={testimonial?.image} alt="Testimonial Profile" className="rounded-full" />
                                            <div className="text-left font-semibold">
                                                <h4 className="text-xl">{testimonial?.name}</h4>
                                                <h5 className="text-orange-500">{testimonial?.designation}</h5>
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <p>{testimonial?.comment}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper> :
                    <div className="w-full h-[60vh] flex justify-center items-center">
                        <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-orange-500 border-t-transparent"></div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Testimonials;