import SectionButton from '@/components/Shared/SectionButton/SectionButton';
import Image from 'next/image';
import React from 'react';

const HomeContact = () => {
    return (
        <div className='flex flex-col-reverse  md:flex-row justify-around items-center my-20 gap-7 md:gap-0'> 
            <div className='space-y-3 clear-start text-center md:text-start'>
                <h2 className='md:text-2xl text-lg  font-bold text-[#040404]'>Need help for planning your venue ?</h2>
                <h3 className='text-[#535552]'>Discover your venue with our <br /> management team for free in 24 hours</h3>
                <SectionButton text={'Contact our Team'} />
            </div>
            <div>
                <Image className='lg:w-[600px] w-[300px] h-[220px] md:w-[300px]' src={'https://i.ibb.co/MgR6Vyw/contact.jpg'} width={500} height={500} alt='contact image' />
            </div>
        </div>
    );
};

export default HomeContact;