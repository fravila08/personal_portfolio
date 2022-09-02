import {useState} from "react"
import axios from "axios";
import pokeBall from "../images/pokeballs/pokeBall.png"

function FindPokemon({user}){
    const [message, setMessage] = useState('');

    const [pokemon, setPokemon] = useState([])

    const [foundData, setFoundData]= useState(false)

    const [nickname, setNickname]= useState('')
    
    const handleChange = event => {
    setMessage((event.target.value).toLowerCase());
    };

    const handleNickname = event => {
        setNickname((event.target.value).toLowerCase());
        };

    const  getPokemon= async ()=>{
        const newPokemon= await axios.request(`https://pokeapi.co/api/v2/pokemon/${message}`)
        setPokemon(newPokemon.data)
        setFoundData(!foundData)
    }
    
    const savePokemon = (name, nickName, move_one, move_two, move_three, move_four, picture) =>{
        try{
            name= message
            picture = pokemon["sprites"]["front_default"]
            move_one = document.getElementById("move_one").innerHTML
            move_two = document.getElementById("move_two").innerHTML
            move_three = document.getElementById("move_three").innerHTML
            move_four = document.getElementById("move_four").innerHTML
            nickName = nickname

            axios.post("/savePokemon", {
                name: name,
                nickname: nickName,
                move_one: move_one,
                move_two: move_two,
                move_three: move_three,
                move_four: move_four,
                picture: picture
            }).then((response)=>{
                console.log(response)
                setFoundData(!foundData)
                alert("Your Pokemon was saved")
            })
        }
        catch(e){
            console.log(e)
            alert("Please find a Pokemon before trying to save.")
        }
    }

    
    return(
        <div className="insideCard">
            <h2 style={{textDecoration:"underline"}}>BUILD A TEAM</h2>
            {foundData ? <p></p>:
            <div>
                <div style={{display:"flex", justifyContent:"center"}} >
                    <input type="text" placeholder="NAME" onChange={handleChange} style={{width:"10vw"}}/>
                    <input type="text" placeholder="DESIRED NICKNAME" style={{width:"90%"}} onChange={handleNickname}/>
                </div>
                <br/>
                <div style={{display:"flex", justifyContent:"center"}}><button onClick={getPokemon}>FIND DATA</button></div>
            </div>}
            <div className="pokeCard">
                <div className="pokeIcon">
                    { foundData ? <img src={pokemon["sprites"]["front_default"]}  style={{width:"20vw"}}/> : <img src={pokeBall} style={{width:"8vw"}} />}
                </div>
                <div style={{width:"100%", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
                    {foundData ? <h5 style={{fontFamily:'Pokemon Solid'}}>{pokemon["name"].toUpperCase()}</h5> : <p>Who are you looking for?</p>}
                </div>
                <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
                    <div style={{display:"flex", justifyContent:"center", textDecoration:"underline"}}><h6>ABILITIES</h6></div>
                    <ul>
                        {foundData ? pokemon["abilities"].map((ability)=>(<li>{ability["ability"]["name"]}</li>)): <p></p>}
                    </ul>
                </div>
                <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
                    <div style={{display:"flex", justifyContent:"center", textDecoration:"underline"}}><h6>TYPES</h6></div>
                    <ul>
                        {foundData ? pokemon["types"].map((type)=>(<li>{type["type"]["name"]}</li>)): <p></p>}
                    </ul>
                </div>
                <div style={{width:"100%", display:"flex", flexDirection:"column"}}>
                   <div style={{display:"flex", justifyContent:"center", textDecoration:"underline"}}><h6>MOVES</h6></div>
                   
                   {foundData ?
                    <ul>
                        <li id="move_one">{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</li>
                        <li id="move_two">{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</li>
                        <li id="move_three">{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</li>
                        <li id="move_four">{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</li>
                    </ul>:<p></p>}
                </div>
                
                <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                    {user ? <button onClick={savePokemon}>SAVE</button> : <a href="#/signIn">Log in to save your pokemon</a>}
                </div>
            </div>
        </div>
    )
}

export default FindPokemon;