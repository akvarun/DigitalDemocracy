import React from 'react'
import { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'


const selectHouse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = useState();
  const {rollnumber,headboy,headgirl,headboyasst,headgirlasst,house,househeadboy} = location.state;
  const handleVoteClick =(candidate) =>{
    navigate('/PatroclusHeadBoyAsst',{state:{rollnumber:rollnumber,headboy:headboy,headgirl:headgirl,headboyasst:headboyasst,headgirlasst:headgirlasst,house:house,househeadboy:househeadboy,househeadgirl:candidate}})
    console.log(rollnumber,headboy,headgirl,headboyasst,headgirlasst,house,candidate)
  }
  return (

    <div class="album py-5 bg-primary" style={{ minHeight: '100vh' }}>
    <div class="container">
      <div class="text-center">
      <h1>House Captain Girl</h1>
      </div>
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/29. Ruler.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">DHARANYAATHRAA S</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-primary" onClick={()=> handleVoteClick('DHARANYAATHRAA S')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/30. Calculator.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">SUBASHINI J</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-primary" onClick={()=>handleVoteClick('SUBASHINI J')}>Vote</button>
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