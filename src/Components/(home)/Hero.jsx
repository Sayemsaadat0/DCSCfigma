"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import slider1 from '../../../public/swiper1.png'
import slider2 from '../../../public/swiper2.png'
import slider3 from '../../../public/swiper3.png'

const Hero = () => {
    const backgroundStyle = {
        backgroundImage: 'url(https://i.ibb.co/JqzMJMt/Herobg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', // Adjust to your desired background size
        backgroundPosition: 'center', // Adjust to your desired background position
    };

    return (
        <div className='min-h-screen pt-64' style={backgroundStyle}>
            <div className="hero" >
                <div className="hero-content text-center text-neutral-content max-w-[1500px] mx-auto">
                    <div className="max-w-7xl">
                        <h1 className=" text-7xl font-bold my-10">DHAKA COLLEGE <br /> SCIENCE CLUB</h1>
                    </div>
                </div>
            </div>

            {/* swier */}
            <div className='max-w-[1500px] pt-28 mx-auto '>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-8'>
                            <Image className='rounded-xl' src={slider1} width={500} height={500} alt='slider'></Image>
                            <Image className='rounded-xl' src={slider2} width={500} height={500} alt='slider'></Image>
                            <Image className='rounded-xl' src={slider3} width={500} height={500} alt='slider'></Image>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='grid grid-cols-1 md:grid-cols-3 place-items-center gap-8'>
                            <Image className='rounded-xl' src={slider1} width={500} height={500} alt='slider'></Image>
                            <Image className='rounded-xl' src={slider2} width={500} height={500} alt='slider'></Image>
                            <Image className='rounded-xl' src={slider3} width={500} height={500} alt='slider'></Image>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    );
};

export default Hero;