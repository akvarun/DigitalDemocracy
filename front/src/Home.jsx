import React from 'react'
import { useState } from 'react';
<<<<<<< HEAD
import { Link, Navigate } from 'react-router-dom';

function home () {
  const [rollnumber, setRollNumber] = useState('');
  const [redirect, SetRedirect] = useState('False');
=======
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function home () {
  const [rollnumber, setRollNumber] = useState('');
  const headboy = "varun"
  const headgirl = "swas"
  const house= "jupiter"
  const househeadb = "debug"
  const househeadg ="kat"
  /*const [navigate,setNavigate] = useState(false);*/
  const navigate = useNavigate();
>>>>>>> d2bcc76 (defined routes and initialised the schema)
  const handleInputChange = (event) => {
    setRollNumber(event.target.value);
  };
  const handleVoteClick = ()=>{
    if(rollnumber.length!=7){
      alert('Enter a valid Roll number');
<<<<<<< HEAD
      event.preventDefault();
      return;
    }
    console.log('roll no:',rollnumber);
    setRollNumber(''); 
    SetRedirect(true);
  }
  if(redirect){
    return <Navigate to="/HeadVote"/>
=======
    console.log('roll no:',rollnumber);
    setRollNumber('');
    return;
    }
    navigate('/HeadVote',{state:{rollnumber}})
    /*setNavigate(true)
    axios.post("http://localhost:3001/votes",{rollno: rollnumber,headboy:headboy,headgirl:headgirl,house:house,houseboy:househeadb,housegirl:househeadg})
    .then(result => console.log(result))
    .catch(err => console.log(err))
      {navigate&&<Navigate to="/HeadVote"/>}
    */

>>>>>>> d2bcc76 (defined routes and initialised the schema)
  }
  return (
    <div>
<div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold text-body-emphasis">KMC Elections</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-5">Voting is a powerful tool in your hands. Your vote shapes the future. Think carefully and choose wisely before casting your vote. Make your voice heard for the leader you believe in.</p>
      <h5>Enter your roll number to start your voting</h5>
      <div class="form-group col-lg-6 mx-auto">
        <input type='text' class="form-control mt-4" id="inputRollno"  placeholder="Enter your roll number" value={rollnumber} onChange={handleInputChange}/>
      </div>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
<<<<<<< HEAD
        <button type='button' className='btn btn-primary btn-lg px-4 gap-3' onClick={handleVoteClick}>Vote</button>
=======
        <button type='button' className='btn btn-primary btn-lg px-3 gap-3' onClick={handleVoteClick}>Vote</button>
>>>>>>> d2bcc76 (defined routes and initialised the schema)
      </div>
    </div>
  </div>
    </div>
  )
}

export default home;