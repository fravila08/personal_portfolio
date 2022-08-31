function PokeSep(){
    return(
        <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{display:"flex", alignItems:"center", width:"14%"}}>
                <div className="lineOne"></div>
            </div>
            <div style={{display:"flex", alignItems:"center", width:"15%"}}>
                <div style={{position:"absolute", width:"15%"}}>
                    <div className="circle"></div>
                </div>
            </div>
            <div style={{display:"flex", alignItems:"center", width:"71%"}}>
                <div className="lineTwo"></div>
            </div>
        </div>
    )
}
export default PokeSep;