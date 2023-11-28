import React, { useContext, useEffect } from 'react'
import "./Css/Cart.css"
import { Context } from '../Utils/Context'
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { MdProductionQuantityLimits } from "react-icons/md"
const Cart = () => {
const {Cartdata, SetcartData} = useContext(Context)
const {price, setprice} = useContext(Context)
const {setitemnumbers} = useContext(Context)
const {itemnumber, setitemnumber} = useContext(Context)
const {OpenSearchsection, setOpenSearchsection} = useContext(Context)
const {OpenNavbar, setOpenNavbar} = useContext(Context)
const {OpenResnavbar, setOpenResnavbar} = useContext(Context)
const {OpenBuysection, setOpenBuysection} = useContext(Context)
const {openBuySection} = useContext(Context)
const {cleanCartandFav} = useContext(Context)
useEffect(()=>{
if(Cartdata.length == 0  ){
document.getElementById("no_items").style.display = "block"
document.getElementById('clear-data').style.display = "none"
}
},[Cartdata])
  return (
    <div className='cart_Faviourite'>
      <div className="heading">
        <h1><span>Cart</span> Items</h1>
        <h1 style={{display: 'none'}} id='no_items'><MdProductionQuantityLimits /> No items to show</h1>
      </div>
      <div className="cart_Faviourite-section">
        {
          Cartdata.map(curElem=>(
            <div className="card">
          <div className="img">
            <img src={curElem.image} alt="" />
          </div>
          <div className="text">
            <h1>{curElem.name}</h1>
            <div className="quantity">
          <p>Quantity</p>
          <div className="quantity_btn">
          <GoPlus onClick={()=>{setitemnumbers("plus")}} className='icon' />
          <p>{itemnumber}</p>
          <LuMinus onClick={()=>{setitemnumbers("minus")}} className='icon' />
          </div>
        </div>
        <div className="price">
          <p>{price}$</p>
        </div>
        <div className="buy">
        <a href="" onClick={(e)=>{openBuySection(); e.preventDefault()}}>Buy now</a>
        </div>
          </div>
        </div>
          ))
        }
      </div>
      <div onClick={(e)=>{cleanCartandFav(e)}} id='clear-data' className="clear-data">
        <a href="" ><RxCross2 className='icon'/> Clear All</a>
        </div>
    </div>
  )
}

export default Cart
