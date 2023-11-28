import React from 'react'
import { useContext } from 'react'
import { Context } from '../Utils/Context'
import { useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";
import "./Css/Search.css"
const Search = () => {
  const {OpenSearchsection, setOpenSearchsection} = useContext(Context)
  const {OpenNavbar, setOpenNavbar} = useContext(Context)
  const {OpenResnavbar, setOpenResnavbar} = useContext(Context)
  const {offSearchsection} = useContext(Context)
useEffect(()=>{
    if(OpenSearchsection == true){
      document.getElementById("Search_section").style.display = "flex"
    }
    if(OpenSearchsection  == false){
      document.getElementById("Search_section").style.display = "none"
    }
   },[OpenSearchsection])

  return (
    <div id='Search_section' className='Search'>
      <input type="search" placeholder='Search here...' />
      <div className="cross_icon">
      <div className="cross">
        <RxCross2 onClick={()=>{offSearchsection()}} className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Search
