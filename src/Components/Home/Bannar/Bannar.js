import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

import bannar1 from "../../../Images/Bannar-1.jpg";
import bannar2 from "../../../Images/Bannar-2.jpg";
import bannar3 from "../../../Images/Bannar-3.jpg";
import bannar4 from "../../../Images/Bannar-4.png";

const Bannar = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 2500, disableOnInteraction: false, }}
                pagination={{ clickable: true, }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <img src={bannar1} alt="Bannar Image" className="relative" />
                    <div className="overlay"></div>
                    <div className="absolute text-white top-[15%] left-[15%] text-left">
                        <p className="text-2xl text-orange-500 font-bold mb-6">We are the best</p>
                        <h1 className="text-5xl font-bold mb-8">Top 20 Listed Company <br /> From Our Students </h1>
                        <p className="w-1/2 mb-6 tracking-wider text-white">Sed Elit Quam, Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh At Magna Akal Semper Sema Olatiup Sema Olatiup Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh</p>
                        <Link to="/register">
                            <button className="text-white border border-orange-500 rounded-md px-8 py-3 hover:bg-orange-500 duration-200">Join Now</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannar2} alt="Bannar Image" className="relative" />
                    <div className="overlay"></div>
                    <div className="absolute text-white top-[15%] left-[15%] text-left">
                        <p className="text-2xl text-orange-500 font-bold mb-6">We are the best</p>
                        <h1 className="text-5xl font-bold mb-8">Learn From Mentors <br /> With Us </h1>
                        <p className="w-1/2 mb-6 tracking-wider text-white">Sed Elit Quam, Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh At Magna Akal Semper Sema Olatiup Sema Olatiup Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh</p>
                        <Link to="/register">
                            <button className="text-white border border-orange-500 rounded-md px-8 py-3 hover:bg-orange-500 duration-200">Join Now</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannar3} alt="Bannar Image" className="relative" />
                    <div className="overlay"></div>
                    <div className="absolute text-white top-[15%] left-[15%] text-left">
                        <p className="text-2xl text-orange-500 font-bold mb-6">We are the best</p>
                        <h1 className="text-5xl font-bold mb-8">We are Best Academy <br /> In Our Country </h1>
                        <p className="w-1/2 mb-6 tracking-wider text-white">Sed Elit Quam, Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh At Magna Akal Semper Sema Olatiup Sema Olatiup Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh</p>
                        <Link to="/register">
                            <button className="text-white border border-orange-500 rounded-md px-8 py-3 hover:bg-orange-500 duration-200">Join Now</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannar4} alt="Bannar Image" className="relative" />
                    <div className="overlay"></div>
                    <div className="absolute text-white top-[15%] left-[15%] text-left">
                        <p className="text-2xl text-orange-500 font-bold mb-6">We are the best</p>
                        <h1 className="text-5xl font-bold mb-8">Come & Learn <br /> For Your Career </h1>
                        <p className="w-1/2 mb-6 tracking-wider text-white">Sed Elit Quam, Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh At Magna Akal Semper Sema Olatiup Sema Olatiup Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh</p>
                        <Link to="/register">
                            <button className="text-white border border-orange-500 rounded-md px-8 py-3 hover:bg-orange-500 duration-200">Join Now</button>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Bannar;