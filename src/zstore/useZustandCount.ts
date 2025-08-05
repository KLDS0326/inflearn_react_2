
import { create } from "zustand";

//타입정의
export interface CountStore {
    current : number;
    amount : number,
    inc: () => void,
    dec: () => void
    changeAmount: (num:number) => void 
}

export interface CountStore {
    current : number;
    inc: () => void,
    dec: () => void
}


const useZustandCount = create<CountStore>( (set, get) => { 
    return {
        current: 13,
        amount : 1,
        inc: () => {set ({current: get().current + get().amount } ) },
        dec: () => {set ({current: get().current - get().amount } ) },
        changeAmount: (num:number) => {
            set ({amount :num})
        }
    }
})

export default useZustandCount
