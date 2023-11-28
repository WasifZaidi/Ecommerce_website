import React from 'react'
import "./Css/Header.css"
import banner_1 from "../images/banner_1.jpg"
import banner_2 from "../images/banner_2.jpg"
import banner_3 from "../images/banner_3.jpg"
import banner_4 from "../images/banner_4.jpg"
import banner_5 from "../images/banner_5.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import loading_img from "../images/loading.jpg"
const Header = () => {
  return (
    <div className='Header'>
      <div className="main_section">
        <div className="left">
          <div data-aos="fade-down" data-aos-duration="2000" className="card">
            <div className="img">
            <LazyLoadImage src={banner_1} effect="blur" placeholderSrc={loading_img} />
            </div>
            <div className="content">
              <h1>Mens Fashion</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et autem nam perspiciatis. Quaerat modi quae iste id iure accusamus.</p>
              <a href="#Mens">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="right">
          <div data-aos="fade-up" data-aos-duration="2000" className="card">
            <div className="img">
              <img src={banner_4} alt="" />
            </div>
            <div className="content">
              <h1 className='smallh1'>Womens Fashion</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et autem nam perspiciatis. Quaerat modi quae iste id iure accusamus.</p>
              <a href="#Womens_news">Shop Now</a>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="2000" className="card">
            <div className="img">
              <img src={banner_2} alt="" />
            </div>
            <div className="content">
              <h1 className='smallh1'>Womens Bags</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et autem nam perspiciatis. Quaerat modi quae iste id iure accusamus.</p>
              <a href="#Bags">Shop Now</a>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="card">
            <div className="img">
              <img src={banner_3} alt="" />
            </div>
            <div className="content">
              <h1 className='smallh1'>Kids Fashion</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et autem nam perspiciatis. Quaerat modi quae iste id iure accusamus.</p>
              <a href="#Kids">Shop Now</a>
            </div>
          </div>
          <div  data-aos="fade-down" data-aos-duration="2000" className="card">
            <div className="img">
              <img src={banner_5} alt="" />
            </div>
            <div className="content">
              <h1 className='smallh1'>Mens Watches</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et autem nam perspiciatis. Quaerat modi quae iste id iure accusamus.</p>
              <a href="#Watches_news">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
