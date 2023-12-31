"use client"
import Image from 'next/image';
import logo from '../../../../public/logo.png'
import { BsFacebook, BsInstagram, BsGoogle, BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';


const Footar = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer footer-center p-10 bg-[#000D37] text-primary-content">
            <aside className='max-w-4xl '>
                <Image width={80} height={120} alt="logo" src={logo}></Image>

                <p className="font-bold text-2xl ">
                    Dhaka College Science Clab
                </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa vel accusamus suscipit mollitia quo numquam asperiores praesentium eum, incidunt quisquam dignissimos voluptatum, ut ullam quos placeat magni exercitationem qui ttconsequuntursjdhsd shdusd  expl</p>
            </aside>

            <div className='flex gap-4 '>
                <BsFacebook size={24}></BsFacebook>
                <BsInstagram size={24}></BsInstagram>
                <BsGoogle size={24}></BsGoogle>
                <BsWhatsapp size={24}></BsWhatsapp>
                <MdEmail size={24}></MdEmail>
            </div>
            <hr className='bg-white w-full' />
            {/* <div className="divider bg-white border-0 w-full"></div> */}
            <div className=''>
                <p>&copy; Copyright {currentYear}  All Rights Reserved by DCSC</p>
                <p>Built By <span className='text-secondary font-bold'>The YOLO Studio</span></p>
            </div>



        </footer>
    );
};

export default Footar;