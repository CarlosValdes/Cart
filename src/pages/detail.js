import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
//import { productos } from '../products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import axios from 'axios'

const Detail = () => {
  const {sku}= useParams();
  const [detail, setDetail]=useState([]);
  const dispatch = useDispatch();
  const [quantity, setQty]=useState(1)


  const [inventario, setInv] = useState([])

  const getInventory = () => {

      axios.get(`http://185.239.238.174:8080/api/inventory/${sku}`)
          .then((res) => {
              console.log(res.data)
              setInv(res.data)
          })
  }
  useEffect(() => {
      getInventory();
  }, []);


  const getProductList=()=>{
    axios.get("http://127.0.0.1:8080/api/product")
    .then((res)=>{
      //console.log(res.data)
      //setProducts(res.data)
      //console.log(sku)
      const findDetail=res.data.filter(product=>product.sku === sku);
      //console.log(findDetail)
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
},[sku])


//console.log(detail);
  const handleMinus=()=>{
    setQty(quantity-1 < 1? 1 : quantity-1);
  }
  const handlePlus=()=>{
    setQty(quantity+1);
  }
  const handleAddToCart=()=>{
    console.log ("Agregando");
    dispatch(addToCart({
      productId:detail.id,
      qty:quantity
    }))
  }
  
  return (
    <div>
      <h2 className='text-3xl text-center'>Product Detail</h2>
      <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
          <img src={detail.image} alt="" className='w-full'/>
        </div>
        <div className=' flex flex-col gap-5'>
          <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
          <h5 className=' uppercase font-bold'>Piezzas disponibles: {inventario}</h5>
          <p className='font-bold text-3xl'>${detail.price}</p>
          <div className='flex gap-5'>
            <div className='flex gap-2 justify-center items-center'>
              <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handleMinus}>-</button>
              <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
              <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'onClick={handlePlus}>+</button>
            </div>
            <button className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-xl' onClick={handleAddToCart}>
              Agregar al Carrito
            </button>
          </div>
          <p>
            {detail.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Detail