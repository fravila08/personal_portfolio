import zapdos from "../images/pokemon/zapdos.png";
import articuno from "../images/pokemon/articuno.png";
import moltres from "../images/pokemon/moltres.png";
import lugia from "../images/pokemon/lugia.png";
import { Shake } from "reshake"

function ThePast(){
    return (
        <div style={{paddingTop:"4vw"}}>
            <div style={{textAlign:"center"}}>
                <h1>EXPERIENCE</h1>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{display:"flex", flexDirection:"column", alignContent:"center", }}>
                    <div className="xpRow">
                        <div>
                            <div className="pokeHolder">
                                <Shake h={0} r={0} v={60} dur={2000}><img className="xpPoke" src={lugia}/></Shake>
                            </div>
                        </div>
                        <div style={{display:"flex", width:"70%", flexDirection:"column"}}>
                            <h3>ALUMNI CAREER COACH</h3>
                            <p>Current</p>
                            <p>After graduating from Code Platoon I was offered the ability to become a Career Coach for future Cohorts. Needless to say I hopped on the opportunity
                                to give whatever help I could to those in the same path I've had to go through.
                            </p>
                        </div>
                    </div>
                    <div className="xpRow">
                        <div style={{display:"flex", width:"70%", flexDirection:"column"}}>
                            <h3>TEACHER'S ASSISTANT</h3>
                            <p>Current</p>
                            <p>I am currently assisting students in Code Platoon's Full Stack Software Engineering Program in 
                                their abilities to utilize JavaScript, Python, AJAX, HTML, CSS, BootStrap, API's, Django, Django Rest Framewords
                                PostgreSQL, Git, Github, CRUD, and React to build algorithms and websites for their portfolio and or daily assignments.
                            </p>
                        </div>
                        <div>
                            <div className="pokeHolder">
                                <Shake h={0} r={0} v={60} dur={2000}><img className="xpPoke" src={articuno}/></Shake>
                            </div>
                        </div>
                    </div>
                    <div className="xpRow">
                        <div>
                            <div className="pokeHolder">
                                <Shake h={0} r={0} v={60} dur={2000}><img className="xpPoke" src={moltres}/></Shake>
                            </div>
                        </div>
                        <div style={{display:"flex", width:"70%", flexDirection:"column"}}>
                            <h3>COMBAT INSTRUCTOR</h3>
                            <p>2019-2022</p>
                            <p>I was selected to serve in a Special Duty Assignment 
                                where I taught entry level students the fundamentals of Basic Infantry Tactics and Mortar Gunnery through both physical
                                and academic evaluations.
                            </p>
                        </div>
                    </div>
                    <div className="xpRow">
                        <div style={{display:"flex", width:"70%", flexDirection:"column"}}>
                            <h3>SECTION LEADER</h3>
                            <p>2017-2019</p>
                            <p>Here I led 13 Marines and was encharge in ensuring 
                                their physical performance in combat excercises to support Battalion and Company Level Units.</p>
                        </div>
                        <div>
                            <div className="pokeHolder">
                                <Shake h={0} r={0} v={60} dur={2000}><img className="xpPoke" src={zapdos}/></Shake>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThePast;