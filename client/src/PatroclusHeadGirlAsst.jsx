import React from 'react'
import { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'


const selectHouse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = useState();
  const {rollnumber,headboy,headgirl,headboyasst,headgirlasst,house,househeadboy,househeadgirl,househeadboyasst} = location.state;
  const handleVoteClick =(candidate) =>{
    navigate('/Thankyou',{state:{rollnumber:rollnumber,headboy:headboy,headgirl:headgirl,headboyasst:headboyasst,headgirlasst:headgirlasst,house:house,househeadboy:househeadboy,househeadgirl:househeadgirl,househeadboyasst:househeadboyasst,househeadgirlasst:candidate}})
    console.log(rollnumber,headboy,headgirl,headboyasst,headgirlasst,house,candidate)
  }
  return (

    <div class="album py-5 bg-primary" style={{ minHeight: '100vh' }}>
    <div class="container">
      <div class="text-center">
      <h1>House Vice Captain Girl</h1>
      </div>
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h3 class="card-text">Swathi sree</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-primary" onClick={()=> handleVoteClick('Swathi sree')}>Vote</button>
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
