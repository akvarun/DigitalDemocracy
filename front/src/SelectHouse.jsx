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
    else if (house ==="megalaos"){
      navigate('/MegalaosHeadBoy',{state:{rollnumber:rollnumber,headboy:headboy,headgirl:headgirl,headboyasst:headboyasst,headgirlasst:headgirlasst,house:house}})
    }
    else if (house ==="chloris"){
      navigate('/ChlorisHeadBoy',{state:{rollnumber:rollnumber,headboy:headboy,headgirl:headgirl,headboyasst:headboyasst,headgirlasst:headgirlasst,house:house}})
    }
    else if (house === "patroclus"){
      navigate('/PatroclusHeadBoy',{state:{rollnumber:rollnumber,headboy:headboy,headgirl:headgirl,headboyasst:headboyasst,headgirlasst:headgirlasst,house:house}})
    }
  }
  console.log(rollnumber,headboy,headgirl,headboyasst,headgirlasst)
  return (
<div class="container px-4 py-5" id="hanging-icons">
    <h1 class="pb-2 border-bottom">Select your Houses</h1>
    <div className="d-flex justify-content-center align-items-center min-vh-100" >
    <div class="row g-5 py-5 row-cols-1 row-cols-lg-4">
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Kronos</h3>
          <button href="#" class="btn btn-outline-secondary" onClick={()=>handleVoteClick("kronos")}>
            Select 
          </button>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Megalaos</h3>
          <button href="#" class="btn btn-outline-success" onClick={()=>handleVoteClick("megalaos")}>
           Select 
          </button>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Chloris</h3>
          <button href="#" class="btn btn-outline-danger" onClick={()=>handleVoteClick("chloris")}>
           Select 
          </button>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <img 
        className="card-img-top" src="./src/assets/sharpner.jpg" alt="Sharpner sigil" width="100%" height="50" />
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Patroclus</h3>
          <button href="#" class="btn btn-outline-primary" onClick={()=>handleVoteClick("patroclus")}>
           Select 
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default selectHouse