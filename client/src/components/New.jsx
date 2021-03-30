import React, { useEffect, useState } from 'react';
import { navigate, Link } from '@reach/router';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

export default props => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [chests, setChests] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [leg, setLeg] = useState(true);
    const [patch, setPatch] = useState(true);
    const [hand, setHand] = useState(true);
    const [checked1, setChecked1] = useState("checked");
    const [checked2, setChecked2] = useState("checked");
    const [checked3, setChecked3] = useState("checked");
    const [errors, setErrors] = useState([]);
    const [updated, setUpdated] = useState(true);

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(patch, "Submit")
        axios.post('http://localhost:8000/api/pirate', {
            name,
            url,
            chests,
            phrase,
            position,
            leg,
            patch,
            hand
        })
        .then(res=> {
            console.log("Yup", res)
            // props.setUpdated(true);
            navigate('/', {state: {setUpdated: setUpdated}});
        })
        .catch(err=>{
            const errResponse = err.response.data.errors;
            const errArr =[];
            for (const key of Object.keys(errResponse)){
                errArr.push(errResponse[key].message)
            }
            setErrors(errArr)
        })
        
    }

    return (
        <>
        <Link to="/">
            <button >
                    <p>View the Crew!</p>
                </button>
        </Link>
        

        <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Pirate Name</label>
                <input type="text" onChange={e=>setName(e.target.value)}/>
            </p>
            <p>
                <label>Image URL</label>
                <input type="text" onChange={e=>setUrl(e.target.value)}/>
            </p>
            <p>
                <label>Number of chests</label>
                <input type="number" onChange={e=>setChests(e.target.value)}/>
            </p>
            <p>
                <label>Catch Phrase</label>
                <input type="text" onChange={e=>setPhrase(e.target.value)}/>
            </p>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Position
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={e=>setPosition("Captain")}> Captain</Dropdown.Item>
                    <Dropdown.Item onClick={e=>setPosition("First Mate")}> First Mate</Dropdown.Item>
                    <Dropdown.Item onClick={e=>setPosition("Quarter  Master")}> Quarter Master</Dropdown.Item>
                    <Dropdown.Item onClick={e=>setPosition("Boatswain")}> Boatswain</Dropdown.Item>
                    <Dropdown.Item onClick={e=>setPosition("Powder Monkey")}> Powder Monkey</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <p>
                <label>PegLeg</label>
                <input type="checkbox" checked = {checked1} onChange={e=>{setLeg(!leg); setChecked1(!checked1)}}/>
            </p>
            <p>
                <label>Eye Patch</label>
                <input type="checkbox" checked = {checked2} onChange={e=>{setPatch(!patch); setChecked2(!checked2)}}/>
            </p>
            <p>
                <label>Hook for hand...</label>
                <input type="checkbox" checked = {checked3} onChange={e=>{setHand(!hand); setChecked3(!checked3)}}/>
            </p>
            <input type="submit"/>
        </form>
        </>
    )
}

// (res=>setErrors(res.response.data.errors.name.message))