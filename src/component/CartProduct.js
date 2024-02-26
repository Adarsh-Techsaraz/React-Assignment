import React, { useContext } from 'react'
import { MyContext } from '../MyContext'
import { Link } from 'react-router-dom'



export default function CartProduct() {
    const {setData, cartProduct, setCartProduct}=useContext(MyContext)
    const removeFromCart = (i)=>{
      const filterData = cartProduct.filter((value,index)=>index!==i)
      setCartProduct(filterData)
    }
    let subtotal = 0
    cartProduct.map((v)=> subtotal += v.discountedPrice)
    let tax = (subtotal*5)/100
    let shippingCharges = 15
    const grandTotal = Number((subtotal+tax+shippingCharges).toFixed(2))
    
    
  return (
    <>
      {cartProduct.length===0 ? (
          <div>
            <h1>No Product Selected</h1>
            <Link to='/'>
              <button className='btn btn-primary' onClick={()=>setData(JSON.parse(localStorage.getItem('data')))}>Continue Shopping</button>
            </Link>
            
          </div>
        ) : 
        (
        <>
          <h1>Shopping Cart</h1>
          <div className="shopping-cart">
            <div className="column-labels">
              <label className="product-image">Image</label>
              <label className="product-details">Product</label>
              <label className="product-price">Price</label>
              <label className="product-quantity">Quantity</label>
              <label className="product-removal">Remove</label>
              <label className="product-line-price">Total</label>
            </div>
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
                <div className="product-removal">
                  <button className="remove-product" onClick={()=>removeFromCart(i)}>Remove</button>
                </div>
                <div className="product-line-price">{v.discountedPrice*v.count}</div>
              </div>
            ))}
        
        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">{Number((subtotal).toFixed(2))}</div>
          </div>
          <div className="totals-item">
            <label>Tax (5%)</label>
            <div className="totals-value" id="cart-tax">{Number(tax.toFixed(2))}</div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">{shippingCharges}</div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">{Number((subtotal + tax + shippingCharges).toFixed(2))}</div>
          </div>
        </div>
        <Link to={`/Checkout/${grandTotal}`}>
          <button className="checkout">Checkout</button>
        </Link>
        
          </div>
        </>
      )}
    </>
  )
}
