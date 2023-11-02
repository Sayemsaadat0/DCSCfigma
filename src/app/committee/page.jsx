"use client"
import SectionTitle from '@/Components/(shared)/SectionTitle/SectionTitle';
import Image from 'next/image';
import committee from '../../../public/committee.png'
import { useState } from 'react';

const page = () => {
    const userData = [
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
        {
            image: committee,
            name: 'Mahfuzur Rahman Ongkon',
            designation: 'Joint Secretary of Sponsorship and Communication'
        },
    ]


    const initialVisibleCount = 12;
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
    const isShowingAll = visibleCount === userData.length;


    const toggleView = () => {
        if (isShowingAll) {
            setVisibleCount(initialVisibleCount);
        } else {
            setVisibleCount(userData.length);
        }
    };
    return (
        <div className='md:pt-64 pt-36 min-h-screen px-6 text-center max-w-[1500px] mx-auto relative'>
            <SectionTitle bigText={'Executive Committee 2023'} smallText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when'}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 px-4 mt-20 z-20 '>
                {userData.slice(0, visibleCount).map((data, index) => (
                    <div key={index} className="card rounded-lg z-10">
                        <Image className='relative rounded-lg' src={data.image} alt='ss' width={400} height={400} />
                        <div className='text-left cards ps-6'></div>
                        <div className='text-left z-20 px-4 pb-4'>
                            <p className='text-xl font-bold'>{data.name}</p>
                            <p className='text-secondary'>{data.designation}</p>
                        </div>
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