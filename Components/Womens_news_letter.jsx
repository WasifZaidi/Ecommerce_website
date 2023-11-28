import React from 'react'
import "./Css/Womens_news_letter.css"
import News_letter_img from "../images/Womens_news_letter.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import loading_img from "../images/loading.jpg"
const Womens_news_letter = ({image,flexDirection }) => {
  return (
    <div style={flexDirection} className='Womens_news_letter'>
      <div className="left">
        <div className="img">
        <LazyLoadImage src={News_letter_img} effect="blur" placeholderSrc={loading_img} />
        </div>
      </div>
      <div className="right">
        <div className="text">
          <div className="heading">
          <b>New Collection of</b>
          <h1>Womens Dressess</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea labore sequi sapiente dicta cupiditate aliquam illum repellat voluptates consectetur magni, tempora, quae cum vel ipsam optio, eligendi facere quis?</p>
          <div className="btns">
            <a href="#Womens" >Buy Now</a>
            <a href="#Womens">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Womens_news_letter
