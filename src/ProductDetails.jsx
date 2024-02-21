import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CustomCarousel from './Common/CustomCarousel';


export default function ProductDetails({data, addToCart }) {
    const {id}=useParams()
    const [productDetails, setProductDetails] = useState([])
    useEffect(()=>{
      const filterData = data?.filter((value, i)=>i==id)
      //console.log(filterData)
      setProductDetails(filterData)
      //console.log(productDetails)
    },[])
    return (
      <>
      {productDetails.length===0 &&<div>loading</div>}
      {productDetails.length>0 &&(
        <div class="main-container">
        {productDetails.map((v,i)=>(
            <div class="model-card">
                <CustomCarousel imageUrl={v.images}/>
                <div class="model-card-body">
                    <h3 class="card-title">{v.brand}</h3>
                    <h4 class="card-title">{v.title}</h4>
                    <div class="model-content">
                      <div>
                        <p class="card-text"><span>Category : </span>{v.category}</p>
                        <p class="card-text"><span>Description : </span>{v.description}</p>
                      </div>
                      <div>
                        <p class="card-text"><span>Acutal Price : Rs. </span>{v.price}</p>
                        <p class="card-text"><span>Discounted Price : Rs. </span>{Math.round((v.price-((v.price*v.discountPercentage)/100))*100)/100}</p>
                        <p class="card-text"><span>Stock : </span>{v.stock}</p>
                        <p class="card-text"><span>Rating : </span>{v.rating}</p>
                        <p class="card-text">Quantity : <button class="btn btn-primary">-</button><span> 0 </span><button class="btn btn-primary">+</button></p>
                      </div>
                    </div>
                    <div class="btn-div">
                      <Link to = "/">
                        <button class="btn btn-primary">Back</button>
                      </Link>
                        <button class="btn btn-primary" onClick={()=>addToCart(v)}>Add To Cart</button>
                    </div>
                    
                    
          </div>
        </div>
      ))}
    </div>
      )}
      
      </>
    
  )
}
