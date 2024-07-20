import { atom } from "recoil";

export const categoryState = atom({
    key: 'category',
    default: ''
})
   
export const productState = atom ({
    key:"product",
    default: []
    
})