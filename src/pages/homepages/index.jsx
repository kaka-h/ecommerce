import Navbar from "../../component/navbar/Navbar"
import Slider from "../../component/slider/Slider"
import NavigateButton from "../../component/navigatebutton/NavigateButton"
import ProductSection from "../../component/productsection/ProductSection"
import Footer from "../../component/footer/Footer"

const HomePages = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <NavigateButton/>
            <ProductSection/>
            <Footer/>
        </div>
    )
}

export default HomePages
