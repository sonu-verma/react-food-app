const Button = ({ btnTitle, handleSetCategory, choosedCategory}) => {
    return (
        <>
            <button 
                className={`px-3 py-2  bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${choosedCategory}`}
                onClick={handleSetCategory}
            >
                { btnTitle }
            </button>
        </>
    );
}

export default Button