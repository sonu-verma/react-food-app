import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
const Success = () => {

    const [ loading, setLoading ] = useState(true);

    useEffect( () => {
        setTimeout( () => {
            setLoading(false)
        }, 3000 )
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full">

            {
                loading ?  (
                                <PropagateLoader
                                    color="green"
                                />
                            )
                        : 
                            (
                                <div>
                                    <h2 className="text-3xl font-bold mb-2 items-center">Order Successfull!</h2>
                                    <p className="text-xl">Your order has been Successfully placed.</p>
                                </div>
                            )
            }
           
        </div>
    );
}

export default Success