import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Thankyou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleReturn = ()=>{
    navigate('/')
  }
  const state = useState();
  const {
    rollnumber,
    headboy,
    headgirl,
    headboyasst,
    headgirlasst,
    house,
    househeadboy,
    househeadgirl,
    househeadboyasst,
    househeadgirlasst,
  } = location.state;
  console.log(
    rollnumber,
    headboy,
    headgirl,
    headboyasst,
    headgirlasst,
    house,
    househeadboy,
    househeadgirl,
    househeadboyasst,
    househeadgirlasst
  );
  axios
    .post("http://localhost:3001/votes", {
      rollnumber: rollnumber,
      headboy: headboy,
      headgirl: headgirl,
      headboyasst: headboyasst,
      headgirlasst: headgirlasst,
      house: house,
      househeadboy: househeadboy,
      househeadgirl: househeadgirl,
      househeadboyasst: househeadboyasst,
      househeadgirlasst: househeadgirlasst,
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  return(
    <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold text-body-emphasis">Thank you! Your votes have been castedd</h1>
    <div class="col-lg-6 mx-auto">
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={()=> handleReturn()}>Return to home</button>
      </div>
    </div>
  </div>
);
  
};

export default Thankyou;
