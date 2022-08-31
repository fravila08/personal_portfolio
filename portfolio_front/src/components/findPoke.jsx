import {useState} from "react"
import axios from "axios";
import pokeBall from "../images/pokeballs/pokeBall.png"

function FindPokemon(){
    const [message, setMessage] = useState('');

    const [pokemon, setPokemon] = useState([])

    const [foundData, setFoundData]= useState(false)
    
    const handleChange = event => {
    setMessage((event.target.value).toLowerCase());
    };

    const  getPokemon= async ()=>{
        const newPokemon= await axios.request(`https://pokeapi.co/api/v2/pokemon/${message}`)
        setPokemon(newPokemon.data)
        setFoundData(!foundData)
    }
    
    return(
        <div className="insideCard">
            <h2>BUILD A TEAM</h2>
            <div style={{display:"flex", justifyContent:"center"}} >
                <input type="text" onChange={handleChange} style={{width:"10vw"}}/>
                <button onClick={getPokemon}>FIND DATA</button>
            </div>
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
                   <ul>
                   {foundData ?
                    <div>
                        <li>{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</li>
                        <li>{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</li>
                        <li>{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</li>
                        <li>{pokemon["moves"][Math.floor(Math.random() * pokemon["moves"].length)]["move"]["name"]}</li>
                    </div>:<p></p>}
                    </ul>
                </div>
                <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                    {foundData ? <button>SAVE</button> : <a href="#">Log in to save your pokemon</a>}
                </div>
            </div>
        </div>
    )
}

export default FindPokemon;