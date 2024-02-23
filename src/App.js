import './App.css';
import { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
import { BrowserRouter, Outlet, Route, Routes, createBrowserRouter } from 'react-router-dom';
import ProductCard from './component/ProductCard';
import Header from './Common/Header';
import { MyContext } from './MyContext';
import CartProduct from './component/CartProduct';

function App() {
  //const localData = JSON.parse(localStorage.getItem('data'))
  const [data,setData] = useState([])
  const [cartProduct, setCartProduct]= useState([])
  useEffect(()=>{
    if(!localStorage.getItem('data')){
      fetch('https://dummyjson.com/products')
    .then((res=>res.json()))
    .then(data=>{
      const modifyData = data.products.map(v => {
        const discountedPrice = Number((v.price-((v.price*v.discountPercentage)/100)).toFixed(2))
        return {...v, discountedPrice}
      })
      localStorage.setItem('data', JSON.stringify(modifyData))
      setData(modifyData)
      })
    .catch(err=>console.log(err))
    }else{
      setData(JSON.parse(localStorage.getItem('data')))
    }
    
  },[])
  const displayData = (toDisplay)=>{
    const filterData = toDisplay===''? data : data?.filter((value,i)=> value.title.includes(toDisplay)||value.brand.includes(toDisplay))
    //console.log(filterData)
    setData(filterData)
  }
  useEffect(()=>{
    //console.log(cartProduct)
    localStorage.setItem('CartData', JSON.stringify(cartProduct))
  },[cartProduct])
  
  return (
    <>
    <MyContext.Provider value={{data, setData, cartProduct, setCartProduct}}>
    {/* {openModel && <ProductDetails updateModel ={(flag)=>setOpenModel(flag)} productDetails={productDetails}/>} */}
    {data.length===0 ? <div>Loading</div> : (<>
      <Header prodToSearch={(e)=>displayData(e)}/>
      <Routes>
        <Route path='/' element={<ProductCard data={data}/>}/>
        <Route path='*' element={<div>This page is not found</div>}/>
        <Route path='/ProductDetails/:id' element={<ProductDetails data={data} addToCart={(e)=>setCartProduct([...cartProduct, e])}/>}/>
        <Route path='/CartProduct' element={<CartProduct/>}/> 
      </Routes>
      
      </>
    )}
    </MyContext.Provider>
    
    </>
  );
}
export default App;
