"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import 'swiper/css/navigation';


// import required modules
import { FreeMode, Pagination , Navigation} from 'swiper/modules';
import Image from 'next/image';
import slider1 from '../../../public/swiper1.png'
import slider2 from '../../../public/swiper2.png'
import slider3 from '../../../public/swiper3.png'

const Hero = () => {
    const imagebox = [
        slider1,
        slider2,
        slider3,
        slider1,
        slider2,
        slider3,
        slider1,
        slider2,
        slider3
    ]
    const backgroundStyle = {
        backgroundImage: 'url(https://i.ibb.co/JqzMJMt/Herobg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className='min-h-screen pt-64' style={backgroundStyle}>
            {/* overlay with heading text */}
            <div className="hero" >
                <div className="hero-content text-center text-neutral-content max-w-[1500px] mx-auto">
                    <div className="max-w-7xl">
                        <h1 className=" text-7xl font-bold my-10 ">DHAKA COLLEGE <br /> SCIENCE CLUB</h1>
                    </div>
                </div>
            </div>

            {/* swier */}
            <div className=' pt-28 mx-auto '>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Navigation]}
                    breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 5,
                        },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 5,
                        },
                        1200: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                      }}
                    className="mySwiper"
                >
                    {
                        imagebox.map((image, index) => <SwiperSlide key={index}><Image  className='rounded-xl'                        src={image} alt='image' width={400} height={400}></Image></SwiperSlide>)
                    }


                </Swiper>

            </div>
        </div>
    );
};

export default Hero;