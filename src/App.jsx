import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePages from "./pages/homepages"
import FilteredProduct from "./component/filterproduct/FilteredProduct"
import SingleProduct from "./component/singleproduct/SingleProduct"
import { useSelector } from "react-redux"

function App() {
  const cart = useSelector((state) => state.cart.cart)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const totalAmount = useSelector((state) => state.cart.totalAmount)

  console.log('totalPrice', `$${totalPrice}`)
  console.log('totalAmount', totalAmount)
  // console.log('cart', cart)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/filteredproducts/:type" element={<FilteredProduct />} />
        <Route path="/singleproduct/:type/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App