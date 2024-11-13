import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoTrash } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { RemoveToCart } from "../redux/slice/CartSlice";
import { increaseQty, descreaseQty } from "../redux/slice/CartSlice";
const CartItem = ( { item } ) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className="flex gap-2 shadow-md p-3 bg-gray-100 rounded-lg mb-3" key={item.id}>
                <img src={item.img} className="h-10 w-50" />
                <div className="leading-5">
                    <div className="flex justify-center items-center gap-2  right-7">
                        <h2 className="font-bold text-gray-800">{ item.name } </h2>
                        <IoTrash 
                        onClick={()=>dispatch(RemoveToCart(item))}
                        className="absolute right-7 cursor-pointer"/>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-green-400 font-bold">${item.price}</span>
                        <div className="flex justify-center items-center gap-2 absolute right-7">
                            <AiOutlinePlus  
                            onClick={ () => dispatch(increaseQty(item))}
                            className="border-2 p-1 text-xl font-bold rounded-md text-gray-600 hover:text-white hover:bg-green-500 p-1 transition-all ease-linear cursor-pointer" />
                            <span> { item.qty }</span>
                            <AiOutlineMinus 
                            onClick={ () => dispatch(descreaseQty(item))}
                            className="border-2 p-1 text-xl font-bold rounded-md text-gray-600 hover:text-white hover:bg-green-500 p-1 transition-all ease-linear cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem