import React, { useState } from 'react';

const HomeHeader = () => {
    let Links = [
        { name: "Services", link: "/" },
        { name: "Pricing", link: "/" },
        { name: "Help Center", link: "/" },
    ];
    let [open] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                {/* Logo  */}
                <div className='font-bold text-2xl cursor-default flex items-center gap-1'>
                    <span>SponsorUp</span>
                </div>
                
                {/* Link items */}
                <div className='flex-1 flex justify-center'>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                        {Links.map((link, index) => (
                            <li key={index} className='md:mx-4 md:my-0 my-7 font-semibold'>
                                <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Buttons */}
                <div className='flex items-center'>
                    <button className='btn bg-gray-100 text-purple-500 md:ml-4 px-3 py-1 rounded duration-50 md:static'>Log in</button>
                    <button className='btn bg-purple-500 text-gray-100 md:ml-4 px-3 py-1 rounded duration-50 md:static'>Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
