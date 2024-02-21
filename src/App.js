import './App.css';
import { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
import { BrowserRouter, Outlet, Route, Routes, createBrowserRouter } from 'react-router-dom';
import ProductCard from './component/ProductCard';
import Header from './Common/Header';

function App() {
  //const localData = JSON.parse(localStorage.getItem('data'))
  const [data,setData] = useState([])
  const [cartProduct, setCartProduct]= useState([])
  useEffect(()=>{
    if(!localStorage.getItem('data')){
      fetch('https://dummyjson.com/products')
    .then((res=>res.json()))
    .then(data=>{
      localStorage.setItem('data', JSON.stringify(data.products))
      setData(data.products)
      })
    .catch(err=>console.log(err))
    }else{
      setData(JSON.parse(localStorage.getItem('data')))
    }
    
  },[])
  const displayData = (toDisplay)=>{
    const filterData = toDisplay===''? data : data?.filter((value,i)=> value.title.includes(toDisplay))
    console.log(filterData)
    setData(filterData)
  }
  useEffect(()=>{
    console.log(cartProduct)
  },[cartProduct])
  const setCartItems = (e)=>{
    console.log(e)
  }
  return (
    <>
    {/* {openModel && <ProductDetails updateModel ={(flag)=>setOpenModel(flag)} productDetails={productDetails}/>} */}
    <Header prodToSearch={(e)=>displayData(e)}/>
    
    
      <Routes>
        <Route path='/' element={<ProductCard data={data}/>}/>
        <Route path='*' element={<div>This page is not found</div>}/>
        <Route path='/ProductDetails/:id' element={<ProductDetails data={data} addToCart={(e)=>setCartItems(e)}/>}/>
      </Routes>
    
    </>
  );
}
export default App;
