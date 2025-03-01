"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const sliderItems = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/5117638/pexels-photo-5117638.jpeg",
    header: "Men's Shoes",
  },
  {
    id: 2,
    image:
      "https://www.visionexercisephysiology.com.au/wp-content/uploads/2023/02/women_shoesbanner_20211221-2048x529.jpg",
    header: "Women's Shoes",
  },
];

const Hero = () => {
  return (
    <div className="relative sm:h-[450px] h-[300px] w-full ">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={20}
        slidesPerView={1}
        speed={800}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {sliderItems.map((value, index) => (
          <SwiperSlide
            key={index}
            className="w-full flex justify-center sm:pb-[20px] pb-[35px]"
          >
            <div className="overflow-hidden sm:h-[450px] h-[220px]  object-cover">
              <img
                src={value.image}
                className="h-[100%] w-full object-cover transition-transform duration-700 ease-in-out"
                alt={value.header}
              />
            </div>

            <div className="custom-shape-divider-bottom-1740048757 hidden md:block">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  opacity=".25"
                  className="shape-fill"
                ></path>
                <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  opacity=".5"
                  className="shape-fill"
                ></path>
                <path
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>

            <div className="flex w-full justify-center">
              <h1 className="absolute sm:mt-[-120px] mt-[-80px] text-white text-3xl tracking-wide">
                {value.header}
              </h1>
              <button className="relative bg-black w-[150px] h-[50px] tracking-wider sm:mt-[-70px] mt-[-30px] text-white rounded-lg shadow-xl">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
