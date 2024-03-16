import { nextSlide, prevSlide, dotSlide } from '../../features/slice/SliderSlice'
import { useSelector, useDispatch } from 'react-redux'
import { DummyData } from '../../assets/data/DummyData'
import ChevLeft from '../../assets/icon/chevleft'
import ChevRight from '../../assets/icon/chevright'

const Slider = () => {
    const dispatch = useDispatch()
    const Slide = useSelector((state) => state.slider.value)
    // console.log(Slide)

    return (
        <div className='relative pb-4'>
            <div>
                {DummyData.map((data) => {
                    return (
                    <div key={data.id} className={parseInt(data.id) === Slide 
                    ? 'opacity-100 duration-700 ease-in-out scale-100' 
                    : 'opacity-0 duration-700' }>
                        <div>
                            {parseInt(data.id) === Slide && (
                            <img className='w-full md:h-screen h-[600px]' src={data.image} alt="image" />
                        )}
                        </div>
                        <div className='absolute top-44 mx-auto inset-x-1/4'>
                            <p className='text-white font-inter text-4xl font-bold'>
                                {parseInt(data.id) === Slide && data.text}
                            </p>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className='flex absolute bottom-10 md:left-[45%] left-[30%] gap-3'>
                {DummyData.map((dot, index) => {
                    return (
                        <div key={dot.id}>
                            <div className={index === Slide ? 'bg-green-300 rounded-full p-4' : 'bg-gray-500 rounded-full p-4'}>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <button className='absolute top-[50%] left-4 bg-gray-800 text-white rounded-full p-2 transition-all hover:bg-green-300 hover:text-black' onClick={() => dispatch(prevSlide(Slide - 1))}>
                    <ChevLeft/>
                </button>
                <button className='absolute top-[50%] right-4 bg-gray-800 text-white rounded-full p-2 transition-all hover:bg-green-300 hover:text-black' onClick={() => dispatch(nextSlide(Slide + 1))}>
                    <ChevRight/>
                </button>
            </div>
        </div>
    )
}

export default Slider
