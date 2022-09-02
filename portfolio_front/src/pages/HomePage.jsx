import {Link } from "react-router-dom"

function Home(){
    return (
        <div style={{paddingTop:"4vw", display:"flex", justifyContent:"center"}}>
            <div style={{display:"flex", flexDirection:"column", textAlign:"center", width:"70%", paddingBottom:"10vh"}}>
                <h1>Greetings,</h1>
                <br/>
                <h3>
                    I have recently completed a Full-Stack Software Engineer Boot Camp where I learned
                    to create Full-Stack applications with React, PostgreSQL, and Django. I can manage API's through AJAX request
                    to create content and/or grab necessary information for a certain task. I've also learned the concepts of CRUD
                    and OOP to create better interactive applications. Now that I've completed an 8 year term with the 
                    United States Marine Corps, I am excited and looking forward to the beginning of my career as a Junior Software Engineer. 
                </h3>
            </div>
        </div>
    )
}

export default Home;