import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-blue-500 text-white'>
        <div className='w-[80%] mx-auto py-[1rem] flex justify-between items-center'>
            <Link to='/' className='text-3xl font-bold'>LOGO CRUD</Link>
            <ul className='flex gap-4 font-bold'>
                <li className='hover:text-black duration-300'><Link to='/'>Home</Link></li>
                <li className='hover:text-black duration-300'><Link to='about'>About</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
