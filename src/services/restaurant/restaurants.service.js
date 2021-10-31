import { mocks,mockImages } from "./mock";
import camelize from "camelize";


export const restuarantRequest = (location) => {
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
        restuarant.photos = restuarant.photos.map((p) => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length -1))]
        })
        return {
            ...restuarant,
            isOpen: restuarant.opening_hours && restuarant.opening_hours.open_now,
            isCloseTemporarily: restuarant.business_status === "CLOSED_TEMPORARILY",
        }
    });
     return results;
}
