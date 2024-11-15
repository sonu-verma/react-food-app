import { useEffect, useState } from "react";
import Button from "./Button";
import FoodData from "./FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slice/CategorySlice";
const CategoryMenu = () => {

    const dispath = useDispatch();

    const [categories, setCategories] = useState([]);

    const listUniqueCategories = () => {
        const uniquesCategories = [...new Set(FoodData.map(food => food.category))];
        setCategories(uniquesCategories);
    };

    useEffect( () => {
        listUniqueCategories();
    },[]);

    const selectedCategory = useSelector( (state) => state.category.category);

    return (
        <>
            <div>
                <h3 className="text-xl font-semibold">Find the best food.</h3>
                <div className="my-5 flex gap-3">
                    <Button btnTitle="ALL" handleSetCategory = { () => dispath( setCategory("All") ) } choosedCategory={ selectedCategory== 'All'?" bg-green-500 text-white":"" } />
                    {
                        categories.map(
                            (category, key) => {
                                 return <Button btnTitle={ category } handleSetCategory={ () => dispath( setCategory(category) )}  choosedCategory={ selectedCategory== category ?" bg-green-500 text-white":"" } key={key} />
                            }
                        )
                    }
                    
                </div>
            </div>
        </>
    );
}


export default CategoryMenu