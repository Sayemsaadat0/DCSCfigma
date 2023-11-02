"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from '../(shared)/SectionTitle/SectionTitle';
import Image from 'next/image';
import gallary1 from '../../../public/gallary1.png'
import gallary2 from '../../../public/gallary2.png'
import gallary3 from '../../../public/gallary3.png'
import gallary4 from '../../../public/gallary4.png'
import gallary5 from '../../../public/gallary5.png'
import gallary6 from '../../../public/gallary6.png'


const HomeGallary = () => {
    return (
        <div className='min-h-screen text-center pt-24 mx-auto max-w-[1500px]'>
            <SectionTitle bigText={'Gallery'} smallText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when'}></SectionTitle>

            <div className='pt-20'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide className='px-4'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-10'>
                             <Image src={gallary1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={gallary2} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={gallary6} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={gallary2} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={gallary3} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={gallary5} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={gallary2} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={gallary1} alt='imgf' width={400} height={100}></Image>                                                    
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='px-4'>
                        <div className='grid grid-cols-2  md:grid-cols-4 gap-1 md:gap-10'>
                             <Image src={gallary1} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={gallary2} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={gallary3} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={gallary4} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={gallary5} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={gallary6} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={gallary4} alt='imgf' width={400} height={100}></Image>                           
                             <Image src={gallary2} alt='imgf' width={400} height={100}></Image>                                                    
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeGallary;