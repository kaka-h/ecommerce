import { StoreData } from "../../assets/data/StoreData"
import ProductSectionItem from "./ProductSectionItem"

const ProductSection = () => {
  return (
    <div>
        <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
            <h2 className="text-red-600 text-center text-lg font-inter font-bold">SUMMER SALE 40%</h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center py-8 gap-4 mx-auto max-w-7xl">
            {StoreData.slice(0,6).map((product, index) => {
                return (
                    <div key={index}>
                        <ProductSectionItem
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            text={product.text}
                            price={product.price}
                            size={product.size}
                            color={product.color}
                            totalPrice={product.totalPrice}
                        />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProductSection
