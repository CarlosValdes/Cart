import React,{useState, useEffect} from 'react'
//import { productos } from '../products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';
import axios from 'axios'

const Cartitem = (props) => {
    const{productId,qty}=props.data;
    const [detail, setDetail]=useState([]);
    const dispatch=useDispatch();
    

    const getProductList=()=>{
        axios.get("http://127.0.0.1:8080/api/product")
        .then((res)=>{
          //console.log(res.data)
          //setProducts(res.data)
          //console.log(sku)
          const findDetail=res.data.filter(product=>product.id === productId);
          console.log(findDetail)
          if (findDetail.length>0)
            {
              setDetail(findDetail[0])
            }else{
              window.location.href ='/';
            }
        } )
      }
    
    
    useEffect(()=>{
        getProductList();
        //const findDetail = productos.filter(product=>product.id === productId)[0];
        //setDetail(findDetail)
    },[productId])



    const handleMinus=()=>{
        dispatch(changeQuantity({
            productId:productId,
            qty:qty-1
        }));
    }
    const handlePlus=()=>{
        dispatch(changeQuantity({
            productId:productId,
            qty:qty+1
        }));
    }
  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
        <img src={detail.image} alt="" className='w-12' />
        <h3>{detail.name}</h3>
        <p>${(detail.price * qty).toFixed(2)}</p>
        <div className='w-20 flex justify-between gap-2 '>
            <buton className='bg-gray-200 rounded-full w-6 h-6 text-black text-center cursor-pointer' onClick={handleMinus}>-</buton>
            <span>{qty}</span>
            <buton className='bg-gray-200 rounded-full w-6 h-6 text-black text-center cursor-pointer' onClick={handlePlus}>+</buton>
        </div>

    </div>
  )
}

export default Cartitem
