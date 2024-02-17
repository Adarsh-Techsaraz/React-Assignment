import './App.css';
import { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';

function App() {
  const [data,setData] = useState([])
  const [openModel, setOpenModel] = useState(false)
  const [productDetails, setProductDetails] = useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then((res=>res.json()))
    .then(data=>setData(data))
    .catch(err=>console.log(err))
  },[])
  /*useEffect(()=>{
    console.log(productDetails)
  },[data])*/
  const handelOpenModel=(i)=>{
    setOpenModel(true)
    const filterData = data.products.filter((value,index) => index === i)
    setProductDetails(filterData)
  }

  return (
    <>
    {openModel && <ProductDetails updateModel ={(flag)=>setOpenModel(flag)} productDetails={productDetails}/>}
    <div className="App">
      {data.products?.map((v,i)=>(
        <div class="card">
          <div class="img-container">
            <img class="card-img-top" src={v.thumbnail} alt="Card image"/>
          </div>
          <div class="card-body">
            <h3 class="card-title">{v.brand}</h3>
            <h4 class="card-title">{v.title}</h4>
            <p class="card-text"><span>Acutal Price : Rs. </span>{v.price}</p>
            <p class="card-text"><span>Discounted Price : Rs. </span>{Math.round((v.price-((v.price*v.discountPercentage)/100))*100)/100}</p>
            <button class="btn btn-primary" onClick={() => handelOpenModel(i)}>See Profile</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
export default App;
