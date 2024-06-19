import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom'
const headVote = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const state = useState();
  const {rollnumber,headboy,headgirl,headboyasst} = location.state;
  const [headgirlasst,setHeadGirlAsst] = useState('');
  const handleVoteClick =(candidate) =>{
    setHeadGirlAsst(candidate);
    console.log(rollnumber,headboy,headgirl,headboyasst)
    navigate('/SelectHouse',{state:{rollnumber:rollnumber,headboy:headboy,headgirl:headgirl,headboyasst:headboyasst,headgirlasst:candidate}})

  }
  return (
    <div class="album py-5 bg-light">
    <div class="container">
      <div class="text-center">
        <h1>Assistant School Head Girl</h1>
        </div>

      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/14. Fan.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">ASMITHA A S</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=> handleVoteClick('ASMITHA A S')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/15. Whistle.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">GAYATHIRI D</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('GAYATHIRI D')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/16. Calender.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">LAKSHMI KANWAR G</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('LAKSHMI KANWAR G')}>Vote</button>
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