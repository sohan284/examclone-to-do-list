import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#1A1B2F29] mt-[50px] flex'>
            <h1 className='ml-[50px] pt-[13px] pb-[12px]  text-[13px] m'>TASK : <span className='text-[#E33E5A]'>To-</span> <span className='font-bold'>Do list</span></h1>
            <p className='pt-[13px] ml-[250px]'>My Name : <span className='font-bold'>MD Sohanur Rahman Sohan</span> </p>
            <p className='pt-[13px] ml-[80px] font-bold text-[blue]'><a href="https://github.com/sohan284/examclone-to-do-list">Project Repository Link</a></p>
            <h1 className='font-semibold font-bold pt-[13px] ml-[200px]'><span className='font-extrabold  text-[#E33E5A]'>D</span>esign Facility</h1>
        </div>
    );
};

export default Footer;