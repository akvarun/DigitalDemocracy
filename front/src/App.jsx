import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Home from './Home'
import SelectHouse from './SelectHouse'
import HeadBoy from './HeadBoy'
import HeadGirl from './HeadGirl'
import HeadBoyAsst from './HeadBoyAsst'
import HeadGirlAsst from './HeadGirlAsst'
import KronosHeadBoy from './KronosHeadBoy'
import KronosHeadGirl from './KronosHeadGirl'
import KronosHeadBoyAsst from './KronosHeadBoyAsst'
import KronosHeadGirlAsst from './KronosHeadGirlAsst'
import MegalaosHeadBoy from './MegalaosHeadBoy'
import MegalaosHeadGirl from './MegalaosHeadGirl'
import MegalaosHeadBoyAsst from './MegalaosHeadBoyAsst'
import MegalaosHeadGirlAsst from './MegalaosHeadGirlAsst'
import ChlorisHeadBoy from './ChlorisHeadBoy'
import ChlorisHeadGirl from './ChlorisHeadGirl'
import ChlorisHeadBoyAsst from './ChlorisHeadBoyAsst'
import ChlorisHeadGirlAsst from './ChlorisHeadGirlAsst'
import PatroclusHeadBoy from './PatroclusHeadBoy'
import PatroclusHeadGirl from './PatroclusHeadGirl'
import PatroclusHeadBoyAsst from './PatroclusHeadBoyAsst'
import PatroclusHeadGirlAsst from './PatroclusHeadGirlAsst'
import Thankyou from './Thankyou'
function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/SelectHouse' element={<SelectHouse/>}></Route>
        <Route path='/HeadBoy' element={<HeadBoy/>}></Route>
        <Route path='/HeadGirl' element={<HeadGirl/>}></Route>
        <Route path='/HeadBoyAsst' element={<HeadBoyAsst/>}></Route>
        <Route path='/HeadGirlAsst' element={<HeadGirlAsst/>}></Route>
        <Route path='/KronosHeadBoy' element={<KronosHeadBoy/>}></Route>
        <Route path='/KronosHeadGirl' element={<KronosHeadGirl/>}></Route>
        <Route path='/KronosHeadBoyAsst' element={<KronosHeadBoyAsst/>}></Route>
        <Route path='/KronosHeadGirlAsst' element={<KronosHeadGirlAsst/>}></Route> 
        <Route path='/MegalaosHeadBoy' element={<MegalaosHeadBoy/>}></Route>
        <Route path='/MegalaosHeadGirl' element={<MegalaosHeadGirl/>}></Route>
        <Route path='/MegalaosHeadBoyAsst' element={<MegalaosHeadBoyAsst/>}></Route>
        <Route path='/MegalaosHeadGirlAsst' element={<MegalaosHeadGirlAsst/>}></Route>
        <Route path='/ChlorisHeadBoy' element={<ChlorisHeadBoy/>}></Route>
        <Route path='/ChlorisHeadGirl' element={<ChlorisHeadGirl/>}></Route>
        <Route path='/ChlorisHeadBoyAsst' element={<ChlorisHeadBoyAsst/>}></Route>
        <Route path='/ChlorisHeadGirlAsst' element={<ChlorisHeadGirlAsst/>}></Route>
        <Route path='/PatroclusHeadBoy' element={<PatroclusHeadBoy/>}></Route>
        <Route path='/PatroclusHeadGirl' element={<PatroclusHeadGirl/>}></Route>
        <Route path='/PatroclusHeadBoyAsst' element={<PatroclusHeadBoyAsst/>}></Route>
        <Route path='/PatroclusHeadGirlAsst' element={<PatroclusHeadGirlAsst/>}></Route>
        <Route path='/Thankyou' element={<Thankyou/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App