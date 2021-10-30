import { mocks } from "./mock";
import camelize from "camelize";


export const restuarantRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if(!mock) {
            reject("Not Found");
        }
        resolve(mock);
    });
} 

export const restuarantTransform = ({results = []}) => {
    const mappedResults = results.map((restuarant) => {
        return {
            ...restuarant,
            isOpen: restuarant.opening_hours && restuarant.opening_hours.open_now,
            isCloseTemporarily: restuarant.business_status === "CLOSED_TEMPORARILY",
        }
    });
     return results;
}

restuarantRequest().
then(restuarantTransform)
.then((restuarantTransform) =>
 console.log(restuarantTransform)
 ).catch((error) => console.log('error'));