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
        <h1>School Assistant Head Girl</h1>

      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/sharpner.jpg" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">Swas</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=> handleVoteClick('swas')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/pencil.jpg" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <p class="card-text">Swathy</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('swathy')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/eraser1.jpeg" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <p class="card-text">priya</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleVoteClick('priya')}>Vote</button>
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