import { createSlice } from "@reduxjs/toolkit"


export interface LoginInfo {
 email:string
}
const initState:LoginInfo = {
 email: ''
}

const loginSlice = createSlice( {
 name: 'LoginSlice',
 initialState: initState,
 reducers: {
  login: (state, action) => {
   console.log("login")
   return {email: action.payload.email}
  },
  logout: (state, action) => {
   console.log("logout")
   return {email:''}
  }
 }
})

export const {login,logout} = loginSlice.actions
export default loginSlice.reducer
