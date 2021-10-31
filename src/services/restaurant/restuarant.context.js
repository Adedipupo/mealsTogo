import React, { useState, useEffect, useMemo, useContext } from 'react';
import { restuarantRequest, restuarantTransform } from './restaurants.service';


export const RestaurantsContext = React.createContext();


export const RestaurantsContextProvider = ({ children }) => {
    const [restuarants, setRestuarants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const retrieveRestuarants = () => {
        setIsLoading(true);
        setTimeout(()=>{
            restuarantRequest()
            .then(restuarantTransform)
            .then((result)=>{
                setIsLoading(false);
                setRestuarants(result);
            }).catch(error => {
                setIsLoading(false);
                setError(error);
            })
        },2000)
    }

    useEffect(() => {
        retrieveRestuarants();
    } , []);
    return (
        <RestaurantsContext.Provider value={{
            restuarants,
            isLoading,
            error,
        }}>
            {children}
        </RestaurantsContext.Provider>)

}