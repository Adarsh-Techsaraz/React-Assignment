import './App.css';
import { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';
import ProductCard from './component/ProductCard';

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
    {/* {openModel && <ProductDetails updateModel ={(flag)=>setOpenModel(flag)} productDetails={productDetails}/>} */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductCard data={data}/>}/>
        <Route path='*' element={<div>This page is not found</div>}/>
        <Route path='/ProductDetails/:id' element={<ProductDetails productDetails={productDetails} data={data}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
