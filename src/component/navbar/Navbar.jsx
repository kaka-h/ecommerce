import { useState } from 'react';
import Cart from '../cart/Cart';
import logo from '../../assets/image/logo.png'
import WishList from '../../assets/icon/wishlist';
import Bag from '../../assets/icon/bag';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/slice/authslice';
import { Avatar, Tooltip, Button } from '@material-tailwind/react';

const Navbar = () => {
    const totalAmount = useSelector((state) => state.cart.totalAmount)
    const user = useSelector((state) => state.auth.user)
    const { name, image } = user
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    
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
                    <div className='flex flex-row items-center cursor-pointer pl-4'>
                        {image && (<Avatar src={image} alt='avatar' size='sm' className='mr-2'></Avatar>)}
                        <div onClick={() => dispatch(logout())}>
                            <Tooltip content='Sign Out' placement='bottom'>
                                <p className='font-inter text-sm font-medium'>
                                    Hi {name.charAt('0').toUpperCase() + name.slice(1)}
                                </p>
                            </Tooltip>
                        </div>
                    </div>
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