import React from 'react'
import { Link } from 'react-router-dom';
import icono from '../assets/images/cart.png'
import { useSelector, useDispatch,  } from 'react-redux';
import { addToCart } from '../stores/cart';


const ProductCart = (props) => {
    const carts=useSelector(store=>store.cart.items);
   //console.log(carts);
    const {id,name,price,description,image,sku}=props.data;
    const dispatch=useDispatch();
    const handleAddToCart=()=>{
        dispatch(addToCart({
            productId:id,
            qty:1
        }));
    }
  return (

    <div className='bg-white p-5 rounded-xl shadow-sm'>
        <Link to={sku}>
        <img src={image} alt="" className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]' />
        </Link>
        <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
        <div className='flex justify-between items-center'>
            <p>
                $<span className='text-2xl font-medium'>{price}</span>
            </p>
            <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400' onClick={handleAddToCart}>
                <img className='w-5 h-5' src={icono} alt="" />
                Agregar al Carrito
            </button>
        </div>
    </div>
  )
}

export default ProductCart