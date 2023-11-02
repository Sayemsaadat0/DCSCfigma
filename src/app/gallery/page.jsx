 "use client"
import SectionTitle from '@/Components/(shared)/SectionTitle/SectionTitle';
import Image from 'next/image';
import { useState } from 'react';
import gallary1 from '../../../public/gallary1.png'
import gallary2 from '../../../public/gallary2.png'
import gallary3 from '../../../public/gallary3.png'
import gallary4 from '../../../public/gallary4.png'
import gallary5 from '../../../public/gallary5.png'
import gallary6 from '../../../public/gallary6.png'
const page = () => {
 const imagesBox =[
    gallary1, 
    gallary2, 
    gallary3, 
    gallary4, 
    gallary5, 
    gallary6,
    gallary1, 
    gallary2, 
    gallary3, 
    gallary4, 
    gallary5, 
    gallary6,
    gallary1, 
    gallary2, 
    gallary3, 
    gallary4, 
    gallary5, 
    gallary6,
    gallary1, 
    gallary2, 
    gallary3, 
    gallary4, 
    gallary5, 
    gallary6,
 ]


    const initialVisibleCount = 12;
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
    const isShowingAll = visibleCount === imagesBox.length;


    const toggleView = () => {
        if (isShowingAll) {
            setVisibleCount(initialVisibleCount);
        } else {
            setVisibleCount(imagesBox.length);
        }
    };
    return (
        <div className='md:pt-64 pt-36 min-h-screen px-6 text-center max-w-[1500px] mx-auto relative'>
            <SectionTitle bigText={'Gallery'}></SectionTitle>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-4 mt-20 z-20 '>
                {imagesBox.slice(0, visibleCount).map((data, index) => (
                    <div key={index} className="card rounded-lg overflow-hidden relative">
                        <Image className='hover:scale-105 duration-700 cursor-pointer rounded-lg' src={data} alt='ss' width={400} height={400} />
                    </div>
                ))}
            </div>

            <div className='my-20'>
                <button onClick={toggleView}
                    className='inline-block px-4 py-2 text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary rounded-[10px]'>
                    {isShowingAll ? 'Load Less' : 'Load More'} </button>
            </div>
        </div>
    );
};

export default page; 