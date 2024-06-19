import React from 'react'
import { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'


const selectHouse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = useState();
  const {rollnumber,headboy,headgirl,headboyasst,headgirlasst,house,househeadboy,househeadgirl} = location.state;
  const handleVoteClick =(candidate) =>{
    navigate('/PatroclusHeadGirlAsst',{state:{rollnumber:rollnumber,headboy:headboy,headgirl:headgirl,headboyasst:headboyasst,headgirlasst:headgirlasst,house:house,househeadboy:househeadboy,househeadgirl:househeadgirl,househeadboyasst:candidate}})
    console.log(rollnumber,headboy,headgirl,headboyasst,headgirlasst,house,candidate)
  }
  return (

    <div class="album py-5 bg-primary" style={{ minHeight: '100vh' }}>
    <div class="container">
      <div class="text-center">
      <h1>House Vice Captain Boy</h1>
      </div>
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/40. Robot.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">Arunsaran</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-primary" onClick={()=> handleVoteClick('Arunsaran')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/41. School.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">Harshan K</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-primary" onClick={()=>handleVoteClick('Harshan K')}>Vote</button>
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