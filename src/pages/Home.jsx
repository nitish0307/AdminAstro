import React from 'react'
import Header from '../components/Header'
import DepartmentMenu from '../components/DepartmentMenu'
import RecomendedTeachers from '../components/RecomendedTeachers'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Header/>
        <DepartmentMenu/>
        <RecomendedTeachers/>
        <Banner/>
    </div>
  )
}

export default Home
