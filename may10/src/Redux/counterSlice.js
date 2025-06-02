import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'counter',
  initialState:[],
  
  reducers: {
    increment: (state,action) => {
    state.push(action.payload)
    },

     Delete:(state,action)=>{
      const index = state.findIndex(item => item.id === action.payload);
      if (index !== -1) {
      state.splice(index, 1);
       }
    //  return  state.filter((items)=>items.id!==action.payload.id)
    },
 


}
})

export const { increment,Delete} = counterSlice.actions
export default counterSlice.reducer


