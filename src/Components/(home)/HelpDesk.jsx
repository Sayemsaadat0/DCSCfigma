import React from 'react';
import Buttons from '../(shared)/Buttons/Buttons';

const HelpDesk = () => {
    return (
        <div className='min-h-[480px] mx-auto flex justify-center items-center'>
            <div className='parallax  w-full md:w-[900px] md:h-[300px] h-full flex justify-center '>
                <div className='text-3xl text-center pt-10'>
                    <h1 className='pb-10'>Need Any Help?</h1>
                    <div className='input-data md:flex gap-4 items-center px-4 md:px-16'>
                        <input type="Email" placeholder='Email' /> 
                        
                        <input className='my-10 md:my-0' type="text" placeholder='Details' />
                        <Buttons text={'send'}></Buttons> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpDesk;