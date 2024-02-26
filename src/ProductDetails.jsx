import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CustomCarousel from './Common/CustomCarousel';
import { MyContext } from './MyContext';


export default function ProductDetails() {
  const {data, setData, cartProduct, setCartProduct} = useContext(MyContext)
  const {id}=useParams()
  const [count, setCount]= useState(0)
  useEffect(()=>{
    const filterData = data.filter((v)=>v.id===Number(id))
    setData(filterData)
  },[])
    
    return (
      <>
        {data.length===0 &&<div>loading</div>}
        {data.length>0 &&(
          <div className="main-container">
            {data.map((v,i)=>(
              <div className="model-card">
                <CustomCarousel imageUrl={v.images}/>
                  <div className="model-card-body">
                    <h3 className="card-title">{v.brand}</h3>
                    <h4 className="card-title">{v.title}</h4>
                    <div className="model-content">
                      <div>
                        <p className="card-text"><span>Category : </span>{v.category}</p>
                        <p className="card-text"><span>Description : </span>{v.description}</p>
                      </div>
                      <div>
                        <p className="card-text"><span>Acutal Price : Rs. </span>{v.price}</p>
                        <p className="card-text"><span>Discounted Price : Rs. </span>{v.discountedPrice}</p>
                        <p className="card-text"><span>Stock : </span>{v.stock}</p>
                        <p className="card-text"><span>Rating : </span>{v.rating}</p>
                        <p className="card-text">Quantity : <button className="btn btn-primary" onClick={()=>setCount(prev => prev-1)} disabled={count===0? true : false}>-</button><span value={count}> {count} </span><button class="btn btn-primary" onClick={()=>setCount(prev => prev+1)} disabled={count === v.stock? true : false}>+</button></p>
                      </div>
                    </div>
                    <div className="btn-div">
                      <Link to = "/">
                        <button className="btn btn-primary" onClick={()=>setData(JSON.parse(localStorage.getItem('data')))}>Back</button>
                      </Link>
                        <button className="btn btn-primary" onClick={()=>setCartProduct([...cartProduct,{...v, count}])} disabled = {count < 1 ? true : false}>Add To Cart</button>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        )}
      </>
    )
}
