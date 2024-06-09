import React from 'react'

function Footer() {
  return (
    <div className='border-t border-[#000]'>
      <div className='flex w-5/6 mx-auto items-center justify-between py-10 '>
        <a className='text-3xl font-semibold font-mono' href='/'><span className='text-[#ec4d4d]'>N!</span>Blog</a>
        <div className='w-1/3'>
            <p className='text-lg'>This is my homework blog page, where different posts from dummyJSON are fetching, you can login, edit, delete ypur blogs here. Hope you like it!</p>
        </div>
        <div className='block text-left'>
          <a href="/" className='text-lg'>Home page</a>
          <p className='text-lg pt-3' >Sign In page</p>
        </div>
      </div>

    </div>
  )
}

export default Footer