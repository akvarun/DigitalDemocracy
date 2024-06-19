import React from 'react'
import { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'


const selectHouse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = useState();
  const {rollnumber,headboy,headgirl,headboyasst,headgirlasst} = location.state;
  const handleVoteClick =(house) =>{
    if (house === "kronos"){
      navigate('/KronosHeadBoy',{state:{rollnumber:rollnumber,headboy:headboy,headgirl:headgirl,headboyasst:headboyasst,headgirlasst:headgirlasst,house:house}})
    }
    else if (house ==="menelaos"){
      navigate('/MegalaosHeadBoy',{state:{rollnumber:rollnumber,headboy:headboy,headgirl:headgirl,headboyasst:headboyasst,headgirlasst:headgirlasst,house:house}})
    }
    else if (house ==="chloris"){
      navigate('/ChlorisHeadBoy',{state:{rollnumber:rollnumber,headboy:headboy,headgirl:headgirl,headboyasst:headboyasst,headgirlasst:headgirlasst,house:house}})
    }
    else if (house === "patroclos"){
      navigate('/PatroclusHeadBoy',{state:{rollnumber:rollnumber,headboy:headboy,headgirl:headgirl,headboyasst:headboyasst,headgirlasst:headgirlasst,house:house}})
    }
  }
  console.log(rollnumber,headboy,headgirl,headboyasst,headgirlasst)
  return (
    <div class="album py-3 bg-light">
    <div class="container">
      <div class="text-center">
      <h1>Select Your House</h1>
      </div>
      <div class="row mt-5">
        <div class="col-md-3">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/Kronos.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">Kronos</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=> handleVoteClick('kronos')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/Menelaos.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">Menelaos</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-success" onClick={()=>handleVoteClick('menelaos')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/Chloris.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">Chloris</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-danger" onClick={()=>handleVoteClick('chloris')}>Vote</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card mb-4 shadow-sm">
          <img 
        className="card-img-top" src="./src/assets/Patroclus.png" alt="Sharpner sigil" width="100%" height="225" />
            <div class="card-body">
              <h3 class="card-text">Patroclos</h3>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-primary" onClick={()=>handleVoteClick('patroclos')}>Vote</button>
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

          <button href="#" class="btn btn-outline-secondary" onClick={()=>handleVoteClick("kronos")}></button>
export default selectHouse