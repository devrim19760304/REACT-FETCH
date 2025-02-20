
//usestate hook 
import { useState } from "react";

interface IJoke {
    setup:string
    punchline:string,

}


const StaffTable=()=> {

    const [joke,setJoke]=useState("joke is bad"); 
    const [name,setName]=useState(""); 
    const nameArray:string[] = ["George","Jane","Joe"];

    const [apiJoke,setApiJoke]=useState<IJoke>();

    const [wesleySetup,setWesleySetup]=useState("");
    const [wesleyPunchLine,setWesleyPunchLine]=useState("");


    //new usestate for joke 
    //const [blabla,setblabla]=useState("")

    // a function which will fetch data from publib API and set result as useState
    //please use async only for fetch 
    // ex const blablFunction=async ()=> {}

    const fetchJoke=async ()=> {

        const url="https://official-joke-api.appspot.com/random_joke";
        const response=await fetch(url);
        const data=await response.json();
        const wholeJoke=`${data.setup} ${<br></br>} ${data.punchline}`
        // create an jokeobject 
        const myJoke:IJoke= {
            setup:data.setup,
            punchline:data.punchline,

        }
        console.log(wholeJoke);
        setApiJoke(myJoke);
        setWesleySetup(data.setup);
        setTimeout(()=> { setWesleyPunchLine(data.punchline);},3000)
       
    }  
    
    

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
        <p>{name}</p><br></br>
        <button onClick={fetchJoke}>Get A Joke </button>        
        <h4> {apiJoke?.setup}</h4>
        <h4> {apiJoke?.punchline}</h4>
        <p>------------------------------</p>
        <h3>{wesleySetup}</h3>
        <h3> {wesleyPunchLine}</h3>
        
        
        </>
    )
}

export default StaffTable