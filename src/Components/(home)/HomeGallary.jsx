"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from '../(shared)/SectionTitle/SectionTitle';
import Image from 'next/image';
import image from '../../../public/events4.png'
import image1 from '../../../public/events5.png'
const HomeGallary = () => {
    return (
        <div className='min-h-screen text-center pt-24 mx-auto max-w-[1500px]'>
            <SectionTitle bigText={'Gallery'} smallText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when'}></SectionTitle>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide className='px-4'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-10'>
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                                                    
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='px-4'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-10'>
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={image1} alt='imgf' width={400} height={100}></Image>                                                    
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeGallary;