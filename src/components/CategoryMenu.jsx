import Button from "./Button";

const CategoryMenu = () => {
    return (
        <>
            <div>
                <h3 className="text-xl font-semibold">Find the best food.</h3>
                <div className="my-5 flex gap-3">
                    <Button btnTitle="ALL" />
                    <Button btnTitle="Lunch" />
                    <Button btnTitle="BreakFast" />
                    <Button btnTitle="Dinner" />
                    <Button btnTitle="Snacks" />
                </div>
            </div>
        </>
    );
}


export default CategoryMenu