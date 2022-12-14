import pokeBall from "../images/pokeballs/pokeBall.png"
import masterBall from "../images/pokeballs/masterBall.png"
import ultraBall from "../images/pokeballs/ultraBall.png"
import greatBall from "../images/pokeballs/greatBall.png"
import {Shake} from "reshake"
import axios from "axios"

function ContactMe({setShowVolcano}){

    const newBadge = async () =>{
        const badge= await axios.get('badges')
        if (badge.data < 7 && badge.data == 6){
            axios.put('badges')
            setShowVolcano(true)
        }
    }


    return(
        <div style={{paddingTop:"5vw"}}>
            <div style={{textAlign:"center"}}>
                <h1>Contact Me</h1>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{display:"flex", flexDirection:"column", alignContent:"center", }}>
                    <div id="contactForm" className="contactRow">
                        <div style={{display:"flex", flexDirection:"column-reverse"}}>
                            <h3>Send Me an Email</h3>
                            <Shake><img className="ballRow" src={masterBall}/></Shake>
                        </div>
                        <form action="https://formsubmit.co/fr4v1l4@gmail.com" method="POST" >
                            <div className="formContactHolder">
                                <input type="text" placeholder="Your Name" />
                                <input type="text" placeholder="Your Email" />
                            </div>
                            <textarea cols="30" rows="10" placeholder="Type your message here."></textarea>
                            
                            <button type="submit" style={{color:"white",backgroundColor:"green", boder:"10px green solid", width:"100%"}}> Send</button>
                        </form>
                    </div>
                    <div className="contactRow"   onClick={newBadge}>
                        <Shake><img className="ballRow" src={ultraBall}/></Shake>
                        <div style={{display:"flex", width:"70%", justifyContent:"space-between"}}>
                            <h5>LINKEDIN:</h5><h5><a target="_blank" href="https://linkedin.com/in/francisco-r-avila">CONNECT</a></h5>
                        </div>
                    </div>
                    <div className="contactRow" >
                        <Shake><img className="ballRow" src={greatBall}/></Shake>
                        <div style={{display:"flex", width:"70%", justifyContent:"space-between"}}>
                            <h5>GITHUB:</h5><h5><a href="https://github.com/fravila08">MY REPOSITORIES</a></h5>
                        </div>
                    </div>
                    <div className="contactRow">
                        <Shake><img className="ballRow" src={pokeBall}/></Shake>
                        <div style={{display:"flex", width:"70%", justifyContent:"space-between"}}>
                            <h5>PHONE:</h5><h5><a href="#">(559)819-9857</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;