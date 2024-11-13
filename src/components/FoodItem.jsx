import FoodCard from "./FoodCard";
import FoodData from "./FoodData";
const FoodItem = () => {
    return (
        <>
            <div className="mt-5 flex flex-wrap gap-10 mt-16 mb-10">
                {
                    FoodData.map((food, key)=> {
                        return <FoodCard item={food} key={food.id} />
                    })
                }
               
            </div>
        </>
    );
}

export default FoodItem