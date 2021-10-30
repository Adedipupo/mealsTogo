import { mocks } from "./mock";


export const restuarantRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if(!mock) {
            reject("Not Found");
        }
        resolve(mock);
    });
} 

restuarantRequest().then((result) =>
 console.log(result)
 ).catch((error) => console.log('error'));