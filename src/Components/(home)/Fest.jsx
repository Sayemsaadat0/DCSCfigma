"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../(shared)/SectionTitle/SectionTitle";
import Image from "next/image";
import fest from '../../../public/fest.png'
import { BsArrowUpRightSquareFill } from "react-icons/bs";
// todo add slider 
const Fest = () => {
    const backgroundStyle = {
        backgroundImage: 'url(https://i.ibb.co/y6bTH50/eventBg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % 5
            );
            return updatedIndexes;
        });
    };
    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 4) % 5
            );

            return updatedIndexes;
        });
    };

    const cardData = [
        {
            image: fest,
            title: 'DCSC Event Photography Program',
            date: '18-10-2023 to 20-10-2023'
        },
        {
            image: fest,
            title: 'DCSC Event Photography Program',
            date: '18-10-2023 to 20-10-2023'
        },
        {
            image: fest,
            title: 'DCSC Event Photography Program',
            date: '18-10-2023 to 20-10-2023'
        },
        {
            image: fest,
            title: 'DCSC Event Photography Program',
            date: '18-10-2023 to 20-10-2023'
        },
        {
            image: fest,
            title: 'DCSC Event Photography Program',
            date: '18-10-2023 to 20-10-2023'
        },
    ]

    const positions = ["center", "left1", "left", "right", "right1"];

    const cardsVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-50%", scale: 0.7, zIndex: 3 },
        left: { x: "-90%", scale: 0.5, zIndex: 2 },
        right: { x: "90%", scale: 0.5, zIndex: 1 },
        right1: { x: "50%", scale: 0.7, zIndex: 3 },
    };


    return (

        <div className="relative overflow-hidden">
            <h1 className="absolute left-[45%] md:left-[50%] top-10">Hello</h1>
            <div className="hero min-h-screen " style={backgroundStyle}>
           
           <div className="hero-content  text-center text-neutral-content  mx-auto ">
               <div className="flex items-center justify-between ">
                   {cardData.map((data, index) => (<motion.div
                       initial="center"
                       animate={positions[positionIndexes[index]]}
                       variants={cardsVariants}
                       transition={{ duration: 0.1 }}
                       key={index} className="card 
                   bg-[#1C2069] border w-full  md:w-[25%] absolute left-0 md:left-[38%]  border-[#484EDB] md:top-[20%] duration-700">
                       <div className='flex  p-4'>
                           <Image src={data.image} alt='e' width={400} height={400}></Image>
                       </div>
                       <div className="px-4">
                           <h4 className='text-[#FFD707] header text-left text-xl md:text-2xl'>{data.title}</h4>
                           <div className='flex  gap-6 items-center py-4'>
                               <p className='md:whitespace-nowrap'>{data.date} </p>
                               <button>
                                   <BsArrowUpRightSquareFill className='text-[#216DDE] hover:text-[#5b61c6] bg-white rounded-md' size={40}></BsArrowUpRightSquareFill>
                               </button>
                           </div>
                       </div>
                   </motion.div>
                   ))}
               </div>

               <div className="flex flex-row gap-3 mt-56">
                   <button
                       className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
                       onClick={handleBack}
                   >
                       Back
                   </button>
                   <button
                       className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
                       onClick={handleNext}
                   >
                       Next
                   </button>
               </div>
           </div>
       </div>
        </div>

    );
};

export default Fest;