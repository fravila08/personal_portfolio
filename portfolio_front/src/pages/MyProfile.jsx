import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import circle from "../assets/circle.png"
import goldStar from "../assets/goldStar.png"
import trainer from "../assets/trainer.png"
import pokeBall from "../images/pokeballs/pokeBall.png"
import boulder from "../images/badges/boulder.png"
import cascade from "../images/badges/cascade.png"
import earth from "../images/badges/earth.png"
import marsh from "../images/badges/marsh.png"
import rainbow from "../images/badges/rainbow.png"
import soul from "../images/badges/soul.png"
import thunder from "../images/badges/thunder.png"
import volcano from "../images/badges/volcano.png"

function Myprofile({user, setReleaseShow, setShowEarth}){
    const [pokemon, setPokemon] = useState([])
    const [show, setShow] = useState(false)
    const [count, setCount]=useState(0)

    const theATeam = async () =>{
        let newTeam =await axios.get("getMyPokemon")
        setPokemon(newTeam.data)
        setShow(!show)
    }

    useEffect(()=>{
        theATeam()
    },[])
    
    const releasePokemon=(id)=>{
        try{
            axios.delete(`release/${id}`).then((response)=>{
                newBadge()
                setReleaseShow(true)
            })
            
        }
        catch{
            alert("Couldn't release Pokemon")
        }
    }
    const getBadges= async()=>{
        const badgeNumber = await axios.get("badges")
        let num= badgeNumber.data
        setCount(num)
    }

    useEffect (()=>{
        getBadges()
    },[])

    
    
    const newBadge = async () =>{
        const badge= await axios.get('badges')
        if (badge.data < 8 && badge.data == 7){
            axios.put('badges')
            setShowEarth(true)
        }
    }
    
    return(
        <div style={{marginTop:"20vh", paddingBottom:"10vh"}}>
            <div className="pokemonTeam">
                {pokemon.length ? 
                pokemon.map((poke)=>(
                    <div className="pokeCardTeam">
                        <img src={pokeBall} style={{position:"absolute", height:"10vh", zIndex:"-1"}}/>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <img className="releasePoke" src={poke.picture} />
                            <button style={{color:"red", border:"2px solid red", borderRadius:"5px"}} onClick={()=>releasePokemon(poke.id)}>RELEASE</button>
                        </div>
                        <div>
                            <ul>{poke.nickname ?<strong> {poke.nickname}</strong> : <strong>{poke.name.toUpperCase()}</strong>}
                                <li>{poke.move_one}</li>
                                <li>{poke.move_two}</li>
                                <li>{poke.move_three}</li>
                                <li>{poke.move_four}</li>
                            </ul>
                        </div>
                    </div>
                )): 
                // <button style={{color:"gold", backgroundColor:"red", border:"5px black solid", padding:"10px 20px", fontSize:"3vh", borderRadius:"30px"}} onClick={theATeam}>See My Team</button>
                <p></p>}
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className='trainerCard'>
                    <div className="cardHeader">
                        <div>
                            <h2 style={{color:"goldenrod", borderBottom:"solid 2px goldenrod", borderTop:"solid 2px goldenrod"}}>
                            TRAINER CARD
                            </h2>
                        </div>
                        <div className="idOnCard">
                            <h2 >IDNo.000{user && user.id}</h2>
                        </div>
                    </div>
                    <div className="cardBody">
                        <div className="leftSide">
                            <h4 className="leftSideContent" style={{textDecoration:"underline"}} ><img className="bulletCircle" src={circle} />NAME: <strong>{user && user.first_name} {user && user.last_name}</strong></h4>
                            <div style={{display:"flex", justifyContent:"right"}}><img src={goldStar} className="star" /><img src={goldStar} className="star" /><img src={goldStar} className="star" /></div>
                            <h4 className="leftSideContent" ><img className="bulletCircle" src={circle} />JOB TITLE: {user && user.job_title}</h4>
                            <h4 className="leftSideContent"><img className="bulletCircle" src={circle} />EMAIL: {user && user.email}</h4>
                            <h4 className="leftSideContent"><img className="bulletCircle" src={circle} />MEMBER SINCE: {user && user.date_joined.toString().split("T")[0]}</h4>
                        </div>
                        <div className="rightSide">
                            <img src={trainer} style={{height:"25vh"}}/>
                        </div>
                    </div>
                    <div className="badges">
                        BADGES
                        <div style={{display:"flex", justifyContent:"space-around"}} >
                            <div className="badgeBorder">
                                {count >=1 ?<img src={boulder} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                            <div className="badgeBorder">
                                {count >=2 ?<img src={cascade} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                            <div className="badgeBorder">
                                {count >=3 ?<img src={thunder} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                            <div className="badgeBorder">
                                {count >=4 ?<img src={rainbow} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                            <div className="badgeBorder">
                                {count >=5 ?<img src={soul} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                            <div className="badgeBorder">
                                {count >=6 ?<img src={marsh} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                            <div className="badgeBorder">
                                {count >=7 ?<img src={volcano} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                            <div className="badgeBorder">
                                {count == 8 ?<img src={earth} style={{height:"4vh"}}/> : <p></p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Myprofile;