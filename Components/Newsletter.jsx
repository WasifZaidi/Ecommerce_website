import React from 'react'
import "./Css/Newsletter.css"
import News_letter_pro_img from "../images/News_letter_img_2.png"
import { BsCart } from "react-icons/bs"
import { AiOutlineHeart } from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import loading_img from "../images/loading.jpg"
const Newsletter = () => {
  return (
    <div className='Newsletter'>
       <div className="left">
        <div className="img">
        <LazyLoadImage src={News_letter_pro_img} effect="blur" placeholderSrc={loading_img} />
        </div>
       </div>
       <div className="right">
        <div className="heading">
        <b>Upto 50% off on</b>
        <h1>Smart Watches</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quibusdam inventore obcaecati dignissimos laborum eligendi ipsum accusantium repellat, nobis at consequuntur porro quae voluptas iste. Obcaecati facere velit totam deserunt.</p>
        <div className="btns">
          <a href="#Watches"><BsCart className='icon'/>Buy Now</a>
          <a href="#Watches"> <AiOutlineHeart className='icon'/>Faviroute</a>
        </div>
       </div>
    </div>
  )
}

export default Newsletter
