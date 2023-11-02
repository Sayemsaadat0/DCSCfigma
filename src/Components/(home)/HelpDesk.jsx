

import Image from 'next/image';
import helpbg from '../../../public/helpbg.png'
import Buttons from '../(shared)/Buttons/Buttons';
import SectionTitle from '../(shared)/SectionTitle/SectionTitle';
const HelpDesk = () => {
    return (
        <div className='md:min-h-[680px] pb-16 md:pb-0 flex justify-center max-w-[1500px] mx-auto items-center'>
            <div className='relative '>
                <Image className='px-4 relative md:block hidden' src={helpbg} alt='bg' width={1500} height={400}></Image>
              
                <div className='text-3xl text-center md:absolute top-10  left-36  md:pt-16'>
                <SectionTitle bigText={'Need Any Help?'}></SectionTitle>
                    <div className='input-data  justify-center  md:flex gap-4 items-center py-6 px-6 md:px-28'>
                        <input className='email' type="Email" placeholder='Email' />

                        <input  className='my-10 md:my-0 details' type="text" placeholder='Details' />
                        <Buttons text={'Sent'}></Buttons>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpDesk;