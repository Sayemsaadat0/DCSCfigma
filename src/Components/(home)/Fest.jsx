"use client"
import SectionTitle from "../(shared)/SectionTitle/SectionTitle";
import Image from "next/image";
import fest from '../../../public/fest.png'
// todo add slider 
const Fest = () => {
    const backgroundStyle = {
        backgroundImage: 'url(https://i.ibb.co/y6bTH50/eventBg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (

        <div className="hero min-h-screen" style={backgroundStyle}>
            <div className="hero-content text-center text-neutral-content max-w-[1500px] mx-auto">
                <SectionTitle bigText={'DCSC EVENT FEST-2023'} smallText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when'}></SectionTitle>
            </div>
        </div>

    );
};

export default Fest;