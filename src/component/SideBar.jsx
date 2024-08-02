import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className='text-white bg-blue-500 border-black border-[1px] p-3 h-screen'>
        <ul>
            <li className='mb-3 font-bold'>
                <Link to="products">Get All Products</Link>
            </li>
            <li className='mb-3 font-bold'>
                <Link to="products">Get All Categories</Link>
            </li>
        </ul>
    </div>
  )
}

export default SideBar
