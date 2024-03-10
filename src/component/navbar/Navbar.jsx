import React from 'react'
import logo from '../../assets/image/logo.png'
import WishList from '../../assets/icon/wishlist';
import Bag from '../../assets/icon/bag';

const Navbar = () => {
    return (
        <nav>
            <div className="p-2 w-full bg-black">
                <h3 className='text-white font-inter text-2xl font-bold tracking-normal leading-none text-center'>Welcome ALL</h3>
            </div>
            <div className='flex justify-around items-center'>
                <div>
                    <img className='h-28 w-full' src={logo} alt="logo" />
                </div>
                <div className='flex flex-row items-center'>
                    <button className='font-inter text-base font-medium tracking-normal leading-none text-center mr-4'>
                        Logout
                    </button>
                    <div className="flex flex-row items-center">
                        <WishList/>
                        <p className='font-inter text-base font-medium tracking-normal leading-none text-center'>Wish List</p>
                    </div>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <Bag/>
                        <p className='font-inter text-base font-medium tracking-normal leading-none text-center'>Shopping Cart</p>
                    </div>
                </div>
            </div>
            <div className='w-full p-4 flex justify-around bg-black'>
                <div className='text-white font-inter text-base font-medium tracking-normal leading-none text-center'>
                    50% OFF
                </div>
                <div className='text-white font-inter text-base font-medium tracking-normal leading-none text-center'>
                    Free shipping and returns
                </div>
                <div className='text-white font-inter text-base font-medium tracking-normal leading-none text-center'>
                    Different payment methods
                </div>
            </div>
        </nav>
    );
}

export default Navbar;