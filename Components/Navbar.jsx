import React, { useContext, useEffect } from 'react'
import "./Css/Navbar.css"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { AiOutlineTwitter, AiOutlineUser } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCart } from "react-icons/bs"
import { BiMenu } from "react-icons/bi"
import { Link } from "react-router-dom";
import { Context } from '../Utils/Context'
const Navbar = () => {
  const {Cartdata, SetcartData} = useContext(Context)
  const {OpenLoginPage, setOpenLoginpage} = useContext(Context)
  const {Favriouedata, SetFavriouedata} = useContext(Context)
  const {CartLength, setCartLength} = useContext(Context)
  const {FavioruteLength, setFavioruteLength} = useContext(Context)
  const {OpenSearchsection, setOpenSearchsection} = useContext(Context)
  const {OpenNavbar, setOpenNavbar} = useContext(Context)
  const {OpenResnavbar, setOpenResnavbar} = useContext(Context)
  const {OpenBuysection, setOpenBuysection} = useContext(Context)
  const {openResnavbar} = useContext(Context)
  const {closeResnavbar} = useContext(Context)
  const {openSearchSection} = useContext(Context)
  const {openLoginSection} = useContext(Context)
  useEffect(()=>{
    if(OpenNavbar == true){
      document.getElementById("Navbar").style.display = "flex"
    }
    if(OpenNavbar == false){
      document.getElementById("Navbar").style.display = "none"
    }
    if(OpenResnavbar == true){
      document.getElementById("Navbar").style.display = "none"
      document.getElementById("res_navbar").style.display = "block"
    }
    if(OpenResnavbar == false){
      document.getElementById("res_navbar").style.display = "none"
    }
   },[OpenNavbar, OpenResnavbar])
   
   const Links = document.querySelectorAll(".Link")
   Links.forEach(curelem=>{
     curelem.addEventListener("click", ()=>{
       document.querySelector(".active").classList.remove("active")
       curelem.classList.add("active")
     })
   })
  
  return (
    <>
      <div id='Navbar' className='Navbar'>
        <div className="logo">
          <h1><Link to="/">HomeMart</Link></h1>
        </div>
        <div className="links">
          <ul>
            <li className='active'><Link to="/">Home</Link></li>
            <li><a href="#Womens" className='Link'>Womens</a></li>
            <li><a href="#Mens" className='Link' >Mens</a></li>
            <li><a href="#Kids" className='Link'>Kids</a></li>
            <li><a href="#Bags" className='Link'>Bags</a></li>
            <li><a href="#Watches" className='Link'>Watches</a></li>
          </ul>
        </div>
        <div className="login">
          <div className="icons">
            <div className="box">
              <AiOutlineSearch onClick={()=>{openSearchSection()}} className='icon_profile' />
              <div className="quantity">
              </div>
            </div>
            <div className="box">
              <Link to="/faviourite"><AiOutlineHeart className='icon' /></Link>
              <div className="quantity">
                <p>{FavioruteLength}</p>
              </div>
            </div>
            <div className="box">
            <Link to="/Cart"><BsCart className='icon'/></Link>
              <div className="quantity">
              <p>{CartLength}</p>
              </div>
            </div>
            <div className="box">
              <AiOutlineUser onClick={()=>{openLoginSection()}} color='white' className='icon_profile' />
              <div className="quantity">
              </div>
            </div>
          </div>
        </div>
        <div className="menu_icon">
          <BiMenu onClick={()=>{openResnavbar()}} className='icon' />
        </div>
      </div>
      <div id='res_navbar' className="res_navbar">
        <div className="heading">
          <h1>Navigation</h1>
          <BiMenu onClick={()=>{closeResnavbar()}} className='icon' />
        </div>
        <div className="icons">
          <div className="box">
          <AiOutlineSearch onClick={()=>{openSearchSection()}} id='black_bg' className='icon  ' />
          <div className="quantity"></div>
          </div>
          <div className="box">
          <Link to="/faviourite" onClick={()=>{closeResnavbar()}} ><AiOutlineHeart className='icon' /></Link>
          <div className="quantity">
            <p>{FavioruteLength}</p>
          </div>
          </div>
          <div className="box">
          <Link to="/Cart" onClick={()=>{closeResnavbar()}}><BsCart className='icon  ' /></Link>
          <div className="quantity">
            <p>{CartLength}</p>
          </div>
          </div>
          <div className="box">
          <AiOutlineUser onClick={()=>{openLoginSection()}} id='black_bg' className='icon  ' />
          <div className="quantity"> </div>
          </div>
        </div>
        <div className="links">
        <ul>
            <li className='active'><Link to="/">Home</Link></li>
            <li>Womens</li>
            <li>Mens</li>
            <li>Kids</li>
            <li>Cosmetics</li>
            <li>Electronics</li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Navbar
