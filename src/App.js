import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Navbar'
import Home from './Components/Home';
import Footerbar from './Footerbar'
import Services from './Services';

import Computer from './Components/Computer'
import Electronics from './Components/Electronics'
import Electrical from './Components/Electrical'
import Mechanical from './Components/Mechanical'
import Civil from './Components/Civil'
import Chemical from './Components/Chemical'

import AppD from './Components/Appdevelopment'
import WebD from './Components/Webdevelopment'
import Ml from './Components/Machinelearing'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/computer' element={<Computer/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/electrical' element={<Electrical/>}/>
        <Route path='/mechanical' element={<Mechanical/>}/>
        <Route path='/civil' element={<Civil/>}/>
        <Route path='/chemical' element={<Chemical/>}/>
        <Route  path='/' element = {<Home/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Webdevelopment' element={<WebD/>}/>
        <Route path='/Appdevelopment' element={<AppD/>}/>
        <Route path='/Machinelearning' element={<Ml/>}/>
        <Route path='/Footerbar' element={<Footerbar/>}/>
      </Routes>
    </Router>
  );
};
export default App