import React, { useState, useContext } from 'react'
import logo from '../images/logo.png'
import searchLogo from '../images/search-icon.png'
import { Link } from 'react-router-dom'
import { MyContext } from '../MyContext'


export default function Header({prodToSearch}) {
  const [toSearch, setToSearch]= useState('')
  const handelSearch = (e)=>{
    //console.log(toSearch)
    prodToSearch(toSearch)
  }
  const {cartProduct}= useContext(MyContext)
  return (
    <>
      <div class="nav-container">
          <img src={logo} alt="logo"/>
          <nav class="menu-bar">
            <ul>
              <Link to={'/'}>
                <li>Home</li>
              </Link>
              <Link>
                <li>About</li>
              </Link>
              <Link>
                <li>Service</li>
              </Link>
              <Link>
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
          <div class="search-container">
            <input class="input" type="text" value={toSearch} onChange={(e) => setToSearch(e.target.value)} placeholder='Search..'/>
            <div class="search-icon-div">
              <img src={searchLogo} alt="Search Icon" onClick={(e)=> handelSearch(e)}/>
            </div>
          </div>
          <Link to={'/CartProduct'}>
          <div style={{color:'white'}}>Cart <span>{cartProduct.length}</span></div>
          </Link>
        </div>
    </>
  )
}
