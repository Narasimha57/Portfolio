import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certifications from './components/Certifications'
import Skills from './components/Skills'


const App = () => {
  return (
    <div>
      <NavBar />
      <br />
      <Hero />
      <Projects/>
      <Skills/>
      <Certifications/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
