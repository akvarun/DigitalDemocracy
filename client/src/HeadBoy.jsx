import React, { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
const headVote = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const {rollnumber} = location.state;
  const handleVoteClick =(candidate) =>{
    console.log(rollnumber)
    navigate('/HeadGirl',{state:{rollnumber:rollnumber,headboy:candidate}})
  }
  return (
    <div class="album py-5 bg-light">
    <div class="container ">
      <div class="text-center">
      <h1>School Head Boy</h1>
      </div>
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/1. Clock.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">AJAY N N</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=> handleVoteClick('AJAY N N')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/2. Newspaper.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">GOKULA KANNAN G K</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('GOKULA KANNAN G K')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/3. Tie.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">RAGUL N D</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('RAGUL N D')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/4. Computer.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">RITHIN KUMAR H</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('RITHIN KUMAR H')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
<div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/5. Mic.png" alt="Sharpner sigil" width="10%" height="225" />
            <div class="card-body">
              <h3 class="card-text">NIRANJAN V V</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('NIRANJAN V V')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>


          
        
      </div>
    </div>
  </div>
    
  )
}

export default headVote