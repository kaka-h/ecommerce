import React from 'react'
import logo from '../../assets/image/logo.png'

const Footer = () => {
    const year = new Date ().getFullYear()

    return (
        <div>
            <div className="flex justify-center items-center">
                <hr className='h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none' />
            </div>
            <div className="flex justify-around pt-4 items-center">
                <div>
                    <img className='h-20' src={logo} alt="logo" />
                </div>
                <div>
                    <p className='text-black text-sm font-inter normal-case'>
                        Copyright &copy; {year} page by Kaka Hardiansyah;
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
