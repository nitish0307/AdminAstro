import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Teachers = () => {

  const { department } = useParams()
  const [filterTeacher, setFilterTeacher] = useState([])
  const navigate = useNavigate()

  const { teachers } = useContext(AppContext)

  const applyFilter = () => {
    if (department) {
      setFilterTeacher(teachers.filter(teacher => teacher.department === department))
    } else {
      setFilterTeacher(teachers)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[teachers,department])


  return (
    <div>
        <p className='text-gray-600'>Browse through the list of departments</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <div className='flex flex-col gap-4 text-sm text-gray-600'>
            <p onClick={()=> department === 'SET' ? navigate('/teachers') : navigate('/teachers/SET') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === "SET" ? "bg-indigo-100 text-black" : ""}`}>School of Engineering & Technology</p>
            <p onClick={()=> department === 'SCA' ? navigate('/teachers') : navigate('/teachers/SCA') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === "SCA" ? "bg-indigo-100 text-black" : ""}`}>School of Computer Application</p>
            <p onClick={()=> department === 'SAHS' ? navigate('/teachers') : navigate('/teachers/SAHS') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === "SAHS" ? "bg-indigo-100 text-black" : ""}`}>School of Allied Health & Sciences</p>
            <p onClick={()=> department === 'SAD' ? navigate('/teachers') : navigate('/teachers/SAD') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === "SAD" ? "bg-indigo-100 text-black" : ""}`}>School of Architecture & Design</p>
            <p onClick={()=> department === 'SDS' ? navigate('/teachers') : navigate('/teachers/SDS') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === "SDS" ? "bg-indigo-100 text-black" : ""}`}>School of Dental Science</p>
            <p onClick={()=> department === 'SHM' ? navigate('/teachers') : navigate('/teachers/SHM') } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === "SHM" ? "bg-indigo-100 text-black" : ""}`}>School of Hotel Management</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              filterTeacher.map((item, index)=>(
                <div onClick={()=>navigate(`/appointments/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt='' />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.namer}</p>
                        <p className='text-gray-600 text-sm'>{item.department}</p>
                    </div>
                </div>
            ))
            }
          </div>
        </div>
    </div>
  )
}

export default Teachers
