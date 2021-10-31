import React, { useState, useEffect, useMemo, useContext } from 'react';
import { restuarantRequest, restuarantTransform } from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantsContext = React.createContext();


export const RestaurantsContextProvider = ({ children }) => {
    const [restuarants, setRestuarants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {location} = useContext(LocationContext);


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
         const locationString = `${location.lat}, ${location.lng}`;
         console.log(locationString);
        retrieveRestuarants(locationString);    
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