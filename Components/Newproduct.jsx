import React, { useContext, useEffect, useState } from 'react'
import "./Css/Newpro.css"
import { Context } from '../Utils/Context'
import { LiaStarSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import loading_img from "../images/loading.jpg"
const Product = ({data,title,spantitle,}) => {
  const [Sale, SetSale] = useState({display: "none"})
  const {details, setdetails} = useContext(Context)
  const {Cartdata, SetcartData} = useContext(Context)
  const {Favriouedata, SetFavriouedata} = useContext(Context)
  const {SortingdataCommand, SetSortngdataCommand} = useContext(Context)
  const [Product, SetProduct] = useState(null)
useEffect(()=>{
    SetProduct(data)
     data.map(curElem=>{
     if(curElem.on_sale == "true"){
      SetSale({display: "block"})
     }else{
      SetSale({display: "none"})
     }
     const Links = document.querySelectorAll(".Link")
     Links.forEach(curelem=>{
       curelem.addEventListener("click", ()=>{
         document.querySelector(".active").classList.remove("active")
         curelem.classList.add("active")
       })
     })
     })
},[])

useEffect(()=>{
if(SortingdataCommand !== null ){
 const sortedData =  data.filter(curElem=>{
    return curElem.category == SortingdataCommand
  })
 SetProduct(sortedData) 
}
},[SortingdataCommand])

const handleSorting = (Command)=>{
  SetSortngdataCommand(Command)
}
  return (
    <div  className='Product'>
      <div className="heading">
        <div className="logo">
            <h1> <span>{spantitle}</span> {title}</h1>
        </div>
        <div className="links">
            <p className='Link active' onClick={()=>{handleSorting("Mens")}} >Mens</p>
            <p className='Link' onClick={()=>{handleSorting("Womens")}} >Womens</p>
            <p className='Link' onClick={()=>{handleSorting("Kids")}}>Kids</p>
            <p className='Link' onClick={()=>{handleSorting("Womens_bags")}} > Bags</p>
            <p className='Link' onClick={()=>{handleSorting("Mens_watch")}} >Mens Watches</p>
        </div>
      </div>
      <div id='main_data' className="cards">
        {
         Product && Product.map(curElem=>(
            <Link key={curElem.id}  to={"/Details"} onClick={()=>{setdetails(curElem); }}>
            <div className="card">
              <div  className="img">
              <LazyLoadImage src={curElem.image} effect="blur" placeholderSrc={loading_img} />
              </div>
              <div className="text">
                <div className="top_section">
                  <h1>{curElem.name}</h1>
                  <p>Size: All</p>
                </div>
                <div className="medium">
                <b>{curElem.price}$ <span>{curElem.orginal_price}</span> </b>
                <a href="#">Buy Now</a>
                </div>
              </div>
              <div style={Sale}  className="sale">
                <a href="#">On Sale</a>
              </div>
            </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
export default Product
