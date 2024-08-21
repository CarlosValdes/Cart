import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cartitem from './cartitem';
import { toogleSection } from '../stores/cart'

const CartSection = () => {
  const carts = useSelector(store => store.cart.items);
  const statusSection=useSelector(store=>store.cart.statusSection);
  const dispatch = useDispatch();
  const handleSection = () => {
    dispatch(toogleSection());
  }
  return (
    <div className={`fixed top-0 right-0 bg-gray-500 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
    transform transition-transform duration-500 
    ${statusSection === false ? "translate-x-full" : ""}
    `}>
      <h2 className='p-5 text-white text-2xl'>Carrito de Compras</h2>
      <div className='p-5'>
        {carts.map((item, key)=>
          <Cartitem key={key} data={item}/>
        )}
      </div>
      <div className='grid grid-cols-2'>
        <button className='bg-black text-white' onClick={handleSection}>CERRAR</button>
        <button className='bg-green-600 text-white'>PAGAR</button>
      </div>
    </div>
  )
}

export default CartSection