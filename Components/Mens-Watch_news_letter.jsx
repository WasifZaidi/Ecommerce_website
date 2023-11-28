import React from 'react'
import "./Css/Mens_Watch_news_letter.css"
import Mens_News_letter from "../images/News_letter_img_2.png"
import { BsCart } from "react-icons/bs"
import { AiOutlineHeart } from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import loading_img from "../images/loading.jpg"
const Mens_Watch_news_letter = () => {
    return (
        <div className='Mens_news_letter'>
            <div className="top_section">
                <div className="img">
                <LazyLoadImage src={Mens_News_letter} effect="blur" placeholderSrc={loading_img} />
                </div>
            </div>
            <div className="bottom_section">
                <div className="text">
                    <div className="heading">
                        <b>Only 5 days Left</b>
                        <h1>Buy now and Get upto 50% discount</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus velit fugit illum voluptates provident aliquid optio, deserunt magnam quisquam corrupti error dolorum et perspiciatis eum doloribus pariatur itaque rerum vel!</p>
                    <div className="btns">
                        <a href="#Watches"><BsCart className='icon' />Buy Now</a>
                        <a href="#Watches"> <AiOutlineHeart className='icon' />Faviroute</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mens_Watch_news_letter
