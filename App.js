
import './App.css';
import Login from './Components/Login';
import Search from "./Components/Search";
import Buynow from './Components/Buynow';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Details from './Pages/Details';
import Cart from './Pages/Cart';
import Favourite from './Pages/Favourite';
import Footer from './Components/Footer';
import { Context } from './Utils/Context';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useEffect, useRef } from 'react';
import { useContext } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css"
function App() {
  const scrolltoref = useRef(null)
  const {OpenBuysection, setOpenBuysection} = useContext(Context)
  useEffect(()=>{
    AOS.init();
  },[])
  useEffect(()=>{
    scrolltoref.current?.scrollIntoView() 
  },[OpenBuysection])
  return (
    <div className="App">
 <Router> 
  <Search/>
 <Login/>
 <div ref={scrolltoref}> <Buynow/> </div>
 <Navbar/>
 <Routes>   
 <Route path='/' element={<Home/>}/>
 <Route path='/Details' element={<Details/>}/>
 <Route path='/Cart' element={<Cart/>}/>
 <Route path='/faviourite' element={<Favourite/>}/>
 </Routes>
 <Footer/>
 </Router>
    </div>
  );
}

export default App;
