"use client"
import React, { useState } from 'react';
import details from '../../../public/details.png'
import Image from 'next/image';

const About = () => {
    const [activeTab, setActiveTab] = useState('about');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className=' md:flex justify-evenly items-center mt-20 md:mt-0 min-h-screen '>

            {/* tabs */}
            <div>
                <div className="px-4">
                    <h1 className='text-5xl  header pb-10'>DCSC</h1>
                    <div className="tabs p-2 flex justify-around tabs-boxed md:w-80 w-full">
                        <a
                            className={`tab inline-block px-5 py-1 text-center font-bold  ${activeTab === 'about' &&
                                'bg-gradient-to-r from-primary text-white to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary rounded-[10px]'
                                }`}
                            onClick={() => handleTabClick('about')}
                        > About </a>
                        <a
                            className={`tab inline-block px-5 py-1 text-center font-bold  ${activeTab === 'intro' &&
                                'bg-gradient-to-r from-primary text-white to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary rounded-[10px]'
                                }`}
                            onClick={() => handleTabClick('intro')}
                        > Intro </a>
                        <a
                            className={`tab inline-block px-5 py-1 text-center font-bold  ${activeTab === 'what-we-do' &&
                                'bg-gradient-to-r from-primary text-white to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary rounded-[10px]'
                                }`}
                            onClick={() => handleTabClick('what-we-do')}
                        > What We Do </a>
                    </div>
                </div>
                {/* content */}
                <div className="md:w-[400px] text-justify py-10 px-4">
                    {activeTab === 'about' && (
                        <div >
                            <p>Dhaka College Science Club, established in 1996, is a pioneering institution dedicated to fostering scientific curiosity and exploration. With over two decades of nurturing young minds, our club has been a hub for students to delve into various scientific disciplines. Through engaging activities, lectures, and experiments, we empower members to develop critical thinking skills and a profound appreciation for the world of science. Our enduring legacy continues to inspire the next generation of scientists and innovators in Dhaka and beyond.</p>

                        </div>
                    )}
                    {activeTab === 'intro' && (
                        <div>
                            <h2 >Dhaka College Science Club, founded in 1996, is a dynamic hub of scientific exploration. For over two decades, we've ignited curiosity, offering students the chance to delve into diverse scientific realms. Through hands-on experiments, engaging lectures, and critical thinking development, we inspire a new generation of scientific innovators. Join us in nurturing the passion for science!"</h2>

                        </div>
                    )}
                    {activeTab === 'what-we-do' && (
                        <div>
                            <p className='py-2'>We foster scientific curiosity, nurture critical thinking, and ignite innovation among students through hands-on learning and exploration</p>
                            <p className='list-disc'>
                                <li> Dive into a wide range of scientific fields.</li>
                                <li>Engage in practical experiments.</li>
                                <li>Inspire the next generation of scientific innovators.</li>
                            </p>
                        </div>
                    )}
                </div>
            </div>
       
            <div className="  ">
              
                <div className='relative'>
                    <div className='circle md:w-[500] md:h-[500] w-full h-full  absolute '></div>
                    <Image className='z-10 relative' src={details} alt="details" width={600} height={500} />
                </div>
            </div>

        </div>
    );
};

export default About;