import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBaar from './components/Navbar'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ThePast from './pages/ThePast';
import ContactMe from "./pages/ContactMe"
import PokeSep from './components/PokeSep';

function App() {
  

  return (
    <div className="App" >
      <div className='topHeader' >
        <div style={{display:"flex", justifyContent:"center", height:"35%", marginBottom:"18%"}}>
          {/* <h1 id="circularText" style={{fontFamily: "'Pokemon Solid', sans-serif", color:"gold"}} className="portIntro">Welcome to my Portfolio</h1> */}
          <div style={{textAlign:"center"}}>
            <span id="letter1" className='letters'>W</span>
            <span id="letter2" className='letters'>e</span>
            <span id="letter3" className='letters'>l</span>
            <span id="letter4" className='letters'>c</span>
            <span id="letter5" className='letters'>o</span>
            <span id="letter6" className='letters'>m</span>
            <span id="letter7" className='letters'>e</span>
          
            <span id="letter8" className='letters'>T</span>
            <span id="letter9" className='letters'>o</span>
            <span id="letter10" className='letters'> </span>
            <span id="letter11" className='letters'>M</span>
            <span id="letter12" className='letters'>y</span>
            <span id="letter13" className='letters'> </span>
            <span id="letter14" className='letters'>P</span>
            <span id="letter15" className='letters'>o</span>
            <span id="letter16" className='letters'>r</span>
            <span id="letter17" className='letters'>t</span>
            <span id="letter18" className='letters'>f</span>
            <span id="letter19" className='letters'>o</span>
            <span id="letter20" className='letters'>l</span>
            <span id="letter21" className='letters'>i</span>
            <span id="letter22" className='letters'>o</span>
          </div>
        </div>
        <NavBaar />
      </div>
      <PokeSep />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myProjects" element={<ProjectPage />} />
          <Route path='/thePast' element={<ThePast />} />
          <Route path='/contactMe' element={<ContactMe />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
