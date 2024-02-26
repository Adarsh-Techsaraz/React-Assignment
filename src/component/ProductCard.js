import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../MyContext'


export default function ProductCard() {
  const {data} = useContext(MyContext)

  return (
      <>
        <div className="App">
          {data?.map((v,i)=>(
            <div className="card">
              <div className="img-container">
                <img className="card-img-top" src={v.thumbnail} alt="Card"/>
              </div>
              <div className="card-body">
                <h3 className="card-title">{v.brand}</h3>
                <h4 className="card-title">{v.title}</h4>
                <p className="card-text"><span>Acutal Price : Rs. </span>{v.price}</p>
                <p className="card-text"><span>Discounted Price : Rs. </span>{v.discountedPrice}</p>
                <Link to={`/ProductDetails/${v.id}`}>
                  <button className="btn btn-primary">Show Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </>
      
  )
}
