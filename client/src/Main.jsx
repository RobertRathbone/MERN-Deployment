import React, { useEffect, useState } from 'react'
import axios from 'axios';
import New from './components/New';
import Display from './components/Display';


export default props => {
    const [ pirates, setPirates ] = useState([]);
    const [updated, setUpdated] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/findpirates")
            .then(res=>setPirates(res.data))  
            .catch(err=>console.log("Alas, have ye seen the White Whale?", err))}, [updated])    

    return (
        <div>
            <Display pirates = {pirates} />
        </div>
    )
}