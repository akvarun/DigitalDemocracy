import React from 'react'
import { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'


const selectHouse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = useState();
  const {rollnumber,headboy,headgirl,headboyasst,headgirlasst,house} = location.state;
  const handleVoteClick =(candidate) =>{
    navigate('/ChlorisHeadGirl',{state:{rollnumber:rollnumber,headboy:headboy,headgirl:headgirl,headboyasst:headboyasst,headgirlasst:headgirlasst,house:house,househeadboy:candidate}})
    console.log(rollnumber,headboy,headgirl,headboyasst,headgirlasst,house,candidate)
  }
  return (


    <div class="album py-5 bg-danger" style={{ minHeight: '100vh' }}>
    <div class="container">
      <div class="text-center">
      <h1>House Captain Boy</h1>
      </div>
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/22. Wifi.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">KALEESWARAN B</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=> handleVoteClick('KALEESWARAN B')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/23. Pencil.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">LOKITH.S.R</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('LOKITH.S.R')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/24. Cycle.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">SIDHARTH P.P</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('SIDHARTH P.P')}>Vote</button>
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

export default selectHouse