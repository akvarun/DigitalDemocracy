import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Thankyou = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
  return <div>Thankyou</div>;
};

export default Thankyou;
