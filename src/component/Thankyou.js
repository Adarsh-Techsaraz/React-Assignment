import React, { useContext } from 'react'
import { MyContext } from '../MyContext'

export default function Thankyou() {
    const {cartProduct, personalDetails}= useContext(MyContext)
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
  return (
    <>
        {personalDetails.map((v,i)=>(
            <div className="Thankyou-container">
                <h1>Order Confirmation</h1>
                <p>Order ID : <span className="info" id="orderId">OID26548694</span></p>
                <p>Order Date : <span className="info" id="orderDate">{currentDate}</span></p>
                <p>First Name : <span className="info" id="firstName">{v.firstName}</span></p>
                <p>Middle Name : <span className="info" id="middleName">{v.middleName}</span></p>
                <p>Last Name : <span className="info" id="lastName">{v.lastName}</span></p>
                <p>Phone No. : <span className="info" id="PhoneNo">{v.mobNo}</span></p>
                <p>Address : <span className="info" id="address">{v.address}</span></p>
            </div>))}
            
            {cartProduct.map((v,i)=>(
              <div className="product">
                <div className="product-image">
                  <img src={v.thumbnail} alt='Product'/>
                </div>
                <div className="product-details">
                  <div className="product-title">{v.title}</div>
                  <p className="product-description">{v.description}</p>
                </div>
                <div className="product-price">{v.discountedPrice}</div>
                <div className="product-quantity">
                  <input type="number" value={v.count} min="1"/>
                </div>
                <div className="product-line-price">{v.discountedPrice*v.count}</div>
              </div>
            ))}    
    </>
    
    
  )
}
