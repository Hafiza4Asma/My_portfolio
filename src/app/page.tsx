import React from 'react'
import Hero from './component/hero'
import Contact from './component/contact'
import Project from './component/project'
import About from './component/about'
import Skills from './component/skills'
// import Image from 'next/image'

const Page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      
    </div>
  )
}

export default Page

