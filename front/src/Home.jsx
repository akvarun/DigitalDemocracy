import React from 'react'
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

function home () {
  const [rollnumber, setRollNumber] = useState('');
  const [redirect, SetRedirect] = useState('False');
  const handleInputChange = (event) => {
    setRollNumber(event.target.value);
  };
  const handleVoteClick = ()=>{
    if(rollnumber.length!=7){
      alert('Enter a valid Roll number');
      event.preventDefault();
      return;
    }
    console.log('roll no:',rollnumber);
    setRollNumber(''); 
    SetRedirect(true);
  }
  if(redirect){
    return <Navigate to="/HeadVote"/>
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
        <button type='button' className='btn btn-primary btn-lg px-4 gap-3' onClick={handleVoteClick}>Vote</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default home;