import React, { useContext, useEffect } from 'react'
import { Context } from '../Utils/Context'
import { RxCross2 } from "react-icons/rx";
import "./Css/Buy.css"
const Buynow = () => {
const {price, setprice} = useContext(Context)
const {OpenBuysection, setOpenBuysection} = useContext(Context)
const {OpenNavbar, setOpenNavbar} = useContext(Context)
const {OpenResnavbar, setOpenResnavbar} = useContext(Context)
const {offBuysection} = useContext(Context)
useEffect(()=>{
    if(OpenBuysection == true){
      document.getElementById("Buy_now").style.display = "flex"
    }
    if(OpenBuysection  == false){
      document.getElementById("Buy_now").style.display = "none"
    }
   },[OpenBuysection]) 
  return (
    <div id='Buy_now' className='Buy_now'>
    <div className="heading">
      <h1 id='title'>Buy Now</h1>
      <p id='news_letter'>Plese fill the information below to order now</p>
    </div>
    <div className="form">
      <div className="inputs">
          <input  type="text" placeholder='Your Name' />
          <input type="text" placeholder='Your Email' />
          <input type="text" placeholder='Your Password' />
          <input type="text" placeholder='Your Country Optional' />
          <input type="text" placeholder='Your Address Optional' />
          <input type="text" placeholder='Postal Code Optional' />
      </div>
      <div className="submit">
          <a href="#">Place Order</a>
      </div>
    </div>
    <div className="Total_price">
          <p id='Login_in_btn' >The total price of your order is <span>{price}$</span> </p>
      </div>
    <div className="note">
          <p>Note: This Website is for demo purpose all the products are demo and your given information are not going to be used by us</p>
      </div>
      <div className="cross">  
      <RxCross2 onClick={()=>{offBuysection()}} className='icon'/>
      </div>
  </div>
  )
}

export default Buynow
