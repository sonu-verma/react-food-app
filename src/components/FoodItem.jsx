import FoodCard from "./FoodCard";
import FoodData from "./FoodData";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";
const FoodItem = () => {

    const handleToast = (name) =>toast.success(`Added ${name}`);
    
    const category = useSelector( (state) => state.category.category);
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="mt-5 flex flex-wrap gap-10 mt-16 mb-10">
                {

                    FoodData.filter( (food) => {
                        if(category === 'All'){
                            return food;
                        }else{
                            return category == food.category
                        }
                    }).map((food) => {
                        return <FoodCard item={food} handleToast={handleToast} key={food.id} />
                    })

                    // FoodData.map((food, key)=> {
                    //     return <FoodCard item={food} handleToast={handleToast} key={food.id} />
                    // })
                }
               
            </div>
        </>
    );
}

export default FoodItem