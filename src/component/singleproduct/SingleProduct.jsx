import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import {Button, Tooltip} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/slice/cartslice'

const SingleProduct = () => {
  const { id } = useParams()
  const product = useSelector((state) => state.filtered.singleProduct)
  const productSize = product[0].size  ? product[0].size[0] : null;
  const productColor = product[0].color  ? product[0].color[0] : null;
  const [color, setColor] = useState(productColor)
  const [size, setSize] = useState(productSize)
  // console.log('size', size)
  // console.log('color', color)
  // console.log('product', product)

  const dispatch = useDispatch()

  return (
    <div>
      {product.filter ((data) => data.id === id).map((data, index) => (
        <div key={index}  className='flex justify-center items-center py-10'>
          <div className='pl-44 grow-[2]'>
            <img src={data.image} className='h-[850px] rounded-lg' alt="" />
          </div>
          <div className='grow-[3]'>
            <div className='max-w-lg'>
              <h5 className='text-2xl font-inter font-bold tracking-normal leading-none pb-4'>{data.name}</h5>
              <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">15% OFF</p>
              <p className='text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4'>{data.text}</p>
              <div className='pb-4'>
                {data.size ? (
                <div>
                  <label htmlFor='size' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Pick a size
                  </label>
                  <select 
                  id='size' 
                  value={size} 
                  onChange={(e) => setSize(e.target.value)} 
                  name='size' 
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    {data.size.map((size, index) => (
                      <option value={size} key={index}>{size}</option>
                    ))}
                  </select>
                </div>
                ) : (
                  null
                )}
              </div>
              <div className='pb-4'>
                  <label htmlFor='color' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Pick a color
                  </label>
                  <select 
                  id='color' 
                  value={color} 
                  onChange={(e) => setColor(e.target.value)} 
                  name='color' 
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    {data.color.map((color, index) => (
                      <option value={color} key={index}>{color}</option>
                    ))}
                  </select>
              </div>
              <Tooltip content="Add to cart" placement="bottom">
                <Button onClick={() => dispatch(addToCart({
                  amount: 1,
                  price: data.price,
                  totalPrice: data.price,
                  id: data.id,
                  size: size,
                  color: color,
                  name: data.name,
                }))} size='lg' variant='outlined' ripple={true} >Add to cart</Button>
              </Tooltip>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SingleProduct
