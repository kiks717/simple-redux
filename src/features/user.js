import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = {name : "", age : 0, email : ""}

export  const userSlice = createSlice({
    name : "username",
    initialState : {value : {name : "", age : 0, email : ""}},
    reducers   :{
        login : ( state,action) => {
            //state je stanje koje zelimo da mijenjamo 
            //i uzima ove value iznad 
            //action uzima payload i type
            //do something with state,grab prevState
            state.value = action.payload;
        },

        logout : (state) => {
            state.value = initialStateValue
        }
    }
})
export const {login,logout} = userSlice.actions

export default userSlice.reducer 