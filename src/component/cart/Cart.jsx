import { Fragment } from "react"
import { 
    Dialog,
    DialogHeader,
    DialogBody,
    Tooltip,
    Button,
    DialogFooter,
} from "@material-tailwind/react"
import { useSelector, useDispatch } from "react-redux"
import { removeFromCart } from "../../features/slice/cartslice"

const Cart = ({openModal, setOpen}) => {
    const cart = useSelector((state) => state.cart.cart)
    const totalPrice = useSelector((state) => state.cart.totalPrice)

    const dispatch = useDispatch()

    return (
        <div>
            {cart.length > 0 ? (
                            <Fragment>
                            <Dialog
                            className="border-0 outline-0"
                            open={openModal}
                            handler={() => setOpen(false)}
                            animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0.9, y: -100 },
                            }}
                            >
                            <DialogHeader>Tas Belanjaan</DialogHeader>
                            <DialogBody divider className="flex flex-col justify-center items-start">
                                {cart.map((data, index) => (
                                    <div key={index}>
                                        <div className="grid grid-cols-2 py-4">
                                            <div >
                                                <img src={data.image} className="h-[100px] rounded-md" alt={data.name}/>
                                                <div className="flex flex-col items-start">
                                                    <h4 
                                                    className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                                                        {data.name}
                                                    </h4>
                                                </div>
                                                <div className="max-w-xs ">
                                                    <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                                                        {data.text}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                                                    Pilih Ukuran: {''}
                                                    <span className="ml-2">{data.size}</span>
                                                </p>
                                                <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                                                    Pilih Warna: {''}
                                                    <span className="ml-2 rounded-full px-2" 
                                                        style={{backgroundColor: data.color}}>
                                                    </span>
                                                </p>
                                                <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                                                    Jumlah: {''}
                                                    <span className="ml-2">{data.amount}</span>
                                                </p>
                                                <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                                                    Harga Satuan Barang: {''}
                                                    <span className="ml-2">${data.price}</span>
                                                </p>
                                                <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                                                    Total Harga Barang: {''}
                                                    <span className="ml-2">${data.totalPrice}</span>
                                                </p>
                                                <div className="pt-4">
                                                    <Tooltip content='Hapus Dari Keranjang' placement='bottom' >
                                                        <Button onClick={() => dispatch(removeFromCart(data))} size="sm" color="red" ripple={true} variant="filled">
                                                            Hapus
                                                        </Button>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </DialogBody>
                            <DialogFooter className="flex justify-start items-center">
                                <p className="text-black text-base font-inter tracking-normal leading-none pt-2">
                                    total harga dari semua barang: {''}
                                    <span className="ml-2">{totalPrice}$</span>
                                </p>
                            </DialogFooter>
                            </Dialog>
                        </Fragment>
            ) : (
                <Fragment>
                    <Dialog
                    open={openModal}
                    className="border-0 outline-0"
                    handler={() => setOpen(false)}
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                    >
                    <DialogHeader>Tas Belanjaan</DialogHeader>
                    <DialogBody>
                        <div>
                            <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">Tas Anda Kosong</h1>
                            <p className="text-black text-base font-inter tracking-normal leading-none">Tambahkan Suatu Produk</p>
                        </div>
                    </DialogBody>
                    {/* <DialogFooter>
                    </DialogFooter> */}
                    </Dialog>
                </Fragment>
            )}
        </div>
    )
}

export default Cart
