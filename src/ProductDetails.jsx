import React from 'react';


export default function ProductDetails({updateModel, productDetails}) {
    const closeModel = ()=>{
        updateModel(false)
    }
    return (
    <div class="main-container">
        {productDetails.map((v,i)=>(
            <div class="model-card">
                <div class="model-img-container">
                    <img class="card-img-top" src={v.thumbnail} alt="Card image"/>
                </div>
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
                      </div>
                    </div>
                    <button class="btn btn-primary" onClick={() => closeModel()}>Close</button>
          </div>
        </div>
      ))}
    </div>
  )
}
