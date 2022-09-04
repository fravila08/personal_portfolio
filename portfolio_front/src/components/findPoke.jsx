import {useState} from "react"
import axios from "axios";
import pokeBall from "../images/pokeballs/pokeBall.png"
import { useEffect } from "react";

function FindPokemon({user, setModalShow, setNeedRelease}){

    const [pokemon, setPokemon] = useState([])

    const [foundData, setFoundData]= useState(false)

    
    const  getPokemon= async ()=>{
        try{
            const randomNumber = Math.floor(Math.random()*899)
            const newPokemon= await axios.request(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
            console.log(newPokemon.data)
            setPokemon(newPokemon.data)
            setFoundData(!foundData) 
        }
        catch{
            alert("Pokemon does not exist")
        }
    }
    
    const savePokemon = (name, nickName, move_one, move_two, move_three, move_four, picture) =>{
        newBadge()
        try{
            name= pokemon["name"]
            picture = pokemon["sprites"]["front_default"]
            move_one = document.getElementById("move_one").innerHTML
            move_two = document.getElementById("move_two").innerHTML
            move_three = document.getElementById("move_three").innerHTML
            move_four = document.getElementById("move_four").innerHTML

            axios.post("/savePokemon", {
                name: name,
                nickname: nickName,
                move_one: move_one,
                move_two: move_two,
                move_three: move_three,
                move_four: move_four,
                picture: picture
            }).then((response)=>{
                if (response.data === false){
                    setNeedRelease(true)
                    setFoundData(!foundData)
                }
                else{
                    setFoundData(!foundData)
                    setModalShow(true)
                }
            })
        }
        catch(e){
            console.log(e)
            alert("Please find a Pokemon before trying to save.")
        }
        
    }

    const newBadge = async () =>{
        const badge= await axios.get('badges')
        console.log(badge)
        if (badge.data < 2 && badge.data == 1){
            axios.put('badges').then((response)=>{console.log(response)})
            alert("New badge unlocked")
        }
    }

    
    return(
        <div className="insideCard">
            <h2 style={{textDecoration:"underline"}}>BUILD A TEAM</h2>
            {foundData ? <p></p>:
            <div>
                <div style={{display:"flex", justifyContent:"center"}}><button onClick={getPokemon} style={{color:"green", border:"solid green 2px", padding:"10px", borderRadius:"10px"}}>FIND POKEMON</button></div>
            </div>}
            <div className="pokeCard">
                <div className="pokeIcon">
                    { foundData ?  pokemon["sprites"] ?<img src={pokemon["sprites"]["front_default"]}  style={{width:"20vw"}}/> : <p></p> : <img src={pokeBall} style={{width:"8vw"}} />}
                </div>
                <div style={{width:"100%", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
                    {foundData ? pokemon["sprites"] ? <h5 style={{fontFamily:'Pokemon Solid'}}>{pokemon["name"].toUpperCase()}</h5> : <p></p> : <p>Who will choose you?</p>}
                </div>
                <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
                    <div style={{display:"flex", justifyContent:"center", textDecoration:"underline"}}><h6>ABILITIES</h6></div>
                    <ul>
                        {foundData ? pokemon["sprites"] ? pokemon["abilities"].map((ability)=>(<li>{ability["ability"]["name"]}</li>)): <p></p> : <p></p>}
                    </ul>
                </div>
                <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
                    <div style={{display:"flex", justifyContent:"center", textDecoration:"underline"}}><h6>TYPES</h6></div>
                    <ul>
                        {foundData ? pokemon["sprites"] ? pokemon["types"].map((type)=>(<li>{type["type"]["name"]}</li>)) : <p></p> : <p></p>}
                    </ul>
                </div>
                <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
                   <div style={{display:"flex", justifyContent:"center", textDecoration:"underline"}}><h6>MOVES</h6></div>
                   
                   {foundData ? pokemon["sprites"] ?
                    <ul>
                        <li id="move_one">{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</li>
                        <li id="move_two">{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</li>
                        <li id="move_three">{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</li>
                        <li id="move_four">{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</li>
                    </ul> : <p></p> :<p></p>}
                </div>
                
                <div style={{width:"100%", display:"flex", justifyContent:"center", paddingBottom:"2vh"}}>
                    {user ?
                    <div style={{display:"flex", justifyContent:"space-around", width:"100%"}}>
                        {foundData ? 
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <button style={{color:"green", border:"solid green 2px", padding:"5px", borderRadius:"10px"}}  onClick={savePokemon}>CAPTURE</button>
                            <button style={{color:"red", border:"solid red 2px", padding:"5px", borderRadius:"10px"}} onClick={()=>setFoundData(false)}>RUN AWAY</button>
                        </div>:<p></p>}
                    </div> : 
                    <a href="#/signIn">Log in to save your pokemon</a>}
                </div>
            </div>
        </div>
    )
}

export default FindPokemon;