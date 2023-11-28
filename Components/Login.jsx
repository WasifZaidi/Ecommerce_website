import React, { useContext, useEffect } from 'react'
import "./Css/Login.css"
import { Context } from '../Utils/Context'
import { RxCross2 } from "react-icons/rx";
const Login = () => {
  const {OpenLoginPage, setOpenLoginpage} = useContext(Context)
  const {OpenNavbar, setOpenNavbar} = useContext(Context)
  const {OpenResnavbar, setOpenResnavbar} = useContext(Context)
  const {offLoginsection} = useContext(Context)
   const changedata = (e, state)=>{
    e.preventDefault()
    if(state == "sign_up"){
      document.getElementById("Login").style.display = "none"
      document.getElementById("Sign_up").style.display = "grid"
      document.getElementById("Login_in_btn").style.display = "block"
      document.getElementById("Sign_up_btn").style.display = "none"
      document.getElementById("title").innerHTML = "Sign up"
      document.getElementById("news_letter").innerHTML = "Sign up to get latest news of our sales and collections"
    }
    if(state == "Login"){
     document.getElementById("Sign_up").style.display = "none"
     document.getElementById("Login").style.display = "grid"
     document.getElementById("Sign_up_btn").style.display = "block"
     document.getElementById("Login_in_btn").style.display = "none"
     document.getElementById("title").innerHTML = "Login"
     document.getElementById("news_letter").innerHTML = "Login to get latest news of our sales and collections"
    }
   } 
   useEffect(()=>{
    if(OpenLoginPage == true){
      document.getElementById("Login_section").style.display = "flex"
    }
    if(OpenLoginPage == false){
      document.getElementById("Login_section").style.display = "none"
    }
   },[OpenLoginPage])

  return (
    <div id='Login_section' className='Login'>
      <div className="heading">
        <h1 id='title'>Sign up</h1>
        <p id='news_letter'>Sign up to get latest news of our sales and collections</p>
      </div>
      <div className="form">
        <div id='Sign_up' className="inputs">
            <input  type="text" placeholder='Your Name' />
            <input type="text" placeholder='Your Email' />
            <input type="text" placeholder='Your Password' />
            <input type="text" placeholder='Your Country Optional' />
            <input type="text" placeholder='Your Address Optional' />
            <input type="text" placeholder='Postal Code Optional' />
        </div>
        <div id='Login' className="inputs">
            <input type="text" placeholder='Your Email' />
            <input type="text" placeholder='Your Password' />
        </div>
        <div className="submit">
            <a href="#">Sign up</a>
        </div>
      </div>
      <div className="login_sign_up">
            <p id='Login_in_btn' >Already Have an Account <a href="#" onClick={(e)=>{changedata(e, "Login")}}>Login in</a></p>
            <p id='Sign_up_btn'>Dont Have an Account <a href="#"  onClick={(e)=>{changedata(e, "sign_up")}}>Sign Up</a></p>
        </div>
      <div className="note">
            <p>Note: This Website is for demo purpose all the products are demo and your given information are not going to be used by us</p>
        </div>
        <div className="cross">
        <RxCross2 onClick={()=>{offLoginsection()}} className='icon'/>
        </div>
    </div>
  )
}

export default Login
