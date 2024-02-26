import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MyContext } from '../MyContext'

export default function Checkout() {
    const {setPersonalDetails} = useContext(MyContext)
    const [firstName, setFirstName]= useState('')
    const [middleName, setMiddleName]= useState('')
    const [lastName, setLastName]= useState('')
    const [mobNo, setMobNo]= useState('')
    const [address, setAddress]= useState('')
    const {gt}=useParams()
    
  return (
    <>
        <div className="Form-Container">
            <h1>Personal Information</h1>
            <input type="text" className="input-field" id="firstName" placeholder="First Name" required onChange={(e)=>setFirstName(e.target.value)}/>
            <input type="text" className="input-field" id="middleName" placeholder="Middle Name" onChange={(e)=>setMiddleName(e.target.value)}/>
            <input type="text" className="input-field" id="lastName" placeholder="Last Name" required onChange={(e)=>setLastName(e.target.value)}/>
            <input type="tel" className="input-field" id="phone" placeholder="Mob. No." required onChange={(e)=>setMobNo(e.target.value)}/>
            <input type="text" className="input-field" id="address" placeholder="Address" required onChange={(e)=>setAddress(e.target.value)}/>
            <Link to='/Thankyou'>
                <button className="btn btn-primary Btn" id="orderBtn" onClick={()=>setPersonalDetails([{firstName, middleName, lastName, mobNo, address, gt}])}>Place Order</button>
            </Link>
        </div>
    </>
  )
}
