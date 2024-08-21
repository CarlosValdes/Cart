import React, { useEffect, useState } from 'react'
//import { productos } from '../products'
import ProductCart from '../components/productCart'
import axios from 'axios'
const Home = () => {
  const [productos,setProducts]=useState([])
  const getProductList=()=>{
    axios.get("http://185.239.238.174:8080/api/product")
    .then((res)=>{
      //console.log(res.data)
      setProducts(res.data)
    } )
  }
  useEffect (()=>
{
  getProductList();
},[])
  return (
    <div>
      <h1 className='text-3xl my-5'> Lista de Productos</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {productos.map((producto, key)=>
        <ProductCart key={key} data={producto}/>
        )}
      </div>
    </div>
  )
}

export default Home