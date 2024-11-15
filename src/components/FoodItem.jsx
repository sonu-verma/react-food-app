import FoodCard from "./FoodCard";
import FoodData from "./FoodData";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";
const FoodItem = () => {

    const handleToast = (name) =>toast.success(`Added ${name}`);
    
    const category = useSelector( (state) => state.category.category);
    const search = useSelector( (state) => state.search.search );


    const filteredData = FoodData.filter( (food) => {
        if(category == "All"){
            return food.name.toLowerCase().includes(search.toLowerCase())
        }else{
            return (
                category === food.category && 
                food.name.toLocaleLowerCase().includes(search.toLowerCase())
            );
        }
    });
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="mt-5 flex flex-wrap gap-10 mt-16 mb-10">
            
                { filteredData.length == 0 &&  <span>No Data Found</span>}
                {
                    filteredData.map((food) => {
                    
                        return <FoodCard item={food} handleToast={handleToast} key={food.id} />
                    })
                }
               
            </div>
        </>
    );
}

export default FoodItem