import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hero from './assets/components/hero.jsx'
import About from './assets/components/About.jsx'
import Skill from './assets/components/Skills.jsx'
import Project from './assets/components/Projects.jsx'
import Contact from './assets/components/Contact.jsx'

function App() {
  return (<>
    <Hero />
    <About/>
    {/* <Skill/> */}
    <Project/>
    <Contact/>

    </>
  
  
  )
}

export default App
