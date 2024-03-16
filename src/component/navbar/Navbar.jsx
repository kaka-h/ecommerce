import { useState } from 'react';
import Cart from '../cart/Cart';
import logo from '../../assets/image/logo.png'
import WishList from '../../assets/icon/wishlist';
import Bag from '../../assets/icon/bag';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const totalAmount = useSelector((state) => state.cart.totalAmount)
    const [open, setOpen] = useState(false)
    
    const handleOpen = () => {
        setOpen(true)
    }
    return (
        <nav>
            <div className="p-2 w-full bg-black">
                <h3 className='text-white font-inter md:text-2xl font-bold text-center'>Selamat Datang</h3>
            </div>
            <div className='flex justify-around items-center'>
                <div>
                    <img className='h-28 w-full' src={logo} alt="logo" />
                </div>
                <div className='flex flex-row gap-5 items-center'>
                    <div className="flex md:flex-row flex-col items-center">
                        <WishList/>
                        <p className='font-inter md:text-lg text-sm font-medium text-center'>Daftar Keinginan</p>
                    </div>
                    <div className='flex md:flex-row flex-col items-center cursor-pointer' onClick={handleOpen}>
                        {totalAmount > 0 ? (<span className='rounded-full bg-gray-300 px-2 font-inter text-sm mr-1'>{totalAmount}</span> 
                        )
                    : (
                        <Bag/>
                    )}
                        <p className='font-inter md:text-lg text-sm font-medium text-center'>Tas Belanjaan</p>
                        <div>
                            {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
                        </div>
                    </div>
                    <button className='font-inter border border-1 md:text-lg text-sm font-medium mr-4'>
                        Logout
                    </button>
                </div>
            </div>
            <div className='w-full p-4 flex justify-around bg-black'>
                <div className='text-white font-inter md:text-lg text-sm font-medium text-center'>
                    DISKON 50%
                </div>
                <div className='text-white font-inter md:text-lg text-sm font-medium text-center'>
                    Pengiriman dan pengembalian gratis
                </div>
                <div className='text-white font-inter md:text-lg text-sm font-medium text-center'>
                    Metode pembayaran yang Lengkap
                </div>
            </div>
        </nav>
    );
}

export default Navbar;