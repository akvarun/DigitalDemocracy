import React, { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
const headVote = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const {rollnumber, headboy}= location.state;
  const [headgirl,setHeadGirl] = useState('');
  const handleVoteClick =(candidate) =>{
    setHeadGirl(candidate);
    console.log(rollnumber,headboy)
    navigate('/HeadBoyAsst',{state:{rollnumber:rollnumber,headboy:headboy,headgirl:candidate}})

  }
  return (
    <div class="album py-5 bg-light">
    <div class="container">
      <div class="text-center">
        <h1>School Head Girl</h1>
        </div>

      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/6. Dictionary.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">ANUGRAHA A</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=> handleVoteClick('ANUGRAHA A')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/7. Eraser.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">ANUSHREE S</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('ANUSHREE S')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/8. Compass.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">BRINDHAA </h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('BRINDHAA')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/9. School Bag.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">JEEVA HARSHINI</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('JEEVA HARSHINI')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
<div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/10. Chalk.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">SREENIKA S</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('SREENIKA S')}>Vote</button>
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