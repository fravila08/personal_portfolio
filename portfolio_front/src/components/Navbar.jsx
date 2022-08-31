import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import pokeBall from "../images/pokeballs/pokeBall.png"
import ash from "../images/pokemon/ash.png"
import { Shake } from "reshake"

function NavBaar(){
    return(
        <Navbar style={{paddingBottom:"0"}} >
            <Nav style={{display:"flex", justifyContent:"space-around", width:"100%", marginTop:"10vh"}}>
                <Nav.Link href="/">
                    <div className='ballHolder'>
                        <h6 style={{outlineWidth:"5px", outlineStay:'solid'}} className='header' >HOME</h6>
                        <Shake><img  className='navBall' src={pokeBall}/></Shake>
                    </div>
                </Nav.Link>
                <Nav.Link href="/#/myProjects">
                    <div className='ballHolder'>
                        <h6 className='header' >PROJECTS</h6>
                        <Shake><img  className='navBall' src={pokeBall}/></Shake>
                    </div>
                </Nav.Link>
                <Nav.Link href='/#/thePast'>
                    <div className='ballHolder'>
                        <h6 className='header' >XP</h6>
                        <Shake><img  className='navBall' src={pokeBall}/></Shake>
                    </div>
                </Nav.Link>
                <Nav.Link href='/#/contactMe'>
                    <div className='ballHolder'>
                        <h6 className='header' >CONTACT</h6>
                        <Shake><img  className='navBall' src={pokeBall}/></Shake>
                    </div>
                </Nav.Link>
                <div style={{display:"flex", justifyContent:"center", width:"1px", alignItems:"center"}} >
                    <div style={{position:"absolute"}}>
                        <img className='ash' src={ash}/>
                    </div>
                </div>
            </Nav>
        </Navbar>
    )
}

export default NavBaar;