import Image from 'next/image';
import SectionTitle from '../(shared)/SectionTitle/SectionTitle';
import committee from '../../../public/committee.png'
import Link from 'next/link';

const HomeComittee = () => {
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
        }
    ]
    return (
        <div className=' text-center max-w-[1500px] mx-auto relative'>
            <SectionTitle bigText={'Executive Committee 2023'} smallText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when'}></SectionTitle>
            <div className='circle opacity-30 md:w-[100] md:h-[100] left-0 bottom-0 w-full h-full  absolute '></div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 px-4 mt-20 z-20 '>
               {userData.map((data, index) => (
                    <div key={index} className="card hover:scale-105 duration-700 rounded-lg group z-10">
                        <Image className='relative rounded-lg' src={data.image} alt='ss' width={400} height={400} />
                        <div className='text-left cards ps-6'></div>
                        <div className='text-left z-20 px-4 pb-4 group-hover:-translate-y-10 duration-700'>
                            <p className='text-xl font-bold'>{data.name}</p>
                            <p className='text-secondary'>{data.designation}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='my-20'>
                <Link className='inline-block  px-4 py-2 text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary rounded-[10px]' href='/committee'>All Member</Link>
            </div>
        </div>
    );
};

export default HomeComittee;