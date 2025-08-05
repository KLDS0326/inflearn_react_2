import { create } from "zustand";
import { loginPost } from "../api/memberApi";
import { data } from "react-router";
import { removeCookie, setCookie } from "../util/cookieUtil";

//서버에서 가져올 데이터. 
export interface MemberInfo {
    email:string,
    nickname:string,
    accessToken: string, 
    refreshToken: string,
    roleNames: string[]
}

export interface MemberStore {
   member: MemberInfo;
   status: '' | 'pending' | 'fulfilled' | 'error';
   login: (email:string, pw:string) => void,
   logout: () => void ,
   save: (memberInfo: MemberInfo) => void 
}

const initState:MemberInfo = {
   email: '',
   nickname: '',
   accessToken:'',
   refreshToken: '',
   roleNames: []
}

// const useZustandMember = create<MemberStore>( (set) => {
//     return {
//         member : initState,
//         status : '',
//         login: async (email:string, pw:string) => {
//             const data = await loginPost(email, pw)
//             console.log(data)
//             set( {member: data, status: 'fulfilled' } )

//             const newState = {...data, status: 'fulfilled'}
//             setCookie("member",JSON.stringify(newState), 1) //1일

//          },
//         logout: () => { 
//             set( {member: {...initState}, status: '' } )
//             removeCookie("member")
//         },
//         save: (memberInfo: MemberInfo) => {
//             set( {member: memberInfo, status: 'fulfilled' } )

//         }
//     }
// })
const useZustandMember = create <MemberStore> ( (set) => ({
   member: initState,
   status: '',
   login: async (email: string, pw: string) => {
      set({ status: 'pending' });
      
      try {
         const data = await loginPost(email, pw) // <- 비동기 호출
         console.log("save new data", data)
         set({ member: { ...data }, status: 'fulfilled' })
         const newState = {...data, status: 'fulfilled'}
         
         setCookie("member",JSON.stringify(newState), 1) //1일
      
      } catch (error) {
         console.error("Login failed", error)
         set({ status: 'error' })
      }
   },
   logout: () => {
      set({ member: { ...initState }, status: '' })
      removeCookie("member")
   },
   save: (memberInfo:MemberInfo) => {
      set({member: memberInfo, status:'fulfilled'})
   }
}));



export default useZustandMember
