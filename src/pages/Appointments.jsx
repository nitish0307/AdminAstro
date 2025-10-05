import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Appointments = () => {

  const {teacherID} = useParams()
  const {teachers} = useContext(AppContext)

  const [teacherInfo, setTeacherInfo] = useState(null)

  const fetchTeacherInfo = async () => {
    const teacherInfo = teachers.find((teacher) => teacher._id === teacherID)
    setTeacherInfo(teacherInfo)
  } 

  useEffect(()=>{
    fetchTeacherInfo()
  },[teachers,teacherID])

  return (
    <div>
      
    </div>
  )
}

export default Appointments
