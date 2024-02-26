import React, { useState, useContext } from 'react'
import logo from '../images/logo.png'
import searchLogo from '../images/search-icon.png'
import CartLogo from '../images/cart.png'
import { Link } from 'react-router-dom'
import { MyContext } from '../MyContext'


export default function Header() {
  const {cartProduct, data, setData}= useContext(MyContext)
  const [toSearch, setToSearch]= useState('')
  const handelSearch = ()=>{
    const filterData = toSearch.length === 0 ? JSON.parse(localStorage.getItem('data')) : data.filter((value,i)=> value.title.includes(toSearch)||value.brand.includes(toSearch))
    setData(filterData)
  }
  
  return (
    <>
      <div className="nav-container">
          <img src={logo} alt="logo"/>
          <nav className="menu-bar">
            <ul>
              <Link to={'/'} onClick={()=>setData(JSON.parse(localStorage.getItem('data')))}>
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
          <div className="search-container">
            <input className="input" type="text" value={toSearch} onChange={(e) => setToSearch(e.target.value)} placeholder='Search..'/>
            <div className="search-icon-div">
              <img src={searchLogo} alt="Search Icon" onClick={()=> handelSearch()}/>
            </div>
          </div>
          <Link to={'/CartProduct'} style={{textDecoration:'none'}}>
          <div style={{color:'white'}}>
            <img src={CartLogo} alt="Cart Logo" style={{width:'30px', height:'30px', color:'white'}}/><span>{cartProduct.length}</span></div>
          </Link>
        </div>
    </>
  )
}
