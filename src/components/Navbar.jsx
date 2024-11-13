import React from "react";
import logo from '../assets/logo.png';
const Navbar  = () => {
    const currentDateUTC = new Date().toUTCString().slice(0,16);
    return (
        <>
            <nav className="flex flex-col lg:flex-row justify-between py-2 mb-12 mt-5">
                <div>
                    {/* <h3  className="text-xl font-bold text-gray-400"> { currentDateUTC } </h3> */}
                    <h2 className="text-2xl font-bold"><img src={logo} className="w-16 h-16"/> </h2>
                </div>
                <div>
                    <input className="p-3 border border-gray-400 text-sm rounded-md outline-none w-full lg:w-[25vw]" type='text' placeholder="Search" autoComplete="off" id="search-product" name="searc" />
                </div>
            </nav>
        </>
    );
}

export default Navbar