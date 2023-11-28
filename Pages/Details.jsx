import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { Context } from '../Utils/Context'
import { LiaStarSolid } from "react-icons/lia";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import Product from '../Components/Product'
import "./Css/Details.css"
import { Link } from 'react-router-dom';
const Details = () => {
  const {details, setdetails} = useContext(Context)
  const {Mens} = useContext(Context)
  const {WomensDresses} = useContext(Context)
  const {Womesbags} = useContext(Context)
  const {MensWatches} = useContext(Context)
  const {Kids} = useContext(Context)
  const {Relatedpro, setRelatedpro} = useContext(Context)
  const {Cartdata, SetcartData} = useContext(Context)
  const {Favriouedata, SetFavriouedata} = useContext(Context)
  const {CartLength, setCartLength} = useContext(Context)
  const {FavioruteLength, setFavioruteLength} = useContext(Context)
  const {itemnumber, setitemnumber} = useContext(Context)
  const {price, setprice} = useContext(Context)
  const {setitemnumbers} = useContext(Context)
  const {OpenSearchsection, setOpenSearchsection} = useContext(Context)
  const {OpenNavbar, setOpenNavbar} = useContext(Context)
  const {OpenResnavbar, setOpenResnavbar} = useContext(Context)
  const {OpenBuysection, setOpenBuysection} = useContext(Context)
  const [Checking, setChecking] = useState(true)
  const {handlecart} = useContext(Context)
  const {openBuySection} = useContext(Context)
  const {handlefavourite} = useContext(Context)
  const noLinks = { display: "none",};
  const scrolltoref = useRef(null)
  
  useEffect(()=>{
   scrolltoref.current?.scrollIntoView() 
   if(details.name == undefined){
    document.getElementById("redirect").click()
   }
  },[])

  useEffect(()=>{
    if(itemnumber !== 0){
      setprice(details.price * itemnumber)
    }
    if(itemnumber == 0){
      setitemnumber(1)
     }
  },[itemnumber])
  
  return (
<>
<div ref={scrolltoref} className='details'>
    <div className="left">
       <div className="img">
        <img src={details.image} alt="" />
       </div>
       <div className="img">
        <img src={details.image_2} alt="" />
       </div>
       <div className="img">
       <img src={details.image_3} alt="" />
       </div>
       <div className="img">
       <img src={details.imgae_4} alt="" />
       </div>
    </div>
    <div className="right">
      <div className="content">
        <div className="heading">
          <h1>{details.name}</h1>
          <p>{details.desc}</p>
        </div>
        <div className="stars">
        <LiaStarSolid className='icon'/>
        <LiaStarSolid className='icon'/>
        <LiaStarSolid className='icon'/>
        <LiaStarSolid className='icon'/>
        <LiaStarSolid className='icon'/>
        <p>(5 stars)</p>
        </div>
      <div className="price">
      <h2><span>Price:</span>{price}$</h2>
      </div>
        <div className="quantity">
          <p>Quantity</p>
          <div className="quantity_btn">
          <GoPlus onClick={()=>{setitemnumbers("plus")}} className='icon' />
          <p>{itemnumber}</p>
          <LuMinus onClick={()=>{setitemnumbers("minus")}}  className='icon' />
          </div>
        </div>
        <div className="add_cart">
          <a href="" onClick={(e)=>{handlecart(details); e.preventDefault() }}>Add to cart</a>
          <a href="" onClick={(e)=>{openBuySection(); e.preventDefault()}}>Buy now</a>
          <a href=""  onClick={(e)=>{handlefavourite(details); e.preventDefault() }}>Add to favourite</a>
         </div>
         </div>
        <div className="reviews">
          <div className="heading">
            <h1>Reviews</h1>
          </div>
         <div className="cards">
         <div className="card">
         <h2>Wasif zaidi</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, qui? Aspernatur excepturi cum impedit eaque, non a, recusandae voluptate molestias labore accusamus iusto sit ipsam, odit ratione repellendus quidem? Repudiandae.</p>
        </div>  
        <div  className="card">
             <h2>Wasif zaidi</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolore earum dolorem, fugit facere aperiam voluptatum ducimus aliquam. Ipsam voluptatibus enim facere dolorum veniam sunt. Error molestiae beatae temporibus amet?</p>
        </div> 
         </div> 
        </div> 
    </div>
    <Link id='redirect' style={{display: 'none'}} to="/"></Link>
    </div>
    <Product data = {Relatedpro} spantitle = {"Related"}  links = {noLinks} title = {"Products"}  />
</>
  )
}

export default Details
