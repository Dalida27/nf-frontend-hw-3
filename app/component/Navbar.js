'use client';

import React from 'react';
import { useTheme } from '../context/theme';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='border-b border-[#000]'>
      <div className='flex justify-between items-center w-5/6 mx-auto py-5'>
        <a className='text-3xl font-semibold font-mono' href='/'><span className='text-[#ec4d4d]'>N!</span>Blog</a>
        <p className='text-lg font-mono font-semibold'>This is my blog page</p>
        <div className='flex items-center font-mono'>
          <button
            className='mr-5 border-[#000] border rounded-full px-3 py-2 bg-[#ec4d4d] text-[#fff] font-semibold'
            onClick={toggleTheme}
          >
            Switch to {theme === 'light' ? 'dark' : 'light'} theme
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
