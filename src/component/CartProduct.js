import React, { useContext } from 'react'
import { MyContext } from '../MyContext'



export default function CartProduct() {
    const {cartProduct}=useContext(MyContext)
  return (
    <><h1>Shopping Cart</h1>

<div class="shopping-cart">

  <div class="column-labels">
    <label class="product-image">Image</label>
    <label class="product-details">Product</label>
    <label class="product-price">Price</label>
    <label class="product-quantity">Quantity</label>
    <label class="product-removal">Remove</label>
    <label class="product-line-price">Total</label>
  </div>

  {cartProduct.map((v,i)=>(<div class="product">
    <div class="product-image">
      <img src={v.thumbnail}/>
    </div>
    <div class="product-details">
      <div class="product-title">{v.title}</div>
      <p class="product-description">{v.description}</p>
    </div>
    <div class="product-price">{v.discountedPrice}</div>
    <div class="product-quantity">
      <input type="number" value={v.count} min="1"/>
    </div>
    <div class="product-removal">
      <button class="remove-product">
        Remove
      </button>
    </div>
    <div class="product-line-price">{v.discountedPrice*v.count}</div>
  </div>)) }

  

  <div class="totals">
    <div class="totals-item">
      <label>Subtotal</label>
      <div class="totals-value" id="cart-subtotal">71.97</div>
    </div>
    <div class="totals-item">
      <label>Tax (5%)</label>
      <div class="totals-value" id="cart-tax">3.60</div>
    </div>
    <div class="totals-item">
      <label>Shipping</label>
      <div class="totals-value" id="cart-shipping">15.00</div>
    </div>
    <div class="totals-item totals-item-total">
      <label>Grand Total</label>
      <div class="totals-value" id="cart-total">90.57</div>
    </div>
  </div>
      
      <button class="checkout">Checkout</button>

</div>
</>
  )
}
