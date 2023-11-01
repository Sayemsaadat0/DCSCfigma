"use client"
import Image from 'next/image';
import logo from '../../../../public/logo.png'
import { BsFacebook } from 'react-icons/bs';


const Footar = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer footer-center p-10 bg-[#000D37] text-primary-content">
            <aside className='max-w-4xl '>
                <Image width={80} height={120} alt="logo" src={logo}></Image>

                <p className="font-bold text-2xl ">
                    Dhaka College Science Clab
                </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa vel accusamus suscipit mollitia quo numquam asperiores praesentium eum, incidunt quisquam dignissimos voluptatum, ut ullam quos placeat magni exercitationem qui consequuntursjdhsd shdusd  expl</p>
            </aside>

            <div className='flex gap-4 '>
                <BsFacebook size={24}></BsFacebook>
                <BsFacebook size={24}></BsFacebook>
                <BsFacebook size={24}></BsFacebook>
                <BsFacebook size={24}></BsFacebook>
                <BsFacebook size={24}></BsFacebook>
            </div>
            <hr className='bg-white w-full' />
            {/* <div className="divider bg-white border-0 w-full"></div> */}
            <div className=''>
                <p>&copy; Copyright {currentYear}</p>
            </div>



        </footer>
    );
};

export default Footar;