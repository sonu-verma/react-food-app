import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cart);
    const [ActiveCart, setActiveCart] = useState(false);

    const cartLength = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
    const totalPrice = cartItems.reduce((totalPrice, item) => totalPrice + item.qty * item.price , 0);

    const  navigate = useNavigate();
    return (
        <>
            <div className={`fixed right-0 top-0 bg-white h-full w-full lg:w-[19vw] p-5 ${ActiveCart ? "translate-x-0" : "translate-x-full"} transition-all duration-700  z-30`}>
                <div className="flex justify-between ">
                    <span className="font-bold text-gray-700">My Orders</span>
                    <IoMdClose className='border-2 border-gray-400 text-gray-500 font-bold  p-1 text-xl rounded-md hover:border-red-500 hover:text-red-500 cursor-pointer' onClick={ () => setActiveCart(!ActiveCart)}/>
                </div>
                <div className="mt-10">
                    { cartItems.length == 0 && <h2 className="font-bold text-center">Your Cart is empty.</h2> }
                    { cartItems.map( (item, index) => {
                      return  <CartItem item={item} key={index} />
                    }) }
                </div>
                <div className="absolute bottom-0">
                    <h3 className="font-semibold">Item: { cartLength }</h3>
                    <h3 className="font-semibold">Total Amount: ${totalPrice}</h3>
                    <hr className="font-bold mb-2 mt-2"/>
                    <button className="bg-green-500 text-white hover:bg-green-400  px-3 py-2 rounded-md font-bold w-[90vw] lg:w-[16vw] mb-5" onClick={ () => navigate("/success") }>Checkout</button>
                </div>
            </div>

            <FaCartArrowDown className={`fixed right-2 bottom-10 text-5xl p-3 rounded-2xl bg-white  hover:bg-green-400 transition-all ease-in-out duration-1000 ${cartLength > 0 && "animate-bounce duration-300 transition-all"} `}  onClick={ () => setActiveCart(!ActiveCart)}/>
        </>
    );
}

export default Cart;