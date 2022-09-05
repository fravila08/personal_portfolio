import axios from "axios";
import {useState, useEffect} from "react"
import pokeBall from "../images/pokeballs/pokeBall.png"
import { Shake } from "reshake"
import Accordion from 'react-bootstrap/Accordion';
import FindPokemon from "../components/findPoke";

function MyProjects({user, setModalShow, setNeedRelease, setShowCascade, setShowThunder, setShowRainbow}){
    const [pokemon, setPokemon]=useState([])
    const [show, setShow]= useState(false)
    const pokemontList=['jolteon', 'mewtwo', 'dragonite', 'kadabra', 'blastoise', 'tyranitar']
    let urlList=[]
    
    useEffect(()=>{
            pokemontList.map(async (pokon)=>{    
                const newPokemon = await axios.request(`https://pokeapi.co/api/v2/pokemon/${pokon}`)
                urlList.push(newPokemon.data["sprites"]["front_default"])
                setPokemon(urlList)
                if (urlList.length === 6){
                    setShow(!show)
                }
            })
        },[])
    
    const newBadge = async () =>{
        const badge= await axios.get('badges')
        if (badge.data < 3 && badge.data == 2){
            axios.put('badges')
            setShowThunder(true)
        }
    }

    const newBadgeTwo = async () =>{
        const badge= await axios.get('badges')
        if (badge.data < 4 && badge.data == 3){
            axios.put('badges')
            setShowRainbow(true)
        }
    }
        

    return(
        <div style={{paddingTop:"6vw", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h5>This is my favorite team from Fire Red</h5>
            <div className="myTeamHolder" >
                {show ? pokemon.map((poke)=>(
                    <div>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <img src={pokeBall} className="backgroundBalls" />
                            <Shake style={{zIndex:"2"}}><img style={{height:"15vh", zIndex:"2"}} src={poke} /></Shake>
                        </div>
                    </div>
                )): <p></p>}
            </div>
            <div className="cards">
                <div className="leftCard">
                    <FindPokemon user={user} setModalShow={setModalShow} setNeedRelease={setNeedRelease} setShowCascade={setShowCascade}/>
                </div>
                <div className="middleCard">
                    <h1 style={{textDecoration:"underline"}}>Certificates & Projects</h1>
                    <Accordion defaultActiveKey="1" >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header onClick={newBadgeTwo}>Certificates</Accordion.Header>
                            <Accordion.Body>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Full-Stack Software Engineer</Accordion.Header>
                                    <Accordion.Body>
                                    What is full-stack software engineering anyway? Most sophisticated 
                                    web applications can be thought of as composed of two parts: the 
                                    front-end and the backend. The front-end of the stack revolves around 
                                    what the end-user sees, which is the web page. HTML, CSS, and 
                                    Javascript are essential technologies used to build and manipulate 
                                    web pages. React.js is a powerful library for working on the 
                                    front-end. The backend of the stack is where data gets stored, 
                                    managed, and analyzed. Our tools-of-the-trade for backend development 
                                    are Python and SQL.
                                    <br/>
                                    <a href="https://www.codeplatoon.org/full-stack/course-curriculum/#tab-id-1">Code Platoon</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Django</Accordion.Header>
                                    <Accordion.Body>
                                    Welcome to the world of Django (pronounced like JANG-go with a silent 
                                    D)! Get introduced to an open-source web development framework 
                                    supported by the Django Software Foundation. Django is written in 
                                    Python and provides an opinionated approach to web development 
                                    meaning
                                    you'll know how projects are structured and have a general set of 
                                    guidelines for how to bring your apps to life. Django comes with a 
                                    lot of tools already provided, so you can pick and choose what you 
                                    need to get the job done.
                                    <br/>
                                    <a href="https://www.codecademy.com">Code Cademy</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Data Analysis for Business</Accordion.Header>
                                    <Accordion.Body>
                                    Businesses generate tons of information, but they don’t always know 
                                    how to make use of it. So they look to masters of big data to make 
                                    sense of it all. Consider this your team's roadmap to success as data 
                                    analysts. They'll gain step-by-step guidance as they learn the skills 
                                    and tools needed to surface business critical information to the 
                                    organization.
                                    <br/>
                                    <a href="https://www.codecademy.com">Code Cademy</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Create an Advanced Web App with React and Redux</Accordion.Header>
                                    <Accordion.Body>
                                    Learning the basics of HTML, CSS, and JavaScript can only get you so 
                                    far. Learn React, the popular front-end library that powers Facebook 
                                    and Netflix. Then, jump into Redux, the state-management library 
                                    built specifically with React applications in mind.
                                    <br/>
                                    <a href="https://www.codecademy.com">Code Cademy</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Scaled Agile Frameworks</Accordion.Header>
                                    <Accordion.Body>
                                    77% of certified Scaled Agile Framework® (SAFe®) professionals pursue a 
                                    SAFe certification for professional development, and 63% rely on SAFe 
                                    certifications to prove their knowledge. So why should you join them?
                                    <br/>
                                    Business agility relies on people with the expertise to lead successful 
                                    transformations. Maybe you want to grow in your role at your current 
                                    company or seek new career opportunities outside your organization. 
                                    By earning a SAFe certification, you’ll expand your skills and experience 
                                    and be empowered to play a key role in driving business transformation.
                                    <br/>
                                    <a href="https://scaledagile.com">Scaled Agile</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>AWS Cloud Practitioner</Accordion.Header>
                                    <Accordion.Body>
                                    Who should take this exam?
                                    <br/>
                                    AWS Certified Cloud Practitioner is intended for anyone who has basic 
                                    knowledge of the AWS platform. Before taking this exam, we recommend you 
                                    have:
                                    <br/>
                                    -Six months of exposure to the AWS Cloud
                                    -Basic understanding of IT services and their uses in the AWS Cloud platform
                                    -Knowledge of core AWS services and use cases, billing and pricing models, security concepts, and how cloud impacts your business
                                    <br/>
                                    What does it take to earn this certification?
                                    <br/>    
                                    To earn this certification, you will need to take and pass the AWS Certified 
                                    Cloud Practitioner exam (CLF-C01). The exam features a combination of two 
                                    question formats: multiple choice and multiple response. Additional information, 
                                    such as a detailed exam content outline, is in the exam guide. 
                                    <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/">Amazon</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Projects</Accordion.Header>
                            <Accordion.Body>
                                

                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Restaurant Menu</Accordion.Header>
                                    <Accordion.Body>
                                    Full-Stack application using React, Django, PostgreSQL. Using two rapid 
                                    API's with Django Rest Frameworks to create the menu item content while 
                                    utilizing CRUD concepts to alter cart items for each user. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Code Platoon Fitness E-Store</Accordion.Header>
                                    <Accordion.Body>
                                    Django and PostgreSQL ran ecommerce application working with the noun 
                                    project API to create random items from search bar. This project clearly demonstrates
                                    Django's extends functionality in templates.
                                    <br/>
                                    <a href="#" onClick={newBadge}>Check Me Out</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>CraigList Junior</Accordion.Header>
                                    <Accordion.Body>
                                    Django ran post application used to clearly demonstrate CRUD concepts in a Forum format.
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Accordion>



                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="rightCard">
                        <h1 style={{textDecoration:"underline"}}>Education</h1>
                        <p style={{textDecoration:"underline"}}>
                        MSJC Computer Science</p>
                        <p>
                        The curriculum in Computer Science is designed to provide the transfer 
                        student the opportunity to earn an Associate in Science in Computer Science 
                        for Transfer degree. Computer Science is the study of computers, their design, 
                        and their uses for computation, data processing, and systems control, including 
                        design and development of computer hardware and software, and programming. Computer 
                        Science provides a foundation of knowledge for students with career objectives in a 
                        wide range of computing and computer-related professions.
                        <br/>
                        AS.CIS.CS.OPTB.AST or AS.CIS.CS.OPTCAST
                        <br/>
                        <a href="https://catalog.msjc.edu/instructional-programs/computer-information-systems/computer-science-as-t/#text">MSJC</a>    
                        </p>
                </div>
            </div>
        </div>
    )
}

export default MyProjects;