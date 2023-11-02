import Image from 'next/image';
import fest from '../../../public/fest.png'
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

const page = () => {
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
    return (
        <div className="md:py-64 pt-36 min-h-screen max-w-[1366px] mx-auto px-6">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20'>
                {
                    cardData.map((data, index) => <div key={index} className="card 
                    bg-[#1C2069] border border-[#484EDB] hover:scale-105 duration-700">
                        <div className='flex justify-center items-center p-4'>
                            <Image src={data.image} alt='e' width={400} height={400}></Image>
                        </div>
                        <div className="px-4">
                            <h4 className='text-[#FFD707] header text-xl md:text-2xl'>{data.title}</h4>
                            <div className='flex justify-between gap-6 items-center py-4'>
                                <p className='md:whitespace-nowrap'>{data.date} </p>
                                <button>
                                    <BsArrowUpRightSquareFill className='text-[#216DDE] hover:text-[#5b61c6] bg-white rounded-md' size={40}></BsArrowUpRightSquareFill>
                                </button>
                            </div>
                        </div>
                    </div>
                    ) }
            </div>
        </div>
    );
};

export default page;