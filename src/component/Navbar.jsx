import React from 'react'

function Navbar() {
  return (
    <div className='bg-blue-500 text-white'>
        <div className='w-[80%] mx-auto py-[1rem] flex justify-between items-center'>
            <h1 className='text-3xl font-bold'>LOGO CRUD</h1>
            <ul className='flex gap-4 font-bold'>
                <li className='hover:text-black duration-300'><a href='/'>Home</a></li>
                <li className='hover:text-black duration-300'><a href='/about'>About</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
