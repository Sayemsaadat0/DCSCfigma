import Image from 'next/image';
import fest from '../../../public/fest.png'
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

const page = () => {
    return (
        <div className="pt-64 min-h-screen max-w-7xl mx-auto text-justify px-4">
            <div>
                <div className="card 
                 bg-[#1C2069] border border-[#484EDB]">

                    <div className='flex justify-center items-center p-6 '>
                        <Image src={fest} alt='e' width={400} height={400}></Image>
                    </div>
                    <div className="px-6 ">
                        <h4 className='text-[#FFD707] header text-xl md:text-3xl'>DCSC Event Photography <br /> Program</h4>
                        <div className='flex justify-between gap-6 items-center py-4'>
                            <p>18-10-2023 to 20-10-2023</p>
                            <button>
                                <BsArrowUpRightSquareFill className='text-[#216DDE] hover:text-[#5b61c6] bg-white rounded-md' size={40}></BsArrowUpRightSquareFill>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default page;