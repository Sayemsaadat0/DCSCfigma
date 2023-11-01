"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Image from 'next/image';

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
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='grid grid-cols-1 md:grid-cols-3 place-items-center'>
                        <Image src={'https://i.pinimg.com/736x/3e/1e/a8/3e1ea8d07941f6031604cb55a5667615.jpg'} width={400} height={400} alt='slider'></Image>
                        <Image src={'https://i.pinimg.com/736x/3e/1e/a8/3e1ea8d07941f6031604cb55a5667615.jpg'} width={400} height={400} alt='slider'></Image>
                        <Image src={'https://i.pinimg.com/736x/3e/1e/a8/3e1ea8d07941f6031604cb55a5667615.jpg'} width={400} height={400} alt='slider'></Image>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-1 md:grid-cols-3 place-items-center'>
                        <Image src={'https://i.pinimg.com/736x/3e/1e/a8/3e1ea8d07941f6031604cb55a5667615.jpg'} width={400} height={400} alt='slider'></Image>
                        <Image src={'https://i.pinimg.com/736x/3e/1e/a8/3e1ea8d07941f6031604cb55a5667615.jpg'} width={400} height={400} alt='slider'></Image>
                        <Image src={'https://i.pinimg.com/736x/3e/1e/a8/3e1ea8d07941f6031604cb55a5667615.jpg'} width={400} height={400} alt='slider'></Image>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Hero;