import React, { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
const headVote = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const {rollnumber,headboy,headgirl} = location.state;
  const [headboyasst,setHeadBoyAsst] = useState('');
  const handleVoteClick =(candidate) =>{
    setHeadBoyAsst(candidate);
    console.log(rollnumber,headboy,headgirl)
    navigate('/HeadGirlAsst',{state:{rollnumber:rollnumber,headboy:headboy,headgirl:headgirl,headboyasst:candidate}})
  }
  return (
    <div class="album py-5 bg-light">
    <div class="container">
      <div class="text-center">
        <h1>Assistant School Head Boy</h1>
        </div>
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/11. Walkie talkie.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">KAVEEN S</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=> handleVoteClick('KAVEEN S')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/12. ID card.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">MUKESH KUMAR K P</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('MUKESH KUMAR K P')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/13. CCTV.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">SUJITH C</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('SUJITH C')}>Vote</button>
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