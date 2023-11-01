import React from 'react';

const Buttons = ({ text }) => {
    return (
        <button className='inline-block w-full px-4 py-2 text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary rounded-[10px]'>
            {text}
        </button>
    );
};

export default Buttons;