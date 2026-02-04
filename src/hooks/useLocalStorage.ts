import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string , initialValue: T){
    const [value , setValue] = useState<T>(()=>{
        const localstorageCart = localStorage.getItem("cartItems");
        if(localstorageCart !== null){
            return(JSON.parse(localstorageCart));
        }
        else{
            return initialValue;
        }
    });

    useEffect(()=>{
        localStorage.setItem(key , JSON.stringify(value))
    } , [key , value])

    return [value , setValue] as [typeof value , typeof setValue];
}
