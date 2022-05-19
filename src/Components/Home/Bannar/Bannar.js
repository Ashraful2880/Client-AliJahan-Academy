import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

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
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652967873/Assesment/Bannar-1_cjrgua.jpg" alt="Bannar Image" className="relative" />
                    <div className="overlay"></div>
                    <div className="absolute text-white top-[15%] left-[15%] text-left">
                        <p className="text-2xl text-orange-500 font-bold mb-6 lg:block md:block hidden">We are the best</p>
                        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold lg:mb-8 mb-2">Top 20 Listed Company <br /> From Our Students </h1>
                        <p className="w-1/2 mb-6 tracking-wider text-white lg:block hidden">Sed Elit Quam, Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh At Magna Akal Semper Sema Olatiup Sema Olatiup Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh</p>
                        <Link to="/register">
                            <button className="text-white border border-orange-500 rounded-md px-8 py-3 hover:bg-orange-500 duration-200">Join Now</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652967873/Assesment/Bannar-2_kqy9ou.jpg" alt="Bannar Image" className="relative" />
                    <div className="overlay"></div>
                    <div className="absolute text-white top-[15%] left-[15%] text-left">
                        <p className="text-2xl text-orange-500 font-bold mb-6 lg:block md:block hidden">We are the best</p>
                        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold lg:mb-8 mb-2">Learn From Mentors <br /> With Us </h1>
                        <p className="w-1/2 mb-6 tracking-wider text-white lg:block hidden">Sed Elit Quam, Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh At Magna Akal Semper Sema Olatiup Sema Olatiup Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh</p>
                        <Link to="/register">
                            <button className="text-white border border-orange-500 rounded-md px-8 py-3 hover:bg-orange-500 duration-200">Join Now</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652967872/Assesment/Bannar-3_g9et0z.jpg" alt="Bannar Image" className="relative" />
                    <div className="overlay"></div>
                    <div className="absolute text-white top-[15%] left-[15%] text-left">
                        <p className="text-2xl text-orange-500 font-bold mb-6 lg:block md:block hidden">We are the best</p>
                        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold lg:mb-8 mb-2">We are Best Academy <br /> In Our Country </h1>
                        <p className="w-1/2 mb-6 tracking-wider text-white lg:block hidden">Sed Elit Quam, Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh At Magna Akal Semper Sema Olatiup Sema Olatiup Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh</p>
                        <Link to="/register">
                            <button className="text-white border border-orange-500 rounded-md px-8 py-3 hover:bg-orange-500 duration-200">Join Now</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/ashraful-islam/image/upload/v1652967874/Assesment/Bannar-4_lpzwnx.png" alt="Bannar Image" className="relative" />
                    <div className="overlay"></div>
                    <div className="absolute text-white top-[15%] left-[15%] text-left">
                        <p className="text-2xl text-orange-500 font-bold mb-6 lg:block md:block hidden">We are the best</p>
                        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold lg:mb-8 mb-2">Come & Learn <br /> For Your Career </h1>
                        <p className="w-1/2 mb-6 tracking-wider text-white lg:block hidden">Sed Elit Quam, Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh At Magna Akal Semper Sema Olatiup Sema Olatiup Iaculis The Sed Semper Sit Amet The Udin Vitae Nibh</p>
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