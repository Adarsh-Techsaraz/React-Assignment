import './App.css';
import { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
import { Route, Routes } from 'react-router-dom';
import ProductCard from './component/ProductCard';
import Header from './Common/Header';
import { MyContext } from './MyContext';
import CartProduct from './component/CartProduct';
import Checkout from './component/Checkout';
import Thankyou from './component/Thankyou';

function App() {
  const [data,setData] = useState([])
  const [cartProduct, setCartProduct]= useState([])
  const [personalDetails, setPersonalDetails]= useState([])
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
    if(localStorage.getItem('CartData')){
      setCartProduct(JSON.parse(localStorage.getItem('CartData')))
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem('CartData', JSON.stringify(cartProduct))
  },[cartProduct])

  return (
    <>
      <MyContext.Provider value={{data, setData, cartProduct, setCartProduct, personalDetails, setPersonalDetails}}>
        {data.length===0 ? <div>Loading</div> : (<>
          <Header/>
          <Routes>
            <Route path='/' element={<ProductCard/>}/>
            <Route path='*' element={<div>This page is not found</div>}/>
            <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
            <Route path='/CartProduct' element={<CartProduct/>}/>
            <Route path='/CheckOut/:gt' element={<Checkout/>}/>
            <Route path='/Thankyou' element={<Thankyou/>}/>
          </Routes>
        </>
        )}
      </MyContext.Provider>
    </>
  );
}
export default App;
