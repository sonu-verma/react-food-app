import { useDispatch } from "react-redux"
import { AddToCart } from "../redux/slice/CartSlice"
const FoodCard = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg" key={item.id}>
                <img
                    src={item.img}
                    className="h-[150px]"
                />
                <div className="text-sm flex justify-between">
                    <h2>{item.name}</h2>
                    <span>${item.price}</span>
                </div>
                <p className="text-sm font-normal py-3">
                    {item.desc.slice(0, 160)}...
                </p>
                <div className="flex">
                    <button 
                        onClick={
                            () => dispatch(
                                AddToCart(
                                    { 
                                        ...item, qty: 1 
                                    }
                                )
                            )
                            } 
                        className="font-bold text-left bg-green-500 hover:bg-green-600 ml-auto rounded-md p-1 hover:text-white">
                            Add to cart
                    </button>
            </div>
        </div >
        </>
    )
}

export default FoodCard