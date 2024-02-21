import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Common/Header'

export default function ProductCard({data}) {

  return (
      <>
        {data.length===0 ? <div>Loading</div> : (<div className="App">
          {data?.map((v,i)=>(
            <div class="card">
              <div class="img-container">
                <img class="card-img-top" src={v.thumbnail} alt="Card image"/>
              </div>
              <div class="card-body">
                <h3 class="card-title">{v.brand}</h3>
                <h4 class="card-title">{v.title}</h4>
                <p class="card-text"><span>Acutal Price : Rs. </span>{v.price}</p>
                <p class="card-text"><span>Discounted Price : Rs. </span>{Math.round((v.price-((v.price*v.discountPercentage)/100))*100)/100}</p>
                <Link to={`/ProductDetails/${i}`}>
                  <button class="btn btn-primary">Show Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>)
        }
        
      </>
      
  )
}
