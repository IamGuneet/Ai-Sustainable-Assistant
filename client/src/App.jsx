import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar/Navbar'
import Homepage from "./components/Homepage/Homepage";
// import Items from "./components/Items/Items";
import Vision from "./components/vision/vision";
import Mission from "./components/mission/mission";
import Login from "./components/login/Login";
import Signin from "./components/signin/signin";
// import AddObject from "./components/addObject/AddObject"
import SignSuccess from "./components/signin/successSign";
import Error from "./components/error/Error";
import Success from "./components/success/Success";
// import Delete from "./components/delete/Delete";
import LogHistory from "./components/history/history";
import Footer from "./components/footer/Footer";
import Maps from "./components/maps/map"
import Knowledge from "./components/knowledge/know.jsx"
import Calculator from "./components/calculator/calculator";
import Ai from "./components/ai/ai";
import { useState } from "react";
import Cart from "./config/Cartconfig";
import HouseElectricityEfficiencyCalculator from "./components/kwh/kwh";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <BrowserRouter>
    <Navbar isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout}/>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          {/* <Route path='/items' element={<Items/>}/>  */}
          <Route path='/vission' element={<Vision/>}/> 
          <Route path='/mission' element={<Mission/>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/signin' element={<Signin/>}/> 
          <Route path='/maps' element={<Maps/>}/> 
          {/* <Route path='/addObject' element={<AddObject/>}/>  */}
          <Route path='/logged/calculator' element={<Calculator/>}/> 
          <Route path='/signUP/success' element={<Success/>}/> 
          <Route path='/logged/success' element={<SignSuccess/>}/> 
          <Route path='/logged/ai' element={<Ai/>}/> 
          <Route path='/knowMore' element={<Knowledge/>}/> 
          <Route path='/logged/kwh' element={<HouseElectricityEfficiencyCalculator/>}/> 
          <Route path='/logged/EStore' element={<Cart/>}/> 
          <Route path='/logged/history' element={<LogHistory/>}/> 
          {/* <Route path='/deleteObject' element={<Delete/>}/>  */}
          <Route path="*" element={<Error/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
