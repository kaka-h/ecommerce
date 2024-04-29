import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from './productcard'
import { Button } from '@material-tailwind/react'
import { 
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react'
import Error from '../error/Error'
import { 
  FilterProduct , 
  filterGender, 
  // sortByPrice, 
  filterByColor, 
  filterBySize
} from '../../features/slice/filteredslice'

const FilteredProduct = () => {
  const products = useSelector((state) => state.filtered.filteredProducts)
  const error = useSelector((state) => state.filtered.error)
  // console.log('product', products)
  const { type } = useParams()
  // console.log('type', type)

  const dispatch = useDispatch()

  const genderButtons = ['male', 'female']
  const colorButtons = ['red', 'blue', 'black', 'green', 'purple', 'yellow', 'orange', 'brown']
  const sizeButtons = ['S', 'M', 'L', 'XL']
  
  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none'>{type}</h1>
          <div className='flex items-center justify-between py-8'>
            <div className="flex items-center">
              {genderButtons.map((data, index) => (
                <div key={index}>
                  <Button
                    onClick={() => dispatch(filterGender(data))}
                    color="gray"
                    size='lg'
                    variant="outlined"
                    className="mr-4 text-black hover:bg-gray-300 duration-300 ease-in-out"
                    ripple={true}
                  >
                    {data}
                  </Button>
                </div>
              ))}
                {/* <Button
                  // onClick={() => dispatch(sortByPrice())}
                  color="gray"
                  size='lg'
                  variant="outlined"
                  className="mr-4 text-black hover:bg-gray-300 duration-300 ease-in-out"
                  ripple={true}
                >
                  Harga Tertinggi
                </Button> */}
                <Menu>
                  <MenuHandler>
                    <Button                   
                      color="gray"
                      size='lg'
                      variant="outlined"
                      className="mr-4 text-black hover:bg-gray-300 duration-300 ease-in-out"
                      ripple={true}>
                        Pilih Warna
                      </Button>
                  </MenuHandler>
                  <MenuList>
                    {colorButtons.map((data, index) => (
                      <MenuItem
                        key={index}
                        style={{ color: data }}
                        onClick={() => dispatch(filterByColor(data))}
                      >
                        {data}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                {/* <Menu>
                  <MenuHandler>
                    <Button      
                      disabled={type === 'Bags' || type === 'Shoes'}
                      color="gray"
                      size='lg'
                      variant="outlined"
                      className="mr-4 text-black hover:bg-gray-300 duration-300 ease-in-out"
                      ripple={true}>
                        Pilih Ukuran
                      </Button>
                  </MenuHandler>
                  <MenuList>
                    {sizeButtons.map((data, index) => (
                      <MenuItem
                        key={index}
                        onClick={() => dispatch(filterBySize(data))}
                      >
                        {data}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu> */}
            </div>
            <div className='pr-14'>
              <Button                
                color="gray"
                size='lg'
                variant="outlined"
                className="mr-4 text-black hover:bg-gray-300 duration-300 ease-in-out"
                ripple={true}>Hapus Filter</Button>
            </div>
          </div>
        </div>
        {error ? ( 
          <Error></Error> 
          ) : ( 
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
                />
              </div>
          ))}
        </div>
        ) }
      </div>
    </div>
  )
}

export default FilteredProduct
