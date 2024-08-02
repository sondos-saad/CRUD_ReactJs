import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>
        <h1 className='text-3xl font-bold text-center mb-[1rem] pt-[1rem] text-blue-500'>Product Page</h1>
        <div className=' mb-[1rem]'>
            <Link to="/products/add" className='font-bold w-[200px]  bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-300 hover:text-black duration-300'>Add New Product</Link>
        </div>
        <table className="w-full min-w-max table-auto ">
            <thead className='text-center'>
                <tr className='bg-gray-100 border-b border-gray-100'>
                    <th className=" p-4  ">ID</th>
                    <th className=" p-4">Title</th>
                    <th className=" p-4 ">Price</th>
                    <th className=" p-4">Operations</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                <tr className='border-b '>
                    <td className=" p-4 ">1</td>
                    <td className=" p-4 ">Product1</td>
                    <td className=" p-4">100</td>
                    <td className=" p-4 flex justify-center items-center gap-[.5rem] ">
                        <button className='font-bold w-[70px]  bg-red-500 text-white p-2 rounded-xl hover:bg-red-300 hover:text-black duration-300'>Delete</button>
                        <button className='font-bold w-[70px] bg-green-500 text-white p-2 rounded-xl hover:bg-green-300 hover:text-black duration-300'>View</button>
                        <button className='font-bold w-[70px]  bg-black text-white p-2 rounded-xl hover:bg-gray-300 hover:text-black duration-300'>Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Products
