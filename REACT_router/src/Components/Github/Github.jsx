import React, { useEffect, useState } from "react";

function Github() {

    const [data,setData] = useState('0');

    useEffect(()=>{
        fetch('https://api.github.com/users/SameerMatoria')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            setData(data)
        })
    },[])

    return(
        <div className="text-center m-4 text-3xl">Github followers : {data.id}</div>
    )
}

export default Github 