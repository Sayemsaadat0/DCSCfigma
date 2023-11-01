import Image from 'next/image';
import SectionTitle from '../(shared)/SectionTitle/SectionTitle';
import committee from '../../../public/committee.png'
import Buttons from '../(shared)/Buttons/Buttons';

const HomeComittee = () => {
    return (
        <div className=' text-center '>
            <SectionTitle bigText={'Executive Committee 2023'} smallText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when'}></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 px-4 mt-20 z-10 '>
                {/* crds */}
                <div className="card rounded-lg z-10">
                    <Image className='relative rounded-lg' src={committee} alt='ss' width={400} height={400}></Image>
                    <div className='text-left cards ps-6 '>

                    </div>
                    <div className='text-left z-20 px-4 pb-4'>
                        <p className='text-xl font-bold'>Mahfuzur Rahman Ongkon</p>
                        <p className='text-secondary'>Joint Secretary of Sponsorship and Communication</p>
                    </div>
                </div>
                {/* crds */}
                <div className="card rounded-lg">
                    <Image className='relative rounded-lg' src={committee} alt='ss' width={400} height={400}></Image>
                    <div className='text-left cards ps-6 '>

                    </div>
                    <div className='text-left z-20 px-4 pb-4'>
                        <p className='text-xl font-bold'>Mahfuzur Rahman Ongkon</p>
                        <p className='text-secondary'>Joint Secretary of Sponsorship and Communication</p>
                    </div>
                </div>
                {/* crds */}
                <div className="card rounded-lg">
                    <Image className='relative rounded-lg' src={committee} alt='ss' width={400} height={400}></Image>
                    <div className='text-left cards ps-6 '>

                    </div>
                    <div className='text-left z-20 px-4 pb-4'>
                        <p className='text-xl font-bold'>Mahfuzur Rahman Ongkon</p>
                        <p className='text-secondary'>Joint Secretary of Sponsorship and Communication</p>
                    </div>
                </div>
                {/* crds */}
                <div className="card rounded-lg">
                    <Image className='relative rounded-lg' src={committee} alt='ss' width={400} height={400}></Image>
                    <div className='text-left cards ps-6 '>

                    </div>
                    <div className='text-left z-20 px-4 pb-4'>
                        <p className='text-xl font-bold'>Mahfuzur Rahman Ongkon</p>
                        <p className='text-secondary'>Joint Secretary of Sponsorship and Communication</p>
                    </div>
                </div>
            </div>

            <div className='my-20'>
                <Buttons text={'All Members'}></Buttons>
            </div>
        </div>
    );
};

export default HomeComittee;