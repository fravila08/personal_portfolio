import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBaar from './components/Navbar'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ThePast from './pages/ThePast';
import ContactMe from "./pages/ContactMe"
import PokeSep from './components/PokeSep';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import axios from 'axios';
import MyProfile from './pages/MyProfile';
import MyVerticallyCenteredModal from './components/modals';
import ReleaseModal from './components/releaseModal';
import NeedToRelease from './components/tooManyModal';
import BoulderBadge from './modals/boulderModal';
import CascadeBadge from './modals/cascadeModal';

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
const csrftoken = getCookie('csrftoken');
axios.defaults.headers.common['X-CSRFToken']= csrftoken



function App() {
  const [user, setUser] = useState(null)

  function signOut(){
    event.preventDefault()
    axios.post('/sign_out').then((respone)=>{
      window.location.href=""
    })
  }

  async function curr_user() {
    const response = await axios.get('profile_page')
    setUser(response.data)
    // console.log(response.data)
  }

  useEffect(() => {
    curr_user()
  }, [])

  const [modalShow, setModalShow] = useState(false);
  const [releaseShow, setReleaseShow]= useState(false);
  const [needRelease, setNeedRelease]=useState(false);
  const [showBoulder, setShowBoulder]= useState(false);
  const [showCascade, setShowCascade]=useState(false)
  
  return (
    <div className="App" >      
      {user ?
          <div style={{display:"flex",justifyContent:"space-around", width:"18vw", position:"absolute", top:"0", right:"0"}}>
            <a href="#/myProfile" style={{textDecoration:"none", color:"gold"}} ><strong>My Profile</strong></a>
            <a href="#" onClick={signOut}  style={{textDecoration:"none", color:"gold"}} ><strong>Sign Out</strong></a>
          </div> :
          <div style={{display:"flex",justifyContent:"space-around", width:"18vw", position:"absolute", top:"0", right:"0"}}>
            <a href="#/signUp" style={{textDecoration:"none", color:"gold"}} ><strong>Sign Up</strong></a>
            <a href="#/signIn" style={{textDecoration:"none", color:"gold"}} ><strong>Sign In</strong></a> 
          </div> }
      <div className='topHeader' >
        <div style={{display:"flex", justifyContent:"center", height:"35%", marginBottom:"18%"}}>
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
        <NavBaar user={user} setShowBoulder={setShowBoulder} />
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        <ReleaseModal
        user={user}
        show={releaseShow}
        onHide={() => {
          setReleaseShow(false)
          window.location.reload()
        }}
        />
        <NeedToRelease
        user={user}
        show={needRelease}
        onHide={() => setNeedRelease(false)}
        />
        <BoulderBadge 
         show={showBoulder}
         onHide={()=>{setShowBoulder(false)}}
        />
        <CascadeBadge 
         show={showCascade}
         onHide={()=>{setShowCascade(false)}}
        />
      </div>
      <PokeSep />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myProjects" element={<ProjectPage user={user} setModalShow={setModalShow} setShowCascade={setShowCascade} setNeedRelease={setNeedRelease}/>} />
          <Route path='/thePast' element={<ThePast />} />
          <Route path='/contactMe' element={<ContactMe user={user} />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/myProfile' element={<MyProfile user={user} setReleaseShow={setReleaseShow}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
