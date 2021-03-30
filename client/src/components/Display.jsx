import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';

export default props => {
    const { pirates } = props;
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [chests, setChests] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [leg, setLeg] = useState(true);
    const [patch, setPatch] = useState(true);
    const [hand, setHand] = useState(true);
    const [updated, setUpdated] = useState(true);
    
    const viewPirate =(pirateId) => navigate(`/pirate/${pirateId}`)
    const deletePirate =(pirateId) => {
        console.log(pirateId);
        axios.delete(`http://localhost:8000/api/pirate/${pirateId}`)
            .then(res => {
                console.log(pirateId)
            })
        navigate('/', {state: {setUpdated: setUpdated}});
        
    }


    return(
        <div>
            <h2>View the Crew!</h2>
            <Link to="/new">
                <button >
                     <p>Add a Pirate!</p>
                 </button>
            </Link>

            {props.pirates.map((pirate, index) => {
                return <p key = {index}> Pirate: {pirate.name}
            
            <button onClick={(e)=> {viewPirate(pirate._id)}}>
                View
            </button>
            <button onClick={(e)=> {deletePirate(pirate._id)}}>
                Swim with the fishes!
            </button>
            </p>
            })}
        </div>
    )
}
