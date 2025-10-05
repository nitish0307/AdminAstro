import React from 'react'
import { departmentData } from '../assets/assets'
import { Link } from 'react-router-dom'

const DepartmentMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='department'>
        <h1 className='text-3xl font-medium'>Find by your department </h1>
        <p className='sm:w1/3 text-center text-sm'>Simply browse through our extensive list of faculties, schedule your appointment hassle-free. </p>
        <div className='flex justify-center gap-4 pt-5 w-full overflow-scroll'>
            {departmentData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/teachers/${item.department}`} >
                    <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                    <p>{item.department}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

// 1:12:09 completed

export default DepartmentMenu
