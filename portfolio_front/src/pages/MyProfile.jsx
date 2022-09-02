import axios from "axios";
import circle from "../assets/circle.png"
import goldStar from "../assets/goldStar.png"
import trainer from "../assets/trainer.png"

function Myprofile({user}){
    return(
        <div style={{marginTop:"15vh", paddingBottom:"10vh"}}>
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
                            <ul >
                                <li style={{textDecoration:"underline"}} ><img className="bulletCircle" src={circle} />Name: <strong>{user && user.first_name} {user && user.last_name}</strong></li>
                                <li style={{display:"flex", justifyContent:"right"}}><img src={goldStar} className="star" /><img src={goldStar} className="star" /><img src={goldStar} className="star" /></li>
                                <li ><img className="bulletCircle" src={circle} />Current Job Title: {user && user.job_title}</li>
                                <li ><img className="bulletCircle" src={circle} />Email Address: {user && user.email}</li>
                                <li ><img className="bulletCircle" src={circle} />Member Since: {user && user.date_joined.toString().split("T")[0]}</li>
                            </ul>
                        </div>
                        <div className="rightSide">
                            <img src={trainer} style={{height:"25vh"}}/>
                        </div>
                    </div>
                    <div className="badges">
                        BADGES
                        <div style={{display:"flex", justifyContent:"space-around"}} >
                            <div className="badgeBorder">

                            </div>
                            <div className="badgeBorder">
                                
                            </div>
                            <div className="badgeBorder">
                                
                            </div>
                            <div className="badgeBorder">
                                
                            </div>
                            <div className="badgeBorder">
                                
                            </div>
                            <div className="badgeBorder">
                                
                            </div>
                            <div className="badgeBorder">
                                
                            </div>
                            <div className="badgeBorder">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myprofile;