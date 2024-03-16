import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from './productcard'

const FilteredProduct = () => {
  const products = useSelector((state) => state.filtered.filteredProducts)
  // console.log('product', products)
  const { type } = useParams()
  // console.log('type', type)
  
  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none'>{type}</h1>
        </div>
        <div className='grid md:grid-cols-4 justify-items-center p-12 gap-12'>
          {products.filter((product) => product.type === type).map((product, index) => (
            <div key={index}>
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                text={product.text}
                color={product.color}
                price={product.price}
                size={product.size}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilteredProduct
