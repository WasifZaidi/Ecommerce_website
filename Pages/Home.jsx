import React, { useEffect, useState } from 'react'
import Product from '../Components/Product'
import Header from '../Components/Header'
import { useContext } from 'react'
import { Context } from '../Utils/Context'
import Newsletter from '../Components/Newsletter'
import Newproduct from "../Components/Newproduct"
import Womens_news_letter from '../Components/Womens_news_letter'
import Mens_Watch_news_letter from '../Components/Mens-Watch_news_letter'

const Home = () => {
  const {Mens} = useContext(Context)
  const {WomensDresses} = useContext(Context)
  const {Womesbags} = useContext(Context)
  const {MensWatches} = useContext(Context)
  const {Kids} = useContext(Context)
  const {New_product} = useContext(Context)

  return (
    <div>
      <Header/> 
      <div id='New_product'>
      <Newproduct data = {New_product} spantitle = {"Latest"}  title = {"Products"}     />
      </div>
      <Newsletter/>
      <div id='Kids'>
      <Product data = {Kids} spantitle = {"Kids"}  title = {"Fashion"}  />
      </div>
      <div id='Mens'>
      <Product data = {Mens} spantitle = {"Mens"}   title = {"Kurtas"}/>
      </div>
      <div id="Bags">
      <Product data = {Womesbags} spantitle = {"Womens"}  title = {"Bags"}  />
      </div>
      <div id='Womens_news' >
      <Womens_news_letter/>
      </div>
      <div id="Womens">
      <Product data = {WomensDresses} spantitle = {"Womens"}   title = {"Dressess"}   />
      </div>
       <div id="Watches_news">
       <Mens_Watch_news_letter/>
       </div>
      <div id="Watches">
      <Product data = {MensWatches} spantitle = {"Mens"}   title = {"Watches"}   />
      </div>
    </div>
  )
}

export default Home
