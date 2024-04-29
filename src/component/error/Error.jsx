import { Alert } from "@material-tailwind/react";

import React from 'react'

const Error = () => {
    return (
        <div className="grid grid-cols-1 items-center justify-items-center">
            <div className="w-[96]">
                <Alert color="red" className="text-xl font-inter font-bold">
                    Maaf tidak ada produk yang sesuai dengan filter anda ... Hapus Filter dan coba lagi 😀.
                </Alert>
            </div>
        </div>
    )
}

export default Error
