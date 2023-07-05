import React, { useContext, useEffect } from 'react'
import { CommonContext } from '../../Context/CommonContext';
import Lottie from 'react-lottie';
import animationData from '../../lottie/emptylist.json';
const imgurl = process.env.REACT_APP_IMG_URL;

function SideCart() {
    const { cartModal, setCartModal } = useContext(CommonContext);

    const lottieOptions = {
        animationData: animationData,
        loop: true, // Set to false if you don't want the animation to loop
        autoplay: true // Set to false if you don't want the animation to play automatically
      };

   
    const dataCart = [
        // {
        //     "product_id": 23,
        //     "amount": 8850,
        //     "product_count": 1,
        //     "title": "Saffron Dlx T.T & E.T ",
        //     "image": "Saffron DLX ET a.webp",
        //     "bed_type": "Single",
        //     "dimension": "72 x 30",
        //     "thickness": "T.T 5\"",
        //     "free": "Sleepy pillow - 1 for single size mattress or 2 for double size mattress + Alicia bedspread",
        //     "color": "Stock Color",
        //     "percentage": 0,
        //     "price_original": 8850,
        //     "sub_devision": "0"
        // },
        // {
        //     "product_id": 23,
        //     "amount": 8850,
        //     "product_count": 1,
        //     "title": "Saffron Dlx T.T & E.T ",
        //     "image": "Saffron DLX ET a.webp",
        //     "bed_type": "Single",
        //     "dimension": "72 x 30",
        //     "thickness": "T.T 5\"",
        //     "free": "Sleepy pillow - 1 for single size mattress or 2 for double size mattress + Alicia bedspread",
        //     "color": "Stock Color",
        //     "percentage": 0,
        //     "price_original": 8850,
        //     "sub_devision": "0"
        // },
    ]

    return (
        <>
            <div className={`${cartModal ? '' : 'tw-translate-x-full'} tw-transition-all tw-duration-500 tw-fixed tw-right-0 tw-top-0 tw-w-[350px] tw-bg-white tw-h-screen tw-z-[1000] tw-shadow-lg `}>

                <div className='tw-h-full tw-w-full tw-flex-col tw-justify-between h-full '>
                    <div className='tw-flex tw-justify-between tw-items-center tw-p-2 tw-shadow-md '>
                        <img onClick={() => { setCartModal(false) }} className='tw-w-10 active:tw-opacity-50 tw-cursor-pointer' src="/assests/svg/close.svg" alt="" />
                        <p className='tw-text-black tw-font-bold tw-capitalize tw-text-xl'>Cart section</p>
                        <p className='tw-invisible '>Cart section</p>

                    </div>

                    {dataCart.length  === 0 ? 
                    <div className='tw-flex tw-flex-col tw-gap-5 tw-justify-center tw-items-center'>
                         <Lottie width={200} options={lottieOptions} />
                        <p className='tw-capitalize'>Cart is empty</p>
                    </div>
                    :

                    <div className='tw-h-4/5 tw-overflow-y-scroll  '>
                        {dataCart.map((item, index) =>
                            <CartCard key={index} pname={item.title} image={item.image} btype={item.bed_type} bdimention={item.dimension} thick={item.thickness} free={item.free} color={item.color} count={item.product_count} price={item.amount} />
                        )}
                    </div>
                    }

                    <div className='tw-px-2 tw-pb-1'>
                        <hr className='tw-border tw-border-dashed  tw-border-black' />
                        <div className='tw-grid tw-grid-cols-2 tw-gap-3 '>
                            <button className='tw-capitalize tw-border-none tw-py-2 active:tw-opacity-50 tw-bg-black tw-text-white tw-font-extrabold tw-cursor-pointer tw-rounded-md'>view cart</button>
                            <button className='tw-capitalize tw-border-none tw-py-2 active:tw-opacity-50 tw-bg-black tw-text-white tw-font-extrabold tw-cursor-pointer tw-rounded-md'>checkout</button>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SideCart

const CartCard = (props) => {
    return (
        <>
            <div className='tw-flex tw-flex-col tw-shadow-md tw-p-2 tw-border tw-border-black'>
                <div className='tw-flex tw-items-start tw-gap-2 '>
                    <img className='tw-w-20' src={imgurl + props.image} alt="" />
                    <div className='tw-flex tw-flex-col tw-gap-2'>
                        <p>{props.pname}</p>
                        <div className='tw-flex tw-gap-2'>
                            <p>Qty x {props.count}</p>
                            <p>Price: ₹ {props.price}</p>
                        </div>
                        <p>{props.btype} | {props.bdimention} | {props.thick}</p>
                        <p className='tw-text-xs'> <span className='tw-font-bold'>Free Gift </span>- {props.free}</p>
                        <p>selected color : <span className='tw-capitalize text-black font-bold'>{props.color}</span></p>
                    </div>
                </div>
                <div className='tw-grid tw-grid-cols-2 tw-gap-3 '>
                    <button className='tw-capitalize tw-border-none tw-py-2 active:tw-opacity-50 tw-bg-green-500 tw-text-white tw-font-extrabold tw-cursor-pointer tw-rounded-md'>edit</button>
                    <button className='tw-capitalize tw-border-none tw-py-2 active:tw-opacity-50 tw-bg-red-500 tw-text-white tw-font-extrabold tw-cursor-pointer tw-rounded-md'>delete</button>

                </div>
            </div>
        </>
    )
}