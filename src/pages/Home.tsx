import React from 'react'
import SectionQualquer from '../components/Sections/SectionQualquer'
import UserAdd from '../components/User/UserAdd'
import UserList from '../components/User/UsertList'

export default function Home() {
  return (
    <div className='main_container'>
      <div className="text-center">Home</div>
      <section>
        <SectionQualquer />
        <h2>Zustand</h2>
        <UserList />
        <UserAdd />
      </section>
    </div>
  )
}

