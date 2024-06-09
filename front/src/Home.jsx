import React from 'react'
import { useState } from 'react';

function home () {
  const [rollnumber, setRollNumber] = useState('');
  return (
    <div>
<div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold text-body-emphasis">KMC Elections</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-5">Voting is a powerful tool in your hands. Your vote shapes the future. Think carefully and choose wisely before casting your vote. Make your voice heard for the leader you believe in.</p>
      <h5>Enter your roll number to start your voting</h5>
      <div class="form-group col-lg-6 mx-auto">
        <input type="email" class="form-control mt-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your roll number"/>
      </div>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Vote</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default home;