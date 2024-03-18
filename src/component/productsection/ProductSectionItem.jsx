import React from 'react'
import { 
    Button,
    Tooltip,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Card
} from "@material-tailwind/react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../features/slice/cartslice"

const ProductSectionItem = ({id, image, name, text, price, size, color, totalPrice}) => {
    const dispatch = useDispatch()
    const defaultSize = size[0]
    const defaultColor = color[0] 

    return (
        <Card className="md:w-96 w-52">
            <Typography className='mb-2 absolute -rotate-45 top-12 right-8 z-10 text-blue-900' variant='h4'>
                SALE%
            </Typography>
            <CardHeader floated={false} className="h-96">
                <img src={image} alt={name} />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {name}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    {text}
                </Typography>
                <div className='flex justify-between items-center pt-4'>
                    <Typography color="blue" className="font-medium" textGradient>
                        Ukuran Kiri: {''}
                        <span className='text-gray-500 font-extralight'>{defaultSize}</span>
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        Color: <span className='px-2 rounded-full' style={{backgroundColor: defaultColor}}></span>
                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content='Add to Cart' placement='bottom'>
                    <Button onClick={() => dispatch(addToCart({
                        id: id,
                        amount: 1,
                        price: price,
                        totalPrice: totalPrice,
                        image: image,
                        text: text,
                        size: defaultSize,
                        color: defaultColor,
                        name: name,
                    }))} size='lg' color='blue-gray' variant='outlined' ripple={true}>
                        Tambah ke Keranjang
                    </Button>
                </Tooltip>
            </CardFooter>
        </Card>
    )
}

export default ProductSectionItem
