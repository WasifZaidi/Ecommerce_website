import React from 'react'
import "./Css/Footer.css"
import { IoSearch } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='Footer'>
      <div className="content">
      <div className="left">
        <div className="text">
            <h1>HomeCart</h1>
            <p>Sign up to get latest news of our sales and collections</p>
        </div>
        <div className="search">
            <div className="sec_1">
                <input type="text" placeholder='Email or Phone' name="" id="" />
                <input type="text" placeholder='User name' name="" id="" />
            </div>
            <div className="sec_2">
                <a href="#">Sign Up</a>
            </div>
        </div>
        <div className="note">
            <p>Note: This Website is for demo purpose all the products are demo and your given information are not going to be used by us </p>
        </div>
        <div className="social_media">
        <p>Find us on</p>
        <div className="icons">
        <BsFacebook  className='icon'/>
        <RiTwitterXFill  className='icon'/>
        < FaInstagram  className='icon'/>
        <FaPinterest className='icon'/>
        </div>
        </div>
      </div>
      <div className="right">
        <div className="sec">
            <h2>Companies</h2>
            <div className="links">
            <ul>
                <li>About</li>
                <li>Experts & Spokesmodel</li>
            </ul>
            </div>
        </div>
        <div className="sec">
            <h2>About</h2>
            <div className="links">
            <ul>
                <li>Contact us</li>
                <li>My account</li>
                <li>Store locator</li>
                <li>Radeem Rewards</li>
            </ul>
            </div>
        </div>
        <div className="sec">
            <h2>More To Explore</h2>
            <div className="links">
            <ul>
                <li>Beauty Magzine</li>
                <li>Tools & Consultation</li>
                <li>Offers</li>
                <li>#HomeCart</li>
            </ul>
            </div>
        </div>
      </div>
      </div>
      <div className="copy_right">
      <p>Copyright ©2023 All rights reserved | This website is made by Syed wasif</p>
      </div>
    </div>
  )
}

export default Footer
