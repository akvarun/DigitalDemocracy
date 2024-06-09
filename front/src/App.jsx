import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Home from './Home'
import SelectHouse from './SelectHouse'
import HouseVote from './HouseVote'
import HeadVote from './HeadVote'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/HeadVote' element={<HeadVote/>}></Route>
        <Route path='/SelectHouse' element={<SelectHouse/>}></Route>
        <Route path='/HouseVote' element={<HouseVote/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
