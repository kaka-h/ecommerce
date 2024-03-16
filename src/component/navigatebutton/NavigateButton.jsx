import { Button } from "@material-tailwind/react"
import clothes from '../../assets/image/clothes.jpeg'
import { FilterProduct } from "../../features/slice/filteredslice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const NavigateButton = () => {
    const buttons = ['Shoes', 'Hoodies', 'Dresses', 'Bags', 'Jeans', 'Suits', 'Jackets', 'T-Shirts']
    const dispatch = useDispatch()

    return (
        <div>
            <div className=" flex justify-center flex-wrap py-8 md:gap-0 gap-5">
                {buttons.map ((data, index) => (
                        <div key={index} className='mr-4'>
                        <Link to={`/filteredproducts/` + data}>
                                <Button 
                                    onClick={() => dispatch(FilterProduct(data))} variant="outlined" ripple={true} className="hover:bg-green-300 duration-300 ease-in-out" size="lg">{data}
                                </Button>
                            </Link>
                        </div>
                    ))}
            </div>
            <div className="bg-green-400 p-2 w-[55%] mx-auto rounded-md">
                <h3 className="text-red-900 text-center text-lg font-inter font-bold tracking-normal leading-none">SALES UP TO 50%</h3>
            </div>
            <div className="flex justify-center items-center py-4">
                <img className="md:h-[600px] md:w-[70%] h-96 w-96 rounded-md shadow-lg shadow-gray-600" src={clothes} alt="clothes" />
            </div>
        </div>
    )
}

export default NavigateButton
