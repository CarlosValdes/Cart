import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/images/cart.png'
import { useSelector , useDispatch } from 'react-redux'
import { toogleSection } from '../stores/cart'
import { store } from '../stores'

const Header = () => {
  const [totalQty, setTotalQty]=useState(0);
  const carts=useSelector(store=>store.cart.items);
  const dispatch = useDispatch();
  useEffect (()=>{
    let total=0;
    carts.forEach(item => total += item.qty);
    setTotalQty(total);
  },[carts])
  const handleSection = () => {
    dispatch(toogleSection());
  }
  return (
    <header className='flex justify-between items-center mb-5'>
      <Link to="/" className='text-xl font-semibold'>Pagina Principal</Link>
      <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative' onClick={handleSection} >
        <img src={cart} alt="" className='w-6' />
        <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>{totalQty}</span>
      </div>
    </header>
  )
}

export default Header