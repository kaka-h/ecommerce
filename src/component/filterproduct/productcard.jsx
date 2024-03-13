import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slice/filteredslice";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({id, image, name, text, color, price, size}) => {

    const dispatch = useDispatch()
    const {type} = useParams()

    return (
        <Link to={`/singleproduct/${type}/` + id} >
        <Card className="w-full shadow-lg" onClick={() => dispatch(singleProduct(id))}>
            <CardHeader color="blue-gray" className="relative h-96">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                {name}
                </Typography>
                <Typography className="text-center">
                {text}
                </Typography>
            </CardBody>
                    <Typography>Price: {price}</Typography>
            <CardFooter divider className="flex flex-col items-center">
                    <Typography>{size?.map((data, index) => (
                        <i key={index} className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4">{data}</i>
                        ))}
                    </Typography>
                <Typography>
                    {color?.map((data, index) => (
                        <i key={index} className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4">{data}</i>
                    ))}
                </Typography>
            </CardFooter>
        </Card>
        </Link>
    )
}

export default ProductCard
