
//usestate hook 
import { useState } from "react";


const StaffTable=()=> {

    const [joke,setJoke]=useState("joke is bad"); 
    const [name,setName]=useState(""); 
    const nameArray:string[] = ["George","Jane","Joe"];

    //new usestate for joke 
    //const [blabla,setblabla]=useState("")

    // a function which will fetch data from publib API and set result as useState
    //please use async only for fetch 
    // ex const blablFunction=async ()=> {}

    
    
    

const getPeople=()=> {
    setJoke("Joke is good")
    let randomNumber:number = Math.floor(Math.random()*nameArray.length);
    setName(nameArray[randomNumber]);
    
}

    return (

        <>
        <h3> Random Joke</h3>
        <button onClick={getPeople}>Get Joke</button>
        <p>{joke} </p>
        <p>{name}</p>
        
        
        </>
    )
}

export default StaffTable