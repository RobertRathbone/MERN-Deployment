import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

export default props => {
    const {pirateId } = props;
    console.log(pirateId);
    const [ foundPirate, setFoundPirate] = useState("");
    const [ updated, setUpdated] = useState(true);
    useEffect(() => {
        console.log(pirateId);
        axios.get(`http://localhost:8000/api/pirate/${pirateId}`)
        .then(res=>setFoundPirate(res.data))
        
            },[updated])

    const legHandler = (leg) => {
        // e.preventDefault();
        axios.put(`http://localhost:8000/api/pirate/${pirateId}`, {
            leg
        })
        .then(res => console.log(res));
        setUpdated(!updated);
        navigate(`/pirate/${pirateId}`);
    }   
    const patchHandler = (patch) => {
        // e.preventDefault();
        axios.put(`http://localhost:8000/api/pirate/${pirateId}`, {
            patch
        })
        .then(res => console.log(res));
        setUpdated(!updated);
        navigate(`/pirate/${pirateId}`);
    }   
    const handHandler = (hand) => {
        // e.preventDefault();
        axios.put(`http://localhost:8000/api/pirate/${pirateId}`, {
            hand
        })
        .then(res => console.log(res));
        setUpdated(!updated);
        navigate(`/pirate/${pirateId}`);
    }   
    

    return(
        <div>
            <h2>Welcome aboard ye Minnow</h2>
            <h3>pirate: {foundPirate.name}</h3>
            <p>My picture be here: {foundPirate.url}</p>
            <p>Chests: {foundPirate.chests}</p>
            <p>I holler: {foundPirate.phrase}</p>
            <p>You will find me: {foundPirate.position}</p>
            <p>Peg Leg {foundPirate.leg? <> Yes</> : <> No</>}
            <button onClick={(e)=> {legHandler(!foundPirate.leg)}}>
                Change
            </button>
            </p>
            <p>Eye Patch {foundPirate.patch? <> Yes</> : <> No</>}
            <button onClick={(e)=> {patchHandler(!foundPirate.patch)}}>
                Change
            </button>
            </p>
            <p>Hook {foundPirate.hand? <> Yes</> : <> No</>}
            <button onClick={(e)=> {handHandler(!foundPirate.hand)}}>
                Change
            </button>
            </p>

            {/* <button onClick={(e)=> {updatePirate(foundPirate._id)}}>
                Update
            </button> */}


        </div>

    )


}