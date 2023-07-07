import { useState, useEffect, createContext, useContext } from "react";

const empContext=createContext();

export default function StaeHooks(){
    const [employee, setEmployee]=useState({
        name:"Alex",
        password:"abcd",
        email:"abc@yahoo.com",
        address:"Salt Lake"
    })

    const [counter,setCounter]=useState(1);

    const [myname,setMyname]=useState("Rajesh");


    useEffect(()=>{
    setTimeout(()=>{
        setCounter((counter)=>counter+1);
    },2000);
 } );
    return(
        <div>
            <h1>My Name is {employee.name}</h1>

            <h1>counter is {counter}</h1>

            <empContext.Provider value={myname}>
                <Component4 />
            </empContext.Provider>

        </div>
    )
}

function Component4(){
    const emp=useContext(empContext);

    return(
        <div>
            <h1>{emp}</h1>
        </div>
    )
}